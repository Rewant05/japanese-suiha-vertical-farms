import { Cpu, Fingerprint, Network, Database } from "lucide-react";

export const metadata = {
  title: 'テクノロジー | 翠葉ファームテック',
  description: '農業をデータサイエンスへ。翠葉ファームテックの基盤技術。',
};

export default function TechnologyPage() {
  const techs = [
    {
      icon: Network,
      title: "デジタルツイン",
      desc: "物理的な農場と全く同じ仮想モデルをクラウド上に構築。光、水、温度の変化が植物に与える影響を仮想空間で事前にシミュレーションし、失敗のリスクをゼロに近づけます。"
    },
    {
      icon: Fingerprint,
      title: "画像認識",
      desc: "高解像度マルチスペクトルカメラが、人間の目には見えない植物の健康状態（ストレスレベル、栄養不足の兆候）を可視化。病気の早期発見を可能にします。"
    },
    {
      icon: Cpu,
      title: "エッジAI制御",
      desc: "通信障害時でも農場の制御が止まらないよう、各施設のエッジコンピューターが自律的に判断・制御を行うフェイルセーフ設計を採用。"
    },
    {
      icon: Database,
      title: "農業データ基盤",
      desc: "1日あたり数百万点の環境・生育データを収集し、独自のデータレイクに蓄積。継続的な機械学習により、システムの精度は日々向上しています。"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-suiha-dark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="hidden md:block absolute inset-0 opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl border-[1px] border-suiha-lime/20 rounded-full motion-safe:animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl border-[1px] border-suiha-mint/20 rounded-full motion-safe:animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">テクノロジー</h1>
          <p className="text-xl text-suiha-lime">基盤技術</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-suiha-dark mb-6">植物の言語を、データに翻訳する</h2>
          <p className="text-suiha-charcoal/80 leading-relaxed text-lg">
            私たちは、植物の成長過程をブラックボックスとして扱うのではなく、すべてを数値化し、解析可能なデータサイエンスの領域へと引き上げました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techs.map((tech, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-suiha-dark rounded-xl flex items-center justify-center mb-6">
                <tech.icon className="w-7 h-7 text-suiha-lime" />
              </div>
              <h3 className="text-xl font-bold text-suiha-dark mb-4">{tech.title}</h3>
              <p className="text-suiha-charcoal/70 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
