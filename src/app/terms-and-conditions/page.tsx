export const metadata = {
  title: '利用規約 | 翠葉ファームテック',
  description: '株式会社翠葉ファームテックのサービス利用規約。',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-suiha-white min-h-screen">
      <div className="bg-suiha-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">利用規約</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-suiha max-w-none">
          <p className="text-suiha-charcoal/80 mb-8">
            この利用規約（以下、「本規約」といいます。）は、株式会社翠葉ファームテック（以下、「当社」といいます。）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。利用者の皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第1条（適用）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第2条（禁止事項）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="list-disc pl-6 text-suiha-charcoal/80 mb-6 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第3条（本サービスの提供の停止等）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul className="list-disc pl-6 text-suiha-charcoal/80 mb-6 space-y-2">
            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第4条（利用制限および登録抹消）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第5条（免責事項）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
            当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </p>

          <h3 className="text-xl font-bold text-suiha-dark mb-4 mt-8">第6条（準拠法・裁判管轄）</h3>
          <p className="text-suiha-charcoal/80 mb-6 leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
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
