
export interface Product {
  id: string;
  code: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  url?: string;
}

// 商品順序: 201-205, 301-304, 101-105, 311-313, 501-503, 511-512, 521-523, 701-703, 901
export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    code: '201', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71aqB+pOZSL._AC_SX679_.jpg', 
    description: '鮮やかな「赤」がアクセント。 木目調の温かみの中に力強さを感じる、新作のモダン兜飾り。',
    url: 'https://www.amazon.co.jp/dp/B0GJ4FPSDP'
  },
  { 
    id: '2', 
    code: '202', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71jg9wBUugL._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: '知的で深みのある「緑」。 落ち着いたカラーリングで、和洋どちらのお部屋にも上品に馴染みます。',
    url: 'https://www.amazon.co.jp/dp/B0GJ3Y7F2D'
  },
  { 
    id: '3', 
    code: '203', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71IeGUhLuiL._AC_SX679_.jpg', 
    description: '爽やかな「青」の清涼感。 男の子の初節句にふさわしい、凛とした美しさとインテリア性を両立。',
    url: 'https://www.amazon.co.jp/dp/B0GJ477RM8'
  },
  { 
    id: '4', 
    code: '204', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71-6-isvyqL._AC_SX300_SY300_QL70_ML2_.jpg', 
    description: 'シックに決まる大人の「茶」。 落ち着いたブラウンカラーは、高級家具のような佇まいを見せます。',
    url: 'https://www.amazon.co.jp/dp/B0GJ46X9X7'
  },
  { 
    id: '5', 
    code: '205', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71iIk2vVgPL._AC_SX679_.jpg', 
    description: '華やかさと気品の「金」。 ナチュラルな木目ケースと豪華な兜のコントラストが美しい新作モデル。',
    url: 'https://www.amazon.co.jp/dp/B0GJ3ML5WG'
  },
  { 
    id: '6', 
    code: '301', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/71IUK-162BL._AC_SX679_.jpg', 
    description: '黒×金のスタイリッシュな対比。 丸型ケースの柔らかさと、兜のカッコよさをいいとこ取りしたデザイン。',
    url: 'https://www.amazon.co.jp/dp/B0GJ44MDRH'
  },
  { 
    id: '7', 
    code: '302', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/61GTxhwsYML._AC_SX679_.jpg', 
    description: 'クールな「銀」の上杉謙信。 黒のラウンドケースがシルバーの美しさを引き立てる、洗練された一台。',
    url: 'https://www.amazon.co.jp/dp/B0GJ4B6MBY'
  },
  { 
    id: '8', 
    code: '303', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/710pZX0zO8L._AC_SX300_SY300_QL70_ML2_.jpg', 
    description: '天下人・徳川家康モデル。 重厚感のある黒ケースに葵の御紋が輝く、格式高いモダン兜。',
    url: 'https://www.amazon.co.jp/dp/B0GJ422V2F'
  },
  { 
    id: '9', 
    code: '304', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://m.media-amazon.com/images/I/715M+LiNs4L._AC_SX679_.jpg', 
    description: '渋さが光るブロンズ伊達。 人気の伊達政宗を落ち着いた色味で仕上げた、男前なインテリア兜。',
    url: 'https://www.amazon.co.jp/dp/B0GJ451JKJ'
  },
  { 
    id: '10', 
    code: '101', 
    price: 64800, 
    salePrice: 54800, 
    image: 'https://lh7-rt.googleusercontent.com/sheetsz/AHOq17EmFVzYmYXUs-L24T8sHbN5J7Tyi2VOsRwvXz5VEFlWARWzKf0AtYYdnGjs_Y2ispQ9YYWwv9gjdNN7aQ09CG8Cf-5TeTpHH8ecvIpi41EFKsWQ7bzp1syaJ3RcqR1nx4mpPgWfxGHIt99lCuhQ67dY-kr3?key=fWQ5EU6Gbbuk_Iw0rJjKzw', 
    description: 'アイボリー×木目の淡い配色。 白木のような明るい木目とアイボリーの兜を組み合わせた、北欧風や白い壁の部屋に馴染みやすいデザインです。',
    url: undefined
  },
  { 
    id: '11', 
    code: '102', 
    price: 64800, 
    salePrice: 54800, 
    image: 'https://m.media-amazon.com/images/I/71rp4nDyoKL._AC_SX679_.jpg', 
    description: '落ち着いたトーンのモカ色。 兜のパーツや紐をベージュ～モカ系のニュアンスカラーで統一。木製家具やフローリングと調和する色合いです。',
    url: 'https://amzn.asia/d/e8xX6qI'
  },
  { 
    id: '12', 
    code: '105', 
    price: 25800, 
    salePrice: 21800, 
    image: 'https://m.media-amazon.com/images/I/612RyLqLS4L._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: '360度どこから見ても美しい。 珍しい円柱形のアクリルケースを採用した、モダンでコンパクトな一台。',
    url: 'https://amzn.asia/d/dhstE0a'
  },
  { 
    id: '13', 
    code: '311', 
    price: 39800, 
    salePrice: 32800, 
    image: 'https://lh7-rt.googleusercontent.com/sheetsz/AHOq17GMIogVGbNel3he5gss5gJsXa24SULnqWWH1-M2eeJGQs_BdoErRHxGuFSDO3Qbqh69XEsT0gkc5eQMLhhNSFch_PCGZPZBstenZRIQMC9Z812648cMzDNDiziL7clkGSq2aQn0UcLHZWHqX1G7wctA2J-B?key=fWQ5EU6Gbbuk_Iw0rJjKzw', 
    description: '軽量で割れにくいアクリル製。 柱のないパノラマケースで、ダイナミックな兜の造形を楽しめます。',
    url: undefined
  },
  { 
    id: '14', 
    code: '312', 
    price: 39800, 
    salePrice: 32800, 
    image: 'https://m.media-amazon.com/images/I/71MjNGuWW0L._AC_SX679_.jpg', 
    description: 'スタイリッシュな銀色×アクリル。 上杉兜をどの角度からも鑑賞できるデザイン。軽量で出し入れしやすい仕様です。',
    url: 'https://amzn.asia/d/1b8z7NQ'
  },
  { 
    id: '15', 
    code: '313', 
    price: 39800, 
    salePrice: 32800, 
    image: 'https://lh7-rt.googleusercontent.com/sheetsz/AHOq17G-VGi7fqhppAOXXd6XyVG7plZXcjaiWlCQ0IZAdV1M3BCuXwtyYbfv_nRmdwtsb8Qiq199N4iqLxSuj5Q1I6Y_Xcg3aruhSzJaGF8C4FraWvkhSS2hN42uPWAMgyR59DJ9DiB-ivJPWvo9jaavf7tVU5Yt?key=fWQ5EU6Gbbuk_Iw0rJjKzw', 
    description: '黄金の三日月が輝く伊達政宗。 軽くて出し入れも簡単。ママに嬉しい機能性と美しさを備えました。',
    url: undefined
  },
  { 
    id: '16', 
    code: '501', 
    price: 54800, 
    salePrice: 46800, 
    image: 'https://m.media-amazon.com/images/I/81BomVQ3L6L._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: '縁起の良い「富士山」を背に。 豪華な金色の兜と雄大な背景が、お子様の未来を明るく照らします。',
    url: 'https://amzn.asia/d/j3BA2K1'
  },
  { 
    id: '17', 
    code: '502', 
    price: 54800, 
    salePrice: 46800, 
    image: 'https://m.media-amazon.com/images/I/81W7P7O9zjL._AC_SX679_.jpg', 
    description: '伝統とモダンの融合。 銀色の兜と富士山の背景が、シックで洗練された空間を作り出します。',
    url: 'https://amzn.asia/d/4BUJatP'
  },
  { 
    id: '18', 
    code: '503', 
    price: 54800, 
    salePrice: 47800, 
    image: 'https://m.media-amazon.com/images/I/81rdGW+whzL._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: '黄金の大鍬形が豪華絢爛。紫の袱紗と松柄背景が映える堂々とした兜。',
    url: 'https://amzn.asia/d/e8WA8Ki'
  },
  { 
    id: '19', 
    code: '511', 
    price: 54800, 
    salePrice: 47800, 
    image: 'https://m.media-amazon.com/images/I/81VCMpyLIJL._AC_SX679_.jpg', 
    description: '鋭い銀の三日月がクール。黒と銀の対比が美しい、モダンで精悍な兜',
    url: 'https://amzn.asia/d/02syuS0'
  },
  { 
    id: '20', 
    code: '512', 
    price: 54800, 
    salePrice: 47800, 
    image: 'https://m.media-amazon.com/images/I/81R1eHJXlNL._AC_SX679_.jpg', 
    description: '日輪と三日月が輝く上杉謙信公型。赤と黒の金彩背景が豪華絢爛。',
    url: 'https://amzn.asia/d/4ezl8uh'
  },
  { 
    id: '21', 
    code: '521', 
    price: 64800, 
    salePrice: 54800, 
    image: 'https://m.media-amazon.com/images/I/8145YGYTwdL._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: 'ロングセラーの定番モデル。 コンパクトながらもしっかりとした存在感。飽きのこない王道の兜飾りです。',
    url: 'https://amzn.asia/d/d1A5YiO'
  },
  { 
    id: '22', 
    code: '522', 
    price: 59800, 
    salePrice: 49800, 
    image: 'https://m.media-amazon.com/images/I/81L6kvpNNAL._AC_SX300_SY300_QL70_ML2_.jpg', 
    description: 'コスパ抜群の本格派。 手頃な価格で伝統的な兜飾りを。贈り物としても選ばれている安心のモデル。',
    url: 'https://amzn.asia/d/4o6dnff'
  },
  { 
    id: '23', 
    code: '523', 
    price: 57800, 
    salePrice: 49800, 
    image: 'https://m.media-amazon.com/images/I/71UlFbpeiaL._AC_SX300_SY300_QL70_ML2_.jpg', 
    description: 'きらめく装飾が美しい。 小ぶりなサイズ感ながら華やかさは抜群。場所を選ばずに飾れる人気の兜です。',
    url: 'https://www.amazon.co.jp/dp/B00IEY3ODE'
  },
  { 
    id: '24', 
    code: '701', 
    price: 53800, 
    salePrice: 45800, 
    image: 'https://m.media-amazon.com/images/I/71fQkdy560L._AC_SX679_.jpg', 
    description: '老舗「吉徳大光」のプレミアム兜。 あえてケースに入れない「平飾り」スタイルで、素材の質感を存分に楽しめます。',
    url: 'https://amzn.asia/d/1HQEI8l'
  },
  { 
    id: '25', 
    code: '702', 
    price: 53800, 
    salePrice: 45800, 
    image: 'https://m.media-amazon.com/images/I/71B+azqQ+nL._AC_SX300_SY300_QL70_ML2_.jpg', 
    description: '吉徳大光×伊達政宗。 ナチュラルな木目台と名将の兜が織りなす、上質で洗練された端午の節句。',
    url: 'https://amzn.asia/d/h6NlvHv'
  },
  { 
    id: '26', 
    code: '703', 
    price: 53800, 
    salePrice: 45800, 
    image: 'https://m.media-amazon.com/images/I/71vDsWnOGDL._AC_SX679_.jpg', 
    description: '吉徳大光×上杉謙信。 創業300年の伝統技法とモダンなデザインが融合した、一生ものにふさわしい逸品。',
    url: 'https://amzn.asia/d/171xjaJ'
  },
  { 
    id: '27', 
    code: '901', 
    price: 11800, 
    salePrice: 9880, 
    image: 'https://m.media-amazon.com/images/I/61zmtD3Vi6L._AC_SY300_SX300_QL70_ML2_.jpg', 
    description: '室内で飾れる、ふわふわ鯉のぼり。 兜の隣に添えたり、玄関の季節飾りとして。ちりめん素材の優しい風合いです。',
    url: 'https://www.amazon.co.jp/dp/B07BQRLSQT'
  },
];

export const CAMPAIGN_DEADLINE = "1月10日(土)";
export const POSTING_PERIOD = "1月24日(土) 〜 2月3日(火)";
