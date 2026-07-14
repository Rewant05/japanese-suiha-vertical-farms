"use client";

import { useState, useEffect, useRef } from "react";
import { Thermometer, Droplets, Sun, Wind, Sprout, Activity } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SmartFarmDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({
    temp: 22.4,
    humidity: 65,
    light: 12000,
    co2: 800,
    ph: 6.2,
    yield: 120,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        temp: +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1),
        humidity: Math.max(60, Math.min(75, prev.humidity + Math.floor(Math.random() * 3 - 1))),
        light: Math.max(10000, Math.min(15000, prev.light + Math.floor(Math.random() * 500 - 250))),
        co2: Math.max(700, Math.min(1000, prev.co2 + Math.floor(Math.random() * 10 - 5))),
        ph: +(prev.ph + (Math.random() * 0.1 - 0.05)).toFixed(2),
        yield: prev.yield,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.from(".dashboard-title", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
    
    gsap.from(".dashboard-card", {
      scrollTrigger: {
        trigger: ".dashboard-container",
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".metric-item", {
      scrollTrigger: {
        trigger: ".dashboard-container",
        start: "top 60%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.5)"
    });
  }, { scope: containerRef });

  const metrics = [
    { label: "室温", value: `${data.temp}°C`, icon: Thermometer, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "湿度", value: `${data.humidity}%`, icon: Droplets, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "照度", value: `${data.light} lx`, icon: Sun, color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { label: "二酸化炭素濃度", value: `${data.co2} ppm`, icon: Wind, color: "text-gray-500", bg: "bg-gray-500/10" },
    { label: "養液水素イオン濃度", value: `${data.ph}`, icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "予測収穫量", value: `${data.yield} kg/d`, icon: Sprout, color: "text-suiha-green", bg: "bg-suiha-green/10" },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-suiha-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-suiha-lime/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="dashboard-title text-center mb-16">
          <span className="text-suiha-lime font-bold uppercase tracking-wider text-sm mb-2 block">統合管理ダッシュボード</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">リアルタイム環境制御</h2>
          <p className="text-suiha-mint/70 max-w-2xl mx-auto">
            AI栽培管理システム「MIDORI OS」が提供するリアルタイムモニタリング。
            全施設の環境データを一元管理し、最適な生育条件を自律的に維持します。
          </p>
        </div>

        <div className="dashboard-container dashboard-card dark-glass-card rounded-3xl p-6 md:p-10 border-suiha-mint/10">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h3 className="font-bold text-xl text-suiha-white flex items-center gap-2">
              <Activity className="text-suiha-lime animate-pulse" />
              第1垂直農場 / 葉物モジュール A
            </h3>
            <span className="flex items-center gap-2 text-sm text-suiha-lime">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suiha-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-suiha-lime"></span>
              </span>
              システム最適稼働中
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-item bg-white/5 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${metric.bg}`}>
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <span className="text-xs md:text-sm text-suiha-mint/60 font-medium truncate">{metric.label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
             <div className="inline-flex items-center gap-2 text-xs text-suiha-mint/50 bg-white/5 px-4 py-2 rounded-full">
               最終更新: たった今
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
