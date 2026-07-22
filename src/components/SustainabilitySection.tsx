const stats = [
  { label: "水使用量削減", value: "95", unit: "%" },
  { label: "農薬使用", value: "0", unit: "" },
  { label: "生産性向上 (面積比)", value: "100", unit: "倍" },
  { label: "フードマイレージ削減", value: "80", unit: "%" },
];

export default function SustainabilitySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-suiha-dark text-white relative">
      <div className="hidden sm:block absolute inset-0 opacity-10 bg-grid-pattern bg-[length:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sus-header text-center mb-10 sm:mb-16">
          <span className="text-suiha-lime font-bold uppercase tracking-wider text-sm mb-2 block">サステナビリティ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">地球と共生する農業モデル</h2>
          <p className="text-suiha-mint/70 max-w-2xl mx-auto">
            気候変動や水不足といった地球規模の課題に対し、環境負荷を最小限に抑えながら、安全な食料を安定供給するソリューションを提案します。
          </p>
        </div>

        <div className="sus-stats-container grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="sus-stat bg-white/10 md:bg-suiha-dark/80 md:backdrop-blur-md rounded-3xl p-5 sm:p-6 text-center border border-white/10 shadow-lg">
              <div className="text-4xl md:text-5xl font-extrabold text-suiha-lime mb-2">
                {stat.value}
                <span className="text-2xl text-suiha-mint/50 ml-1">{stat.unit}</span>
              </div>
              <p className="text-sm font-semibold text-suiha-mint/80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="sus-card mt-12 sm:mt-16 bg-gradient-to-r from-suiha-green to-[#163a2a] rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">SDGsへの貢献</h3>
            <p className="text-suiha-mint/80 text-sm leading-relaxed">
              私たちは「飢餓をゼロに」「安全な水とトイレを世界中に」「住み続けられるまちづくりを」「気候変動に具体的な対策を」の4つのSDGs目標に直接的に貢献しています。都市の遊休施設を活用した食のローカル・サプライチェーンを構築します。
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            {[2, 6, 11, 13].map((num) => (
              <div key={num} className="w-12 h-12 sm:w-14 sm:h-14 rounded bg-white/10 flex items-center justify-center font-bold text-xl border border-white/20">
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
