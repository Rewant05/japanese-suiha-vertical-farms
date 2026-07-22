import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cases = [
  {
    slug: "tokyo-urban-farm",
    name: "東京アーバンファーム",
    location: "東京都港区",
    type: "地下鉄高架下活用モデル",
    yield: "月産 3,000kg",
    image: "/images/farm1.png",
    desc: "都心部のデッドスペースを活用し、レストラン向けの高級ハーブ類を生産。収穫後30分以内にシェフの元へ届ける超鮮度物流を実現。",
  },
  {
    slug: "sapporo-snow-resilient-farm",
    name: "札幌スノーリジリエントファーム",
    location: "北海道札幌市",
    type: "寒冷地対応型 大規模工場",
    yield: "月産 12,000kg",
    image: "/images/farm2.png",
    desc: "冬季の降雪や低温に影響されない完全閉鎖型。AIによる徹底した温熱環境制御により、暖房エネルギーを従来の40%削減。",
  },
  {
    slug: "dubai-desert-oasis",
    name: "ドバイ デザートオアシス",
    location: "UAE ドバイ",
    type: "極限環境向け 水循環モデル",
    yield: "月産 8,000kg",
    image: "/images/farm3.png",
    desc: "特殊フィルターで空気中の水分を回収し、蒸散した水を98%再利用。水資源が極端に少ない地域での農業を可能にしました。",
  },
];

export default function FarmCaseStudies() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-suiha-white" aria-labelledby="case-study-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="case-header flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">導入事例</span>
            <h2 id="case-study-heading" className="text-3xl md:text-4xl font-bold text-suiha-dark mb-4">
              世界に広がる翠葉ファーム
            </h2>
            <p className="text-suiha-charcoal/70">
              環境や制約の異なるさまざまな場所で、私たちのテクノロジーが稼働しています。
            </p>
          </div>
          <Link
            href="/farms"
            className="px-6 py-3 bg-white text-suiha-green font-bold rounded-full border border-gray-200 hover:border-suiha-green hover:shadow-md transition-all self-start md:self-auto shrink-0"
          >
            すべての事例を見る
          </Link>
        </div>

        <div className="case-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, idx) => (
            <Link
              key={c.slug}
              id={c.slug}
              href={`/farms#${c.slug}`}
              prefetch={false}
              aria-label={`${c.name}の事例を見る`}
              className="case-card group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col scroll-mt-28 focus:outline-none focus:ring-2 focus:ring-suiha-green focus:ring-offset-4"
            >
              <div className="relative h-48 w-full overflow-hidden bg-suiha-mint">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 31vw, 384px"
                  quality={70}
                />
                <div className="absolute inset-0 bg-suiha-green/20 mix-blend-multiply" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-suiha-green mb-3">
                  <MapPin className="w-4 h-4" />
                  {c.location}
                </div>
                <h3 className="text-xl font-bold text-suiha-dark mb-2">{c.name}</h3>
                <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-600 rounded-full mb-4 self-start">
                  {c.type}
                </div>
                <p className="text-sm text-suiha-charcoal/70 mb-6 leading-relaxed flex-grow">{c.desc}</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">生産量</span>
                  <span className="font-bold text-suiha-dark">{c.yield}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-suiha-green group-hover:text-suiha-dark transition-colors">
                  事例を見る
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
