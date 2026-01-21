import React, { useState, useEffect } from 'react';
import { X, Upload, Check } from 'lucide-react';
import { Product, CAMPAIGN_DEADLINE } from '../constants';
import { ApplicationFormState } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: Product | null;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, selectedProduct }) => {
  const [formData, setFormData] = useState<ApplicationFormState>({
    name: '',
    instagramHandle: '',
    selectedProductCode: '',
    plan: 'commission',
    email: '',
    imageFile: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, selectedProductCode: selectedProduct.code }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in-up">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} />
          </div>
          <h3 className="text-2xl font-bold text-stone-800 mb-2">応募完了！</h3>
          <p className="text-stone-600 mb-6">
            ご応募ありがとうございます。<br/>
            オーナーズLABより、{CAMPAIGN_DEADLINE}までにご連絡いたします。
          </p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition"
          >
            閉じる
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold text-stone-800">エントリーフォーム</h3>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X size={24} className="text-stone-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Selected Product Summary */}
          {selectedProduct ? (
            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <img src={selectedProduct.image} alt="Selected" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <p className="text-xs text-emerald-700 font-bold">選択中の商品</p>
                <p className="font-bold text-stone-800">{selectedProduct.code} - ¥{selectedProduct.salePrice?.toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm">
              ※商品が選択されていません。トップページから選択してください。
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">お名前</label>
              <input 
                required
                type="text" 
                className="w-full p-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="山田 花子"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Instagram アカウントID</label>
              <input 
                required
                type="text" 
                className="w-full p-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="@your_account"
                value={formData.instagramHandle}
                onChange={(e) => setFormData({...formData, instagramHandle: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">メールアドレス</label>
              <input 
                required
                type="email" 
                className="w-full p-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">希望報酬プラン</label>
              <div className="grid grid-cols-1 gap-3">
                <label className={`
                  flex items-center p-3 border rounded-xl cursor-pointer transition
                  ${formData.plan === 'commission' ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200'}
                `}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="commission" 
                    checked={formData.plan === 'commission'}
                    onChange={() => setFormData({...formData, plan: 'commission'})}
                    className="mr-3 text-emerald-600 focus:ring-emerald-600"
                  />
                  <div>
                    <span className="font-bold block">成果報酬プラン (10%)</span>
                    <span className="text-xs text-stone-500">制作費なし・高還元率</span>
                  </div>
                </label>
                
                <label className={`
                  flex items-center p-3 border rounded-xl cursor-pointer transition
                  ${formData.plan === 'fixed_commission' ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200'}
                `}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="fixed_commission" 
                    checked={formData.plan === 'fixed_commission'}
                    onChange={() => setFormData({...formData, plan: 'fixed_commission'})}
                    className="mr-3 text-emerald-600 focus:ring-emerald-600"
                  />
                  <div>
                    <span className="font-bold block">固定費 + 成果報酬プラン</span>
                    <span className="text-xs text-stone-500">制作費1万円 + 5%コミッション</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">
                画像アップロード (任意)
                <span className="ml-2 text-xs font-normal text-stone-500">過去の投稿事例やPRに使用したいイメージ写真があれば</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-stone-300 border-dashed rounded-xl hover:bg-stone-50 transition-colors cursor-pointer relative">
                 <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-stone-400" />
                    <div className="flex text-sm text-stone-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none">
                        <span>ファイルをアップロード</span>
                        <input type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                      </label>
                    </div>
                    <p className="text-xs text-stone-500">PNG, JPG, GIF up to 10MB</p>
                    {formData.imageFile && (
                      <p className="text-sm text-green-600 font-bold mt-2">
                        選択中: {formData.imageFile.name}
                      </p>
                    )}
                 </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">メッセージ・意気込み</label>
              <textarea 
                className="w-full p-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-300 outline-none h-24 resize-none"
                placeholder="PR投稿に対する意気込みやご質問があればご記入ください。"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>

          <div className="pt-4">
             <button 
              type="submit" 
              disabled={isSubmitting || !selectedProduct}
              className={`
                w-full py-4 rounded-xl font-bold text-white shadow-lg text-lg flex items-center justify-center gap-2
                ${isSubmitting || !selectedProduct ? 'bg-stone-300 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800 active:scale-95 transition-all'}
              `}
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                'この内容で応募する'
              )}
            </button>
            {!selectedProduct && (
               <p className="text-center text-red-500 text-xs mt-2">※商品を選択してください</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;