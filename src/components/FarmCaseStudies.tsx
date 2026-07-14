"use client";

import { useRef } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FarmCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".case-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".case-card", {
      scrollTrigger: {
        trigger: ".case-container",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const cases = [
    {
      name: "東京アーバンファーム",
      location: "東京都港区",
      type: "地下鉄高架下活用モデル",
      yield: "月産 3,000kg",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
      desc: "都心部のデッドスペースを活用し、レストラン向けの高級ハーブ類を生産。収穫後30分以内にシェフの元へ届ける超鮮度物流を実現。"
    },
    {
      name: "札幌スノーリジリエントファーム",
      location: "北海道札幌市",
      type: "寒冷地対応型 大規模工場",
      yield: "月産 12,000kg",
      image: "https://images.unsplash.com/photo-1628183204860-63ce219808a3?auto=format&fit=crop&q=80&w=800",
      desc: "冬季の降雪や低温に影響されない完全閉鎖型。AIによる徹底した温熱環境制御により、暖房エネルギーを従来の40%削減。"
    },
    {
      name: "ドバイ デザートオアシス",
      location: "UAE ドバイ",
      type: "極限環境向け 水循環モデル",
      yield: "月産 8,000kg",
      image: "https://images.unsplash.com/photo-1595804364117-640b790d0fa8?auto=format&fit=crop&q=80&w=800",
      desc: "特殊フィルターで空気中の水分を回収し、蒸散した水を98%再利用。水資源が極端に少ない地域での農業を可能にしました。"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-suiha-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="case-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">導入事例</span>
            <h2 className="text-3xl md:text-4xl font-bold text-suiha-dark mb-4">世界に広がる翠葉ファーム</h2>
            <p className="text-suiha-charcoal/70">
              環境や制約の異なる様々な場所で、私たちのテクノロジーが稼働しています。
            </p>
          </div>
          <Link href="/farms" className="px-6 py-3 bg-white text-suiha-green font-bold rounded-full border border-gray-200 hover:border-suiha-green hover:shadow-md transition-all self-start md:self-auto shrink-0">
            すべての事例を見る
          </Link>
        </div>

        <div className="case-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="case-card group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-suiha-green/20 mix-blend-multiply"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-suiha-green mb-3">
                  <MapPin className="w-4 h-4" />
                  {c.location}
                </div>
                <h3 className="text-xl font-bold text-suiha-dark mb-2">{c.name}</h3>
                <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-600 rounded-full mb-4 self-start">
                  {c.type}
                </div>
                <p className="text-sm text-suiha-charcoal/70 mb-6 leading-relaxed flex-grow">
                  {c.desc}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">生産量</span>
                  <span className="font-bold text-suiha-dark">{c.yield}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
