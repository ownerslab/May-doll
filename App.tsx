import React from 'react';
import { 
  Sparkles,
  Camera,
  Home,
  Award,
  Calendar,
  Clock,
  Package,
  Instagram,
  Info
} from 'lucide-react';

import ProductGallery from './components/ProductGallery';
import { CAMPAIGN_DEADLINE, POSTING_PERIOD } from './constants';

function App() {
  return (
    <div className="min-h-screen pb-12 bg-stone-50">
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-stone-100 to-amber-50 pt-16 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-stone-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-lg mx-auto">
          <p className="text-emerald-700 font-bold tracking-widest mb-2 text-sm">PR CAMPAIGN INFO</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-6 leading-relaxed">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
              あなたの「好き」がきっと見つかる 五月人形
            </span><br/>
            PRインフルエンサー募集
          </h1>
          <p className="text-stone-600 mb-8 leading-7">
            流行の「くすみカラー」から、信頼の「久月・吉徳」まで。<br/>
            国内最大級のラインナップから選べる<br/>
            <span className="font-bold text-stone-800">「兜飾り・五月人形」</span><br/>
            のご紹介案件です。
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 -mt-10 relative z-20 space-y-12">
        
        {/* Client Info */}
        <section className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-amber-400">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-amber-500" />
            <h2 className="text-xl font-bold text-stone-800">クライアントについて</h2>
          </div>
          <div className="bg-amber-50/50 rounded-xl p-5 mb-4 border border-amber-100">
             <h3 className="font-bold text-lg text-stone-800 mb-2">人形屋ホンポ（株式会社成島）</h3>
             <div className="flex flex-wrap gap-2 mb-3">
               <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">楽天ショップ・オブ・ザ・イヤー連続受賞</span>
               <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">日本人形協会 正会員</span>
             </div>
             <p className="text-sm text-stone-600 leading-relaxed">
               今回ご紹介するのは、楽天市場で<span className="font-bold text-amber-700">「ショップ・オブ・ザ・イヤー」を連続受賞</span>されている、節句人形販売の業界トップランナー企業です。
               茨城県に大型の実店舗を構える<span className="font-bold text-amber-700">創業100年余の老舗</span>でありながら、EC通販でも圧倒的な販売実績と高評価レビュー（数万件規模）をお持ちです。「日本人形協会」の正会員でもあり、品質・対応ともに非常に信頼のおけるクライアント様ですので安心してご紹介いただけます。
             </p>
          </div>
        </section>

        {/* Concept / Target */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-emerald-600" />
            <h2 className="text-xl font-bold text-stone-800">🎏 商品のこだわり</h2>
          </div>
          <div className="space-y-4">
             <div className="flex gap-4 items-start">
               <div className="bg-emerald-50 p-2 rounded-full min-w-[40px] flex items-center justify-center">
                 <span className="text-emerald-700 font-bold text-lg">①</span>
               </div>
               <div>
                 <h3 className="font-bold text-stone-800">令和の住まいに馴染む「トレンドデザイン」</h3>
                 <p className="text-sm text-stone-500 mt-1">「いかついのは苦手」というママの声から生まれた、木目調やアクリル素材、グレージュなどのニュアンスカラーの兜たち。北欧風やナチュラルなインテリアにも違和感なく溶け込み、日常の風景として飾っていただけます。</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="bg-emerald-50 p-2 rounded-full min-w-[40px] flex items-center justify-center">
                 <span className="text-emerald-700 font-bold text-lg">②</span>
               </div>
               <div>
                 <h3 className="font-bold text-stone-800">祖父母も納得の「老舗ブランド＆本格派」</h3>
                 <p className="text-sm text-stone-500 mt-1">業界大手の「久月」「吉徳大光」とのコラボモデルや、上杉謙信・伊達政宗などの人気武将モデルも多数ご用意。伝統的な「黒×金」の力強いデザインは、贈り物としての品格と安心感を兼ね備えています。</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="bg-emerald-50 p-2 rounded-full min-w-[40px] flex items-center justify-center">
                 <span className="text-emerald-700 font-bold text-lg">③</span>
               </div>
               <div>
                 <h3 className="font-bold text-stone-800">飾るのも片付けも楽な「機能性」</h3>
                 <p className="text-sm text-stone-500 mt-1">届いてそのまま飾れる「ケース飾り」や、飾り台の中に兜をしまえる「収納飾り」、お子様が実際に被って記念撮影できる「着用兜」など。スペースや用途に合わせて、ママ目線で嬉しい機能を選べます。</p>
               </div>
             </div>
          </div>
        </section>

        {/* Product Selection */}
        <section id="products">
          <div className="text-center mb-6">
            <span className="text-emerald-700 font-bold text-sm tracking-wider">LINEUP</span>
            <h2 className="text-2xl font-bold text-stone-800">対象レンタル商品 (20種類)</h2>
            <p className="text-stone-500 text-sm mt-2">以下の20商品からお好きなものを1つお選びいただけます。</p>
          </div>
          
          <ProductGallery />
        </section>

        {/* Campaign Outline */}
        <section className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-emerald-700">
           <h2 className="text-xl font-bold text-stone-800 mb-6 pl-2">案件概要・スケジュール</h2>
           
           <div className="space-y-6">
             
             {/* Item 1 */}
             <div className="flex gap-4">
               <div className="mt-1 bg-stone-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                 <Package size={20} className="text-stone-600" />
               </div>
               <div>
                 <h3 className="font-bold text-stone-800 mb-1">① 商材</h3>
                 <p className="text-sm text-stone-600">
                   上記20種類の雛人形から、<span className="font-bold underline decoration-emerald-200 decoration-2">お好きな商品を1つ選択</span>してください。<br/>
                   <span className="text-xs text-red-500 mt-1 block bg-stone-100 p-2 rounded inline-block">※商品はレンタル提供となります（素材撮影終了後、要返却）</span>
                 </p>
               </div>
             </div>

             {/* Item 2 */}
             <div className="flex gap-4">
               <div className="mt-1 bg-stone-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                 <Instagram size={20} className="text-stone-600" />
               </div>
               <div>
                 <h3 className="font-bold text-stone-800 mb-1">② 投稿媒体・内容</h3>
                 <p className="text-sm text-stone-600 mb-2">
                   <span className="font-bold">Instagram</span>にて商品の紹介をお願いいたします。
                 </p>
                 <p className="text-xs text-stone-500 mb-1">※リール、ストーリー作成については報酬パターンにより条件が異なります</p>
                 <p className="text-xs text-stone-500">※その他媒体も任意で掲載可（TikTok・X・YouTube）</p>
               </div>
             </div>

             {/* Item 3 */}
             <div className="flex gap-4">
               <div className="mt-1 bg-stone-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                 <Calendar size={20} className="text-stone-600" />
               </div>
               <div>
                 <h3 className="font-bold text-stone-800 mb-1">③ 投稿時期</h3>
                 <p className="text-sm text-stone-600 font-bold text-emerald-700 mb-1">
                   {POSTING_PERIOD}
                 </p>
                 <p className="text-xs text-stone-500">（Amazonセール期間中※まだ未確定のため多少前後する場合があります）</p>
               </div>
             </div>

             {/* Item 4: Deadline */}
             <div className="flex gap-4 border-t border-dashed border-stone-200 pt-4">
               <div className="mt-1 bg-red-50 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                 <Clock size={20} className="text-red-500" />
               </div>
               <div>
                 <h3 className="font-bold text-stone-800 mb-1">ご返信期限</h3>
                 <p className="text-sm text-stone-600">
                   本案件への参加可否につきましては、<br/>
                   <span className="font-bold text-red-500 text-lg">{CAMPAIGN_DEADLINE}頃</span>までにご返信をお願いいたします。
                 </p>
               </div>
             </div>

             {/* Item 5: Other */}
             <div className="flex gap-4 border-t border-dashed border-stone-200 pt-4">
               <div className="mt-1 bg-blue-50 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                 <Info size={20} className="text-blue-500" />
               </div>
               <div>
                 <h3 className="font-bold text-stone-800 mb-2">その他</h3>
                 <ul className="text-sm text-stone-600 space-y-2">
                   <li className="flex items-start gap-2">
                     <span className="text-emerald-600 mt-0.5">・</span>
                     <span>フォロワーさんが使える発信者様専用のクーポン（1,000円）を発行します</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-emerald-600 mt-0.5">・</span>
                     <span>PR表記、タイアップラベル必須</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-emerald-600 mt-0.5">・</span>
                     <span>ストーリーで販売ページのリンク紹介※遷移先はAmazonとなります</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-emerald-600 mt-0.5">・</span>
                     <span>リールおよびストーリーのタイアップラベルの追加で人形屋ホンポの公式アカウントを選択してください。【人形屋ホンポ：<span className="font-bold">@ningyouya_honpo</span>】</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-emerald-600 mt-0.5">・</span>
                     <span>念のため、投稿の前日までに下書きを一度ご共有いただけますと幸いです。原則として修正をお願いすることはございませんが、内容確認のみさせてください。</span>
                   </li>
                 </ul>
               </div>
             </div>

           </div>
        </section>

      </div>

    </div>
  );
}

export default App;