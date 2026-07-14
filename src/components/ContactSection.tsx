"use client";

import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-br from-suiha-mint/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="contact-info">
            <span className="text-suiha-green font-bold uppercase tracking-wider text-sm mb-2 block">お問い合わせ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-suiha-dark mb-6">導入のご相談・お問い合わせ</h2>
            <p className="text-suiha-charcoal/70 mb-10 text-lg">
              システムの導入、パートナーシップ、メディア取材など、お気軽にお問い合わせください。専門のチームがご提案いたします。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-suiha-green">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-suiha-dark mb-1">本社</h4>
                  <p className="text-sm text-suiha-charcoal/70">〒100-0005<br/>東京都千代田区丸の内1-1-1<br/>翠葉テクノロジータワー 24F</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-suiha-green">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-suiha-dark mb-1">メール</h4>
                  <p className="text-sm text-suiha-charcoal/70">info@suiha-farmtech.co.jp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-suiha-green">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-suiha-dark mb-1">電話</h4>
                  <p className="text-sm text-suiha-charcoal/70">03-1234-5678 (平日 9:00 - 18:00)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form glass-card rounded-3xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-suiha-dark mb-2">会社名・組織名</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-suiha-green/50 focus:border-suiha-green transition-all bg-white/50" placeholder="株式会社翠葉" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-suiha-dark mb-2">お名前</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-suiha-green/50 focus:border-suiha-green transition-all bg-white/50" placeholder="山田 太郎" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-suiha-dark mb-2">メールアドレス</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-suiha-green/50 focus:border-suiha-green transition-all bg-white/50" placeholder="taro@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-suiha-dark mb-2">お問い合わせ種別</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-suiha-green/50 focus:border-suiha-green transition-all bg-white/50 text-gray-700">
                  <option>システム導入について</option>
                  <option>資料請求</option>
                  <option>協業・パートナーシップ</option>
                  <option>取材・広報</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-suiha-dark mb-2">お問い合わせ内容</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-suiha-green/50 focus:border-suiha-green transition-all bg-white/50" placeholder="具体的な内容をご記入ください..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-suiha-green text-white font-bold rounded-xl hover:bg-suiha-dark transition-colors shadow-lg hover:shadow-xl">
                送信する
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                送信することで、弊社の<a href="/privacy-policy" className="text-suiha-green underline hover:text-suiha-lime">プライバシーポリシー</a>に同意したことになります。
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
