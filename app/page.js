export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-2xl font-bold">Weeks Systems</p>
            <p className="text-sm text-gray-600">
              Simple digital tools for organizing important records.
            </p>
          </div>

          <a
            href="mailto:support@weekssystems.com"
            className="border border-gray-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-center"
          >
            Contact Support
          </a>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-700 mb-3">
                Digital tools by Weeks Systems
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Practical digital tools for organizing records, reviewing
                information, and exporting clean reports.
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Weeks Systems creates focused software products for organizing
                important information. Our first product, CaseKeep, helps users
                organize accident-related medical expenses, track balances, and
                export clean reports for review.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#products"
                  className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center"
                >
                  See Products
                </a>

                <a
                  href="mailto:support@weekssystems.com"
                  className="border border-gray-300 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-center"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Current product</p>
              <h2 className="text-3xl font-bold mb-3">CaseKeep</h2>

              <p className="text-gray-700 mb-5">
                A digital medical expense organization tool for accident-related
                settlement tracking.
              </p>

              <div className="space-y-3 text-sm text-gray-700">
                <p>✓ Track medical charges and providers</p>
                <p>✓ Track insurance payments and self payments</p>
                <p>✓ Add multiple adjustments or write-offs</p>
                <p>✓ Calculate remaining balances</p>
                <p>✓ Export CSV and PDF reports</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Products by Weeks Systems
            </h2>

            <p className="text-gray-700">
              Weeks Systems creates simple, focused software tools. Each
              product is designed to solve one specific organization problem.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-700 mb-2">
                Available product
              </p>

              <h3 className="text-3xl font-bold mb-4">CaseKeep</h3>

              <p className="text-gray-700 mb-5">
                CaseKeep helps users organize accident-related medical expense
                records in one place. Users can enter charges, payments,
                adjustments, status, notes, and export clean reports.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✓ First 5 expenses free to try</li>
                <li>✓ $49 one-time unlock per case</li>
                <li>✓ CSV and PDF exports</li>
                <li>✓ Export all records or filtered records</li>
                <li>✓ Designed for medical expense organization</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <p className="text-sm text-gray-300 mb-2">CaseKeep pricing</p>

              <p className="text-5xl font-bold mb-3">$49</p>

              <p className="text-gray-300 mb-6">
                One-time unlock per case. Users can try the first 5 expenses
                free before unlocking the full case.
              </p>

              <p className="text-sm text-gray-400">
                Payments are processed through Stripe. 
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-6">
              Business and product information
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Business name
                </h3>
                <p>Weeks Systems</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Support email
                </h3>
                <p>
                  <a
                    href="mailto:support@weekssystems.com"
                    className="text-blue-700 underline"
                  >
                    support@weekssystems.com
                  </a>
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Product sold
                </h3>
                <p>
                  CaseKeep, a digital medical expense organization and reporting
                  tool.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
                <p>CaseKeep is planned as a $49 one-time unlock per case.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-4">Important disclaimer</h2>

            <p className="text-gray-700">
              Weeks Systems products are digital organization tools. CaseKeep
              helps users organize medical expense records and export reports,
              but it does not provide legal, medical, financial, insurance, or
              tax advice. Users should consult qualified professionals for advice
              about claims, settlements, medical treatment, insurance, taxes, or
              legal rights.
            </p>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Business</h3>
              <p>Weeks Systems</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p>
                <a
                  href="mailto:support@weekssystems.com"
                  className="text-blue-700 underline"
                >
                  support@weekssystems.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Current product
              </h3>
              <p>CaseKeep — medical expense organization software.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}