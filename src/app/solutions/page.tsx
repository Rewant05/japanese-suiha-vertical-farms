import { Cpu, Wind, BarChart3, ShieldCheck } from "lucide-react";

export const metadata = {
  title: 'ソリューション | 翠葉ファームテック',
  description: 'ハードウェアからソフトウェアまで、垂直農法に必要なすべてをワンストップで提供します。',
};

export default function SolutionsPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-suiha-lime/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ソリューション</h1>
          <p className="text-xl text-suiha-lime">提供サービス一覧</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mb-16">
          <p className="text-lg text-suiha-charcoal/80 leading-relaxed">
            翠葉ファームテックは、ハードウェア（制御ユニット）とソフトウェア（AI管理システム）をシームレスに統合した、ワンストップのスマート農業ソリューションを提供します。
          </p>
        </div>

        <div className="space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 rounded-3xl p-12 aspect-square md:aspect-video lg:aspect-square flex flex-col justify-center border border-blue-100">
              <Cpu className="w-16 h-16 text-blue-500 mb-6" />
              <div className="space-y-4">
                <div className="h-4 bg-blue-200/50 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-blue-200/50 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-4 bg-blue-200/50 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">ソフトウェア・人工知能</div>
              <h2 className="text-3xl font-bold text-suiha-dark mb-2">AI栽培管理システム</h2>
              <h3 className="text-xl text-gray-500 font-medium mb-6">「MIDORI OS」</h3>
              <p className="text-suiha-charcoal/70 mb-6 leading-relaxed">
                全施設の環境データ（温度、湿度、二酸化炭素、光量、養液濃度）を24時間365日クラウドに集約。機械学習アルゴリズムが作物の成長ステージに合わせて最適な環境パラメーターを自動生成し、ハードウェアへ指示を出します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> リアルタイム・リモート監視</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 品種別の最適化レシピ適用</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 異常検知と自動通知機能</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-suiha-mint text-suiha-green text-sm font-bold rounded-full mb-4">ハードウェア制御</div>
              <h2 className="text-3xl font-bold text-suiha-dark mb-2">環境制御ユニット</h2>
              <h3 className="text-xl text-gray-500 font-medium mb-6">「HIKARI Grid」</h3>
              <p className="text-suiha-charcoal/70 mb-6 leading-relaxed">
                独自開発の波長可変型LEDライトと、精密空調・水耕栽培システムを統合したモジュール。MIDORI OSからの指令を受け、植物の光合成効率が最大化される環境を物理的に創り出します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 波長・調光のミリ秒単位制御</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 省エネ対応の高効率LED</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 拡張可能なモジュール設計</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-suiha-mint/50 rounded-3xl p-12 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center border border-suiha-green/20">
               <div className="relative w-full h-full border-4 border-suiha-green/20 rounded-xl flex flex-col justify-between p-4">
                 <div className="w-full h-8 bg-suiha-lime/30 rounded flex items-center justify-around">
                   {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded-full bg-white shadow animate-pulse"></div>)}
                 </div>
                 <Wind className="w-24 h-24 text-suiha-green self-center opacity-50" />
                 <div className="w-full h-12 bg-blue-200/50 rounded mt-auto"></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-50 rounded-3xl p-12 aspect-square md:aspect-video lg:aspect-square flex flex-col justify-center items-center border border-orange-100">
              <BarChart3 className="w-24 h-24 text-orange-400 mb-8" />
              <div className="w-full h-32 flex items-end justify-between gap-2 px-8">
                {[40, 60, 50, 80, 70, 90, 100].map((h, i) => (
                  <div key={i} className="w-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full mb-4">データ分析</div>
              <h2 className="text-3xl font-bold text-suiha-dark mb-2">収穫予測AI</h2>
              <h3 className="text-xl text-gray-500 font-medium mb-6">「MINORI Forecast」</h3>
              <p className="text-suiha-charcoal/70 mb-6 leading-relaxed">
                エッジカメラで取得した画像データから、作物の成長状態（葉面積、色素、体積）をディープラーニングで解析。過去の栽培データと照合し、最適な収穫時期と予測収穫量を高精度（誤差5%以内）で算出します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 出荷計画・人員配置の最適化</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> フードロス削減への貢献</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck className="w-5 h-5 text-suiha-green" /> 飲食店・小売店への安定供給約束</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
