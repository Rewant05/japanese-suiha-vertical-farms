import Image from "next/image";
import { BarChart3, Cpu, ShieldCheck, Wind } from "lucide-react";

export const metadata = {
  title: "ソリューション | 翠葉ファームテック",
  description: "ハードウェアからソフトウェアまで、垂直農法に必要なすべてをワンストップで提供します。",
};

const solutions = [
  {
    icon: Cpu,
    badge: "ソフトウェア・人工知能",
    title: "AI栽培管理システム",
    product: "MIDORI OS",
    image: "/images/hero.png",
    imageAlt: "AIで管理された大規模な垂直農場",
    badgeClass: "bg-blue-100 text-blue-700",
    iconClass: "bg-blue-50 text-blue-600 border-blue-200",
    text: "全施設の環境データ（温度、湿度、二酸化炭素、光量、養液濃度）を24時間365日クラウドに集約。機械学習アルゴリズムが作物の成長ステージに合わせて最適な環境パラメーターを自動生成し、ハードウェアへ指示を出します。",
    features: ["リアルタイム・リモート監視", "品種別の最適化レシピ適用", "異常検知と自動通知機能"],
  },
  {
    icon: Wind,
    badge: "ハードウェア制御",
    title: "環境制御ユニット",
    product: "HIKARI Grid",
    image: "/images/tech.png",
    imageAlt: "葉物野菜に設置されたIoT環境センサー",
    badgeClass: "bg-suiha-mint text-suiha-green",
    iconClass: "bg-suiha-mint text-suiha-green border-suiha-green/20",
    text: "独自開発の波長可変型LEDライトと、精密空調・水耕栽培システムを統合したモジュール。MIDORI OSからの指令を受け、植物の光合成効率が最大化される環境を物理的に創り出します。",
    features: ["波長・調光のミリ秒単位制御", "省エネ対応の高効率LED", "拡張可能なモジュール設計"],
  },
  {
    icon: BarChart3,
    badge: "データ分析",
    title: "収穫予測AI",
    product: "MINORI Forecast",
    image: "/images/farm1.png",
    imageAlt: "都市型垂直農場で作物を確認するスタッフ",
    badgeClass: "bg-orange-100 text-orange-700",
    iconClass: "bg-orange-50 text-orange-600 border-orange-200",
    text: "エッジカメラで取得した画像データから、作物の成長状態（葉面積、色素、体積）をディープラーニングで解析。過去の栽培データと照合し、最適な収穫時期と予測収穫量を高精度（誤差5%以内）で算出します。",
    features: ["出荷計画・人員配置の最適化", "フードロス削減への貢献", "飲食店・小売店への安定供給約束"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-suiha-lime/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ソリューション</h1>
          <p className="text-xl text-suiha-lime">提供サービス一覧</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-lg text-suiha-charcoal/80 leading-relaxed">
            翠葉ファームテックは、ハードウェア（制御ユニット）とソフトウェア（AI管理システム）を統合した、ワンストップのスマート農業ソリューションを提供します。
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {solutions.map((solution, idx) => (
            <section key={solution.product} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`relative h-[260px] sm:h-[360px] lg:h-[460px] rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${idx === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) calc(100vw - 32px), 50vw"
                  quality={72}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-suiha-dark/70 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-suiha-dark shadow-sm">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full border ${solution.iconClass}`}>
                    <solution.icon className="h-5 w-5" />
                  </span>
                  {solution.product}
                </div>
              </div>

              <div className={idx === 1 ? "lg:order-1" : ""}>
                <div className={`inline-block px-3 py-1 text-sm font-bold rounded-full mb-4 ${solution.badgeClass}`}>
                  {solution.badge}
                </div>
                <h2 className="text-3xl font-bold text-suiha-dark mb-2">{solution.title}</h2>
                <h3 className="text-xl text-gray-500 font-medium mb-6">「{solution.product}」</h3>
                <p className="text-suiha-charcoal/70 mb-6 leading-relaxed">{solution.text}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <ShieldCheck className="w-5 h-5 text-suiha-green shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
