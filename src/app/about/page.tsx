import { Leaf, Award, Globe, Users } from "lucide-react";

export const metadata = {
  title: '会社概要 | 翠葉ファームテック',
  description: '翠葉ファームテックのミッション、ビジョン、会社情報について。',
};

export default function AboutPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-[length:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">会社概要</h1>
          <p className="text-xl text-suiha-lime">翠葉ファームテックについて</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-suiha-dark mb-6">次世代の「食」のインフラを築く</h2>
            <p className="text-suiha-charcoal/80 leading-relaxed mb-6">
              翠葉ファームテックは、気候変動や労働力不足といった現代農業が抱える課題を、テクノロジーの力で解決するために設立されました。
            </p>
            <p className="text-suiha-charcoal/80 leading-relaxed">
              私たちは、データサイエンスと植物工学を融合させ、場所を問わずどこでも安全で高品質な作物を生産できる垂直農法システムを開発しています。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suiha-mint">
              <Leaf className="w-8 h-8 text-suiha-green mb-4" />
              <h3 className="font-bold text-lg mb-2">持続可能性</h3>
              <p className="text-sm text-gray-500">水資源の95%を再利用し、環境負荷を最小限に。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suiha-mint">
              <Award className="w-8 h-8 text-suiha-green mb-4" />
              <h3 className="font-bold text-lg mb-2">高品質</h3>
              <p className="text-sm text-gray-500">無農薬でクリーン。栄養価の高い作物を安定生産。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suiha-mint">
              <Globe className="w-8 h-8 text-suiha-green mb-4" />
              <h3 className="font-bold text-lg mb-2">グローバル展開</h3>
              <p className="text-sm text-gray-500">都市部から砂漠まで、あらゆる気候帯に対応。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suiha-mint">
              <Users className="w-8 h-8 text-suiha-green mb-4" />
              <h3 className="font-bold text-lg mb-2">コミュニティ</h3>
              <p className="text-sm text-gray-500">地産地消を促進し、地域コミュニティを活性化。</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-suiha-dark mb-8 border-b border-gray-100 pb-4">企業情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="flex border-b border-gray-50 pb-4">
              <span className="w-32 font-semibold text-gray-500 shrink-0">会社名</span>
              <span className="text-suiha-dark font-medium">株式会社 翠葉ファームテック</span>
            </div>
            <div className="flex border-b border-gray-50 pb-4">
              <span className="w-32 font-semibold text-gray-500 shrink-0">設立</span>
              <span className="text-suiha-dark">2020年4月</span>
            </div>
            <div className="flex border-b border-gray-50 pb-4">
              <span className="w-32 font-semibold text-gray-500 shrink-0">代表取締役</span>
              <span className="text-suiha-dark">翠葉 健太</span>
            </div>
            <div className="flex border-b border-gray-50 pb-4">
              <span className="w-32 font-semibold text-gray-500 shrink-0">資本金</span>
              <span className="text-suiha-dark">5億5,000万円 (資本準備金含む)</span>
            </div>
            <div className="flex border-b border-gray-50 pb-4 md:col-span-2">
              <span className="w-32 font-semibold text-gray-500 shrink-0">所在地</span>
              <span className="text-suiha-dark">
                〒100-0005<br/>
                東京都千代田区丸の内1-1-1 翠葉テクノロジータワー 24F
              </span>
            </div>
            <div className="flex border-b border-gray-50 pb-4 md:col-span-2">
              <span className="w-32 font-semibold text-gray-500 shrink-0">事業内容</span>
              <span className="text-suiha-dark leading-relaxed">
                ・AI搭載型 垂直農法システムの開発・販売<br/>
                ・農業環境制御プラットフォーム「MIDORI OS」の提供<br/>
                ・植物工場の設計、施工、運用コンサルティング<br/>
                ・高付加価値野菜の生産・販売
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
