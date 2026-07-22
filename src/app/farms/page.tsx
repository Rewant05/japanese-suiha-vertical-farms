import { Building, Droplet, Sun } from "lucide-react";
import FarmCaseStudies from "@/components/FarmCaseStudies";

export const metadata = {
  title: "導入事例 | 翠葉ファームテック",
  description: "世界に広がる翠葉ファームの導入事例をご紹介します。",
};

const models = [
  {
    icon: Building,
    title: "都市型ビル内モジュール",
    text: "空きオフィスや地下スペースを農場化。消費地に最も近い場所で生産を行う究極の地産地消モデル。",
  },
  {
    icon: Droplet,
    title: "極限環境向けプラント",
    text: "砂漠や寒冷地など、従来は農業が不可能だった地域に食のインフラを構築する完全閉鎖・循環型システム。",
  },
  {
    icon: Sun,
    title: "既存ハウスのスマート化",
    text: "既存のビニールハウスや温室にMIDORI OSとセンサーユニットを後付けし、半自動化と収量アップを実現。",
  },
];

export default function FarmsPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="hidden sm:block absolute inset-0 opacity-20 bg-grid-pattern bg-[length:30px_30px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">導入事例</h1>
          <p className="text-xl text-suiha-lime">実際の稼働状況</p>
        </div>
      </div>

      <FarmCaseStudies />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-suiha-dark mb-10 sm:mb-16 text-center">多様な設置モデル</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model) => (
            <div key={model.title} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-suiha-green transition-colors">
              <model.icon className="w-12 h-12 text-suiha-green mx-auto mb-6" />
              <h3 className="text-xl font-bold text-suiha-dark mb-4">{model.title}</h3>
              <p className="text-suiha-charcoal/70 text-sm leading-relaxed">{model.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
