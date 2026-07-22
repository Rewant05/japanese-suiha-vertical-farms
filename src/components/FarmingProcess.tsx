import { Beaker, Recycle, Sprout, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "育苗",
    description: "クリーンルーム内で無菌状態の種を蒔き、発芽に最適な温湿度・光条件で強い苗を育てます。",
    icon: Sprout,
  },
  {
    step: "02",
    title: "栽培",
    description: "HIKARI Gridシステムへ定植。MIDORI OSが栄養液と光を完全制御し、露地栽培の2倍の速度で成長させます。",
    icon: Beaker,
  },
  {
    step: "03",
    title: "収穫・検査",
    description: "MINORI Forecastが予測した最適なタイミングで収穫。農薬不使用のため、洗わずにそのまま食べられる品質を確保。",
    icon: Recycle,
  },
  {
    step: "04",
    title: "出荷",
    description: "都市部の農場から消費地までダイレクトに出荷。フードマイレージを極限まで削減し、鮮度を保ちます。",
    icon: Truck,
  },
];

export default function FarmingProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-suiha-mint/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="process-header mb-10 sm:mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">プロセス</span>
            <h2 className="text-3xl md:text-4xl font-bold text-suiha-dark mb-4">クリーンで高効率な生産プロセス</h2>
            <p className="text-suiha-charcoal/70">
              種まきから出荷まで、すべての工程がデータで管理され、安全で安定した食料供給を実現します。
            </p>
          </div>
        </div>

        <div className="process-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={step.step} className="process-step relative">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-suiha-green/10 h-full hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-suiha-green/10 absolute top-6 right-8">{step.step}</div>
                <div className="w-12 h-12 rounded-xl bg-suiha-lime/20 flex items-center justify-center mb-6 text-suiha-green">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-suiha-dark mb-3">{step.title}</h3>
                <p className="text-sm text-suiha-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
              {idx < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-suiha-green/20 z-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
