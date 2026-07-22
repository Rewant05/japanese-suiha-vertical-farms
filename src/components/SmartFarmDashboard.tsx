"use client";

import { useEffect, useState } from "react";
import { Activity, Droplets, Sprout, Sun, Thermometer, Wind } from "lucide-react";

const initialData = {
  temp: 22.4,
  humidity: 65,
  light: 12000,
  co2: 800,
  ph: 6.2,
  yield: 120,
};

export default function SmartFarmDashboard() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isSmallScreen || prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setData((prev) => ({
        temp: +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1),
        humidity: Math.max(60, Math.min(75, prev.humidity + Math.floor(Math.random() * 3 - 1))),
        light: Math.max(10000, Math.min(15000, prev.light + Math.floor(Math.random() * 500 - 250))),
        co2: Math.max(700, Math.min(1000, prev.co2 + Math.floor(Math.random() * 10 - 5))),
        ph: +(prev.ph + (Math.random() * 0.1 - 0.05)).toFixed(2),
        yield: prev.yield,
      }));
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const metrics = [
    { label: "室温", value: `${data.temp}°C`, icon: Thermometer, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "湿度", value: `${data.humidity}%`, icon: Droplets, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "照度", value: `${data.light} lx`, icon: Sun, color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { label: "二酸化炭素濃度", value: `${data.co2} ppm`, icon: Wind, color: "text-gray-500", bg: "bg-gray-500/10" },
    { label: "養液pH", value: `${data.ph}`, icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "予測収穫量", value: `${data.yield} kg/d`, icon: Sprout, color: "text-suiha-green", bg: "bg-suiha-green/10" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-suiha-dark text-white relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-suiha-lime/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="dashboard-title text-center mb-10 sm:mb-16">
          <span className="text-suiha-lime font-bold uppercase tracking-wider text-sm mb-2 block">統合管理ダッシュボード</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">リアルタイム環境制御</h2>
          <p className="text-suiha-mint/70 max-w-2xl mx-auto">
            AI栽培管理システム「MIDORI OS」が提供するリアルタイムモニタリング。全施設の環境データを一元管理し、最適な生育条件を自律的に維持します。
          </p>
        </div>

        <div className="dashboard-container dashboard-card bg-white/10 md:bg-suiha-dark/80 md:backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-10 border border-suiha-mint/10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <h3 className="font-bold text-lg sm:text-xl text-suiha-white flex items-center gap-2">
              <Activity className="text-suiha-lime shrink-0" />
              第1垂直農場 / 葉物モジュール A
            </h3>
            <span className="flex items-center gap-2 text-sm text-suiha-lime">
              <span className="h-2 w-2 rounded-full bg-suiha-lime" />
              システム最適稼働中
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-item bg-white/5 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${metric.bg}`}>
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <span className="text-xs md:text-sm text-suiha-mint/60 font-medium">{metric.label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{metric.value}</div>
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
