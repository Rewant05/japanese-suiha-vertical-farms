import Image from "next/image";

const highlights = [
  {
    title: "デジタルツイン構築",
    desc: "クラウド上に作物の仮想モデルを作成し、成長シミュレーションを実行。",
  },
  {
    title: "エッジAIカメラ",
    desc: "葉の面積、色、形状を24時間監視し、異常をリアルタイムで検知。",
  },
  {
    title: "自律型環境制御",
    desc: "機械学習アルゴリズムが、空調・照明・養液供給をミリ秒単位で自動調整。",
  },
];

export default function TechnologySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="tech-image aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-suiha-mint">
              <Image
                src="/images/tech.png"
                alt="農業テクノロジーセンサー"
                fill
                className="object-cover"
                sizes="(max-width: 640px) calc(100vw - 32px), 448px"
                quality={72}
              />
              <div className="absolute inset-0 bg-suiha-green/20 mix-blend-multiply" />

              <div className="absolute top-6 sm:top-10 left-6 sm:left-10 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">
                画像認識 AI
              </div>
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">
                深層学習
              </div>
              <div className="hidden sm:block absolute top-1/2 -right-2 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">
                IoTセンサー
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="tech-text text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">独自テクノロジー</span>
            <h2 className="tech-text text-3xl md:text-4xl font-bold text-suiha-dark mb-6 text-balance">
              農業を「データサイエンス」へ
            </h2>
            <p className="tech-text text-suiha-charcoal/80 mb-6 text-lg leading-relaxed">
              経験と勘に頼っていた従来の農業を、AIとIoTによって完全にデジタル化。植物の成長モデルをデジタルツインとして構築し、最も効率的な栽培条件をシミュレーションします。
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item.title} className="tech-text flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suiha-lime flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-suiha-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-suiha-dark">{item.title}</h4>
                    <p className="text-sm text-suiha-charcoal/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
