export const metadata = {
  title: 'プライバシーポリシー | 翠葉ファームテック',
  description: '株式会社翠葉ファームテックの個人情報保護方針について。',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-suiha max-w-none">
          <p className="text-suiha-charcoal/80 mb-8">
            株式会社翠葉ファームテック（以下、「当社」という。）は、ユーザーの個人情報について以下のとおりプライバシーポリシー（以下、「本ポリシー」という。）を定めます。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">1. 個人情報の取得方法</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は、ユーザーが利用登録をするとき、氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。
            お問い合わせフォームやコメントの送信時には、氏名・電話番号・メールアドレスを取得させていただきます。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">2. 個人情報の利用目的</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            取得した個人情報は、以下の目的のために利用いたします。
          </p>
          <ul className="list-disc pl-6 text-suiha-charcoal/80 mb-6 space-y-2">
            <li>当社サービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
          </ul>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">3. 個人データを安全に管理するための措置</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は、個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また、現場での管理についても定期的に点検を行っています。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">4. 個人データの第三者提供について</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は法令及びガイドラインに別段の定めがある場合を除き、同意を得ないで第三者に個人情報を提供することは致しません。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">5. 保有個人データの開示、訂正</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正、追加、削除、利用の停止、第三者への提供の停止を希望される方は以下の手続きをお願いいたします。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">6. お問い合わせ窓口</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br />
            住所：〒100-0005 東京都千代田区丸の内1-1-1 翠葉テクノロジータワー 24F<br />
            社名：株式会社翠葉ファームテック<br />
            電子メールアドレス：privacy@suiha-farmtech.co.jp
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
            制定日：2020年4月1日<br />
            改定日：2026年7月1日
          </div>
        </div>
      </div>
    </div>
  );
}
