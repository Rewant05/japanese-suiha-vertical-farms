"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 })
      .from(".hero-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-image", { scale: 0.95, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
      .from(".hero-ui-card", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-suiha-mint/50 to-suiha-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"></div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-suiha-green/10 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-suiha-lime/10 rounded-full blur-3xl animate-pulse-slow delay-1000 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-suiha-green/10 text-suiha-green text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suiha-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-suiha-lime"></span>
              </span>
              次世代の都市型農業ソリューション
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-suiha-dark leading-tight mb-6 text-balance">
              自然とAIの調和が創る、<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-suiha-green to-suiha-lime">
                持続可能な食の未来
              </span>
            </h1>
            
            <p className="hero-desc text-lg text-suiha-charcoal/80 mb-8 max-w-xl text-balance">
              翠葉ファームテックは、最先端の環境制御技術と収穫予測AIにより、場所や気候に依存しない高効率な垂直農法システムを提供します。
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Link 
                href="/solutions" 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-suiha-green text-white font-bold rounded-full hover:bg-suiha-dark transition-all hover:shadow-xl hover:-translate-y-1"
              >
                ソリューションを見る
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/technology" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-suiha-green font-bold rounded-full border-2 border-suiha-green hover:bg-suiha-mint transition-all"
              >
                テクノロジー
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
            <div className="hero-image relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/hero.png" 
                alt="垂直農法プラント" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-suiha-dark/80 to-transparent"></div>
            </div>
            
            <div className="hero-ui-card absolute -right-4 top-16 glass-card rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-suiha-mint flex items-center justify-center">
                  <span className="text-suiha-green font-bold text-xs">二酸化炭素</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">最適値維持</p>
                  <p className="text-sm font-bold text-suiha-dark">800 ppm</p>
                </div>
              </div>
            </div>

            <div className="hero-ui-card absolute -left-8 bottom-32 glass-card rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-suiha-lime/20 flex items-center justify-center">
                  <span className="text-suiha-green font-bold text-xs">湿度</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">環境制御</p>
                  <p className="text-sm font-bold text-suiha-dark">65%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
