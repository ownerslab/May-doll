
export interface Product {
  id: string;
  code: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  url?: string;
}

// 商品順序: ひなまりS, T, U, Vを最初に、その後C01〜N
export const PRODUCTS: Product[] = [
  { 
    id: '19', 
    code: 'ひなまりS', 
    price: 79800, 
    salePrice: undefined, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/%E3%81%B2%E3%81%AA%E3%81%BE%E3%82%8AS-2048x1152.jpg', 
    description: 'カラフルな衣装が愛らしい。華やかな刺繍背景のコンパクトな飾り。',
    url: 'https://www.amazon.co.jp/dp/B0CNRG433P'
  },
  { 
    id: '20', 
    code: 'ひなまりT', 
    price: 79800, 
    salePrice: undefined, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/%E3%81%B2%E3%81%AA%E3%81%BE%E3%82%8AT-2048x1152.jpg', 
    description: '白を基調とした清楚な衣装。ピンクの刺繍背景が春らしさを演出。',
    url: 'https://www.amazon.co.jp/dp/B0D97MPPHM'
  },
  { 
    id: '21', 
    code: 'ひなまりU', 
    price: 66800, 
    salePrice: undefined, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/%E3%81%B2%E3%81%AA%E3%81%BE%E3%82%8AU.jpg', 
    description: '木の温もりと透かし桜の屏風が調和。ナチュラルで可愛い立ち雛。',
    url: 'https://www.amazon.co.jp/dp/B0841H2XFG'
  },
  { 
    id: '22', 
    code: 'ひなまりV', 
    price: 85800, 
    salePrice: undefined, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/%E3%81%B2%E3%81%AA%E3%81%BE%E3%82%8AV.jpg', 
    description: 'シンプルな木目と丸いお顔に癒される。優しく現代的な親王飾り。',
    url: 'https://www.amazon.co.jp/dp/B08X4384WJ'
  },
  { 
    id: '3', 
    code: 'C01', 
    price: 39800, 
    salePrice: 32880, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/C01-1.jpg', 
    description: '白と淡い緑が爽やか。モダンなお部屋に合うスタイリッシュな一品。',
    url: 'https://amzn.asia/d/d6Iyws4'
  },
  { 
    id: '4', 
    code: 'C02', 
    price: 39800, 
    salePrice: 32880, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/C02-1.jpg', 
    description: '白と紫の衣装が清楚でモダン。透明感あふれるアクリルケース入り。',
    url: 'https://amzn.asia/d/58x9FkA'
  },
  { 
    id: '5', 
    code: 'D', 
    price: 39800, 
    salePrice: 35800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/D-1.jpg', 
    description: 'リボン飾りがキュート。パステルカラーで夢かわいい五人飾り。',
    url: 'https://amzn.asia/d/hxAL2Op'
  },
  { 
    id: '6', 
    code: 'E01', 
    price: 43800, 
    salePrice: 37800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/E01-1.jpg', 
    description: '鮮やかな赤のケース入り五人飾り。桜舞う背景が春の訪れを祝う。',
    url: 'https://amzn.asia/d/6CNTXda'
  },
  { 
    id: '7', 
    code: 'E02', 
    price: 43800, 
    salePrice: 37800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/E02-1.jpg', 
    description: '桜の毬（まり）の刺繍背景が豪華な赤のケース飾り。愛らしい五人揃い。',
    url: 'https://amzn.asia/d/fuqj1UF'
  },
  { 
    id: '8', 
    code: 'F01', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/F01-1.jpg', 
    description: 'パステルピンクが可愛いケース飾り。背景の花飾りが華やかさを演出。',
    url: 'https://amzn.asia/d/c75Wdgi'
  },
  { 
    id: '9', 
    code: 'F02', 
    price: 49800, 
    salePrice: 43800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/F02-1.jpg', 
    description: '優しい色合いの親王飾り。ナチュラルな雰囲気が洋室にも馴染む。',
    url: 'https://amzn.asia/d/9LSk6hS'
  },
  { 
    id: '10', 
    code: 'G01', 
    price: 49800, 
    salePrice: 45800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/G01-1.jpg', 
    description: '桜舞う背景が華やか。十人の人形が揃った豪華な三段ケース。',
    url: 'https://amzn.asia/d/hJNEhKg'
  },
  { 
    id: '11', 
    code: 'G02', 
    price: 49800, 
    salePrice: 45800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/G02-1.jpg', 
    description: '流水桜の背景が豪華絢爛。赤のケースがひな祭りを祝う十人飾り。',
    url: 'https://amzn.asia/d/5yxLu5N'
  },
  { 
    id: '12', 
    code: 'H01', 
    price: 63800, 
    salePrice: 54800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/H01-1.jpg', 
    description: '白塗りのケースに刺繍背景が上品。清楚で美しい親王飾り。',
    url: 'https://amzn.asia/d/aJzslfj'
  },
  { 
    id: '13', 
    code: 'H02', 
    price: 63800, 
    salePrice: 54800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/H02-1.jpg', 
    description: '淡いピンクで統一された世界観。優しく春らしい親王飾り。',
    url: 'https://amzn.asia/d/gbdWgif'
  },
  { 
    id: '14', 
    code: 'K01', 
    price: 69800, 
    salePrice: 59800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/K01-1.jpg', 
    description: '丸いフォルムが人気。白を基調とした衣装が可憐な親王飾り。',
    url: 'https://amzn.asia/d/beeOA5d'
  },
  { 
    id: '15', 
    code: 'K02', 
    price: 69800, 
    salePrice: 59800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/K02-1.jpg', 
    description: '優しいベージュの丸型ケース。ピンクの衣装に心が和む親王飾り。',
    url: 'https://amzn.asia/d/dwkevGx'
  },
  { 
    id: '16', 
    code: 'M01', 
    price: 75800, 
    salePrice: 65800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/M01-1.jpg', 
    description: '木目の丸窓ケースがモダン。シックな色合いの衣装がお洒落。',
    url: 'https://amzn.asia/d/er7ILmh'
  },
  { 
    id: '17', 
    code: 'M02', 
    price: 75800, 
    salePrice: 65800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/M02-1.jpg', 
    description: 'ナチュラルな丸型ケース。白のグラデーション衣装が洗練された印象。',
    url: 'https://amzn.asia/d/dcVXnDz'
  },
  { 
    id: '18', 
    code: 'N', 
    price: 88000, 
    salePrice: 68800, 
    image: 'https://yama23.com/wp-content/uploads/2026/01/N-1.jpg', 
    description: '伝統的な組子細工がお洒落。ピンクの六角ケースが春を彩る。',
    url: 'https://amzn.asia/d/5jrvWu3'
  },
];

export const CAMPAIGN_DEADLINE = "1月10日(土)";
export const POSTING_PERIOD = "1月24日(土) 〜 2月3日(火)";
