import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: 'お問い合わせ | 翠葉ファームテック',
  description: '導入のご相談、パートナーシップ、メディア取材などのお問い合わせ。',
};

export default function ContactPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="hidden md:block absolute right-0 bottom-0 w-64 h-64 bg-suiha-lime/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl text-suiha-lime">ご相談・ご質問</p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
