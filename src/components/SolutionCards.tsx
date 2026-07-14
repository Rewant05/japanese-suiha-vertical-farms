"use client";

import { useRef } from "react";
import { Cpu, Wind, BarChart3 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SolutionCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".solution-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".solution-card", {
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const solutions = [
    {
      title: "AI栽培管理システム",
      product: "MIDORI OS",
      description: "生育データを機械学習で分析し、各作物に最適な環境パラメーターを自動生成・制御する中核システム。",
      icon: Cpu,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "環境制御ユニット",
      product: "HIKARI Grid",
      description: "LED波長調整、CO2濃度、温湿度を精密にコントロールし、光合成効率を最大化するハードウェアユニット。",
      icon: Wind,
      color: "bg-suiha-mint text-suiha-green border-suiha-green/20"
    },
    {
      title: "収穫予測AI",
      product: "MINORI Forecast",
      description: "カメラ画像と環境データから成長率を計算し、収穫時期と収量を高精度で予測するサプライチェーン最適化ツール。",
      icon: BarChart3,
      color: "bg-orange-50 text-orange-600 border-orange-200"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solution-header text-center mb-16">
          <span className="text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">主要ソリューション</span>
          <h2 className="text-3xl md:text-4xl font-bold text-suiha-dark mb-4">次世代農業を支えるテクノロジー</h2>
          <p className="text-suiha-charcoal/70 max-w-2xl mx-auto text-balance">
            ハードウェアからソフトウェアまで、垂直農法に必要なすべてをワンストップで提供します。
          </p>
        </div>

        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div 
              key={idx} 
              className="solution-card group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${solution.color}`}>
                <solution.icon className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">{solution.title}</h3>
              <h4 className="text-2xl font-bold text-suiha-dark mb-4">{solution.product}</h4>
              <p className="text-suiha-charcoal/80 mb-8 flex-grow leading-relaxed text-sm">
                {solution.description}
              </p>
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-bold text-suiha-green group-hover:text-suiha-lime transition-colors"
              >
                詳細を見る →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
