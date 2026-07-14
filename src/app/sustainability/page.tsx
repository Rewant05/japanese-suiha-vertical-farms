import SustainabilitySection from "@/components/SustainabilitySection";
import { Droplet, Factory, Leaf } from "lucide-react";

export const metadata = {
  title: 'サステナビリティ | 翠葉ファームテック',
  description: '地球と共生する農業モデル。環境への取り組み。',
};

export default function SustainabilityPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suiha-green/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">サステナビリティ</h1>
          <p className="text-xl text-suiha-lime">持続可能性への取り組み</p>
        </div>
      </div>

      <SustainabilitySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-suiha-dark mb-16 text-center">具体的な環境への取り組み</h2>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Droplet className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-suiha-dark mb-4">超節水型 循環システム</h3>
              <p className="text-suiha-charcoal/70 leading-relaxed mb-4">
                植物が蒸散した水分を特殊な空調システムで回収・ろ過し、再び養液として利用する完全閉鎖循環システムを構築。露地栽培と比較して水の使用量を95%削減しています。水資源が枯渇しつつある地域での救世主となります。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-suiha-mint text-suiha-green rounded-2xl flex items-center justify-center shrink-0">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-suiha-dark mb-4">農薬ゼロ・土壌汚染ゼロ</h3>
              <p className="text-suiha-charcoal/70 leading-relaxed mb-4">
                クリーンルーム技術を応用した完全密閉空間での栽培により、害虫の侵入をシャットアウト。農薬を一切使用しないため、土壌や地下水への化学物質の流出がありません。食べる人にも地球にも安全です。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <Factory className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-suiha-dark mb-4">フードマイレージの極小化</h3>
              <p className="text-suiha-charcoal/70 leading-relaxed mb-4">
                消費地である都市部で直接生産することで、輸送にかかる二酸化炭素排出量と時間を大幅に削減。また、輸送時のダメージによる廃棄（フードロス）も防ぎます。「採れたて」をその日のうちに食卓へ届けます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
