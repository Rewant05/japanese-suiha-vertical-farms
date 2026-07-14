import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-suiha-dark text-suiha-mint pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white">
              <Leaf className="h-8 w-8 text-suiha-lime" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">翠葉ファームテック</span>
              </div>
            </Link>
            <p className="text-sm text-suiha-mint/70 leading-relaxed">
              次世代のスマート農業と垂直農法技術で、持続可能な食の未来を創造します。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">サービス</h4>
            <ul className="space-y-3 text-sm text-suiha-mint/80">
              <li><Link href="/solutions" className="hover:text-suiha-lime transition-colors">ソリューション</Link></li>
              <li><Link href="/technology" className="hover:text-suiha-lime transition-colors">テクノロジー</Link></li>
              <li><Link href="/sustainability" className="hover:text-suiha-lime transition-colors">サステナビリティ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">企業情報</h4>
            <ul className="space-y-3 text-sm text-suiha-mint/80">
              <li><Link href="/about" className="hover:text-suiha-lime transition-colors">会社概要</Link></li>
              <li><Link href="/farms" className="hover:text-suiha-lime transition-colors">導入事例</Link></li>
              <li><Link href="/contact" className="hover:text-suiha-lime transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">法的情報</h4>
            <ul className="space-y-3 text-sm text-suiha-mint/80">
              <li><Link href="/privacy-policy" className="hover:text-suiha-lime transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-suiha-lime transition-colors">利用規約</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-xs text-suiha-mint/50">
          <p>&copy; {new Date().getFullYear()} 株式会社翠葉ファームテック 無断転載を禁じます。</p>
        </div>
      </div>
    </footer>
  );
}
