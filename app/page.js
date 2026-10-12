export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#2B2D42]">
      <header className="border-b border-[#DED8CF] bg-[#F5F1EA]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="block">
            <p className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#2B2D42]">Weeks </span>
              <span className="text-[#B5443B]">Systems</span>
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2B2D42]">
              Digital Solutions & Website Design
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a
              href="#websites"
              className="transition hover:text-[#B5443B]"
            >
              Websites
            </a>

            <a
              href="#portfolio"
              className="transition hover:text-[#B5443B]"
            >
              See What We Build
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#B5443B]"
            >
              Contact
            </a>

            <a
              href="mailto:support@weekssystems.com?subject=Website Project Inquiry"
              className="rounded-xl bg-[#B5443B] px-5 py-3 font-bold text-[#F5F1EA] transition hover:opacity-90"
            >
              Build My Website
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="overflow-hidden">
  <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
    <div>
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#2B2D42]">
        Digital Solutions & Website Design
      </p>

      <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#2B2D42] md:text-6xl">
        Professional websites built for small businesses.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#696A73]">
        Weeks Systems creates clean, practical websites for small businesses,
        independent professionals, and growing brands. From focused landing
        pages to complete multi-page websites, each project is built to give
        your business a professional online presence that is easy to use and
        easy to maintain.
      </p>

      <a
        href="mailto:support@weekssystems.com?subject=Website Project Inquiry"
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B5443B] px-7 py-4 font-bold text-[#F5F1EA] shadow-sm transition hover:opacity-90"
      >
        Build My Website
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>

        <section
          id="websites"
          className="border-y border-[#DED8CF] bg-[#FBF8F3]"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#696A73]">
              Website Services
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] text-[#2B2D42]">
              A website built around your business.
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#696A73]">
              You do not need a huge website to look professional online.
              Weeks Systems builds focused websites around what your business
              actually needs, without unnecessary pages or features.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[#DED8CF] bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE9E1] text-xl">
                  ▣
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  Landing Page
                </h3>

                <p className="mt-3 leading-7 text-[#696A73]">
                  A focused one-page website for businesses that need a
                  professional home online.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE9E1] text-xl">
                  ▤
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  Small Business Website
                </h3>

                <p className="mt-3 leading-7 text-[#696A73]">
                  A complete website with a home page and additional pages for
                  services, business information, contact details, and other
                  important content.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE9E1] text-xl">
                  ↻
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  Website Refresh
                </h3>

                <p className="mt-3 leading-7 text-[#696A73]">
                  A redesign for businesses that already have a website but
                  need a cleaner, more modern look.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#2B2D42] px-8 py-8 text-[#F5F1EA] md:flex-row md:items-center">
              <div>
                <h3 className="text-3xl font-extrabold">
                  Need a website for your business?
                </h3>

                <p className="mt-2 max-w-2xl text-[#E5DFD1]">
                  Tell Weeks Systems what you need and we’ll figure out the
                  right size website for your business.
                </p>
              </div>

              <a
                href="mailto:support@weekssystems.com?subject=Website Project Inquiry"
                className="shrink-0 rounded-xl bg-[#B5443B] px-6 py-3 font-bold text-white transition hover:opacity-90"
              >
                Build My Website →
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#696A73]">
            See What We Build
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em]">
            Digital solutions built for real needs.
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#696A73]">
            Weeks Systems builds websites and focused digital products
            designed around real-world needs.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#DED8CF] bg-white p-8 shadow-sm">
              <div className="grid gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                <div>
                  <p className="text-4xl font-extrabold tracking-tight">
                    <span className="text-[#2B2D42]">Case</span>
                    <span className="text-[#B5443B]">Keep</span>
                  </p>

                  <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#2B2D42]">
                    Organized. Ready. Resolved.
                  </p>
                </div>

                <div>
                  <p className="leading-7 text-[#696A73]">
                    Medical expense organization software designed to help
                    users keep accident-related medical bills, payments,
                    adjustments, documents, and balances organized.
                  </p>

                  <a
                    href="https://www.usecasekeep.com/"
                    className="mt-5 inline-flex rounded-lg bg-[#B5443B] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    View CaseKeep →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex min-h-64 items-center rounded-3xl border border-[#DED8CF] bg-white p-8">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#B5443B]">
                  Coming Soon
                </p>

                <h3 className="mt-3 text-2xl font-extrabold">
                  Another digital solution is on the way.
                </h3>

                <p className="mt-3 leading-7 text-[#696A73]">
                  New Weeks Systems projects will be added here as they become
                  ready to share.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#DED8CF] bg-[#FBF8F3]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#696A73]">
              Why Weeks Systems
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em]">
              Simple solutions. Clear purpose.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-extrabold">
                  Built around real needs
                </h3>

                <p className="mt-2 leading-7 text-[#696A73]">
                  We focus on what your business actually needs instead of
                  adding unnecessary complexity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-extrabold">
                  Designed to be easy to use
                </h3>

                <p className="mt-2 leading-7 text-[#696A73]">
                  Websites and software should make things easier, not harder.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-extrabold">
                  Straightforward projects
                </h3>

                <p className="mt-2 leading-7 text-[#696A73]">
                  Clear scope, practical design, and a finished product built
                  for its purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#2B2D42] text-[#F5F1EA]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_0.5fr] md:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E5DFD1]">
                Contact Weeks Systems
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Get in touch about your website or digital solution.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#E5DFD1]">
                Have a question, want to discuss a project, or need help
                figuring out the right solution for your business? We’re happy
                to help.
              </p>
            </div>

            <div className="border-l-0 border-[#7D7C84] md:border-l md:pl-8">
              <p className="text-lg font-bold">
                support@weekssystems.com
              </p>

              <a
                href="mailto:support@weekssystems.com"
                className="mt-3 inline-block text-sm font-semibold text-[#E5DFD1] underline underline-offset-4"
              >
                Send an email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DED8CF] bg-[#F5F1EA]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">
              <span className="text-[#2B2D42]">Weeks </span>
              <span className="text-[#B5443B]">Systems</span>
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              Digital Solutions & Website Design
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <a href="#websites" className="hover:text-[#B5443B]">
              Websites
            </a>

            <a href="#portfolio" className="hover:text-[#B5443B]">
              See What We Build
            </a>

            <a href="#contact" className="hover:text-[#B5443B]">
              Contact
            </a>
          </div>

          <a
            href="mailto:support@weekssystems.com"
            className="text-sm text-[#696A73]"
          >
            support@weekssystems.com
          </a>
        </div>
      </footer>
    </div>
  );
}