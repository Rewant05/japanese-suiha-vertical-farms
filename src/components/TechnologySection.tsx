"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tech-text", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });

    gsap.from(".tech-image", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="tech-image aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/tech.png" 
                alt="農業テクノロジーセンサー" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-suiha-green/20 mix-blend-multiply"></div>
              
              <div className="absolute top-10 left-10 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">画像認識 AI</div>
              <div className="absolute bottom-10 right-10 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">深層学習</div>
              <div className="absolute top-1/2 -right-2 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-suiha-green border border-suiha-green/10">IoTセンサー</div>
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
              {[
                { title: "デジタルツイン構築", desc: "クラウド上に作物の仮想モデルを作成し、成長シミュレーションを実行。" },
                { title: "エッジAIカメラ", desc: "葉の面積、色、形状を24時間監視し、異常をリアルタイムで検知。" },
                { title: "自律型環境制御", desc: "機械学習アルゴリズムが、空調・照明・養液供給をミリ秒単位で自動調整。" }
              ].map((item, idx) => (
                <li key={idx} className="tech-text flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suiha-lime flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-suiha-dark"></div>
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
