function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-[#4F5561]">
      <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-[11px] font-bold text-[#B5443B]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#2B2D42]">
      {/* HEADER */}
      <header className="border-b border-[#DED8CF] bg-[#F5F1EA]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="block">
            <p className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#2B2D42]">Weeks </span>
              <span className="text-[#B5443B]">Systems</span>
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#2B2D42]">
              Digital Solutions & Website Design
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a
              href="/"
              className="transition hover:text-[#B5443B]"
            >
              Home
            </a>

            <a
              href="/websites"
              className="border-b-2 border-[#B5443B] pb-1 text-[#B5443B]"
            >
              Websites
            </a>

            <a
              href="/hosting"
              className="transition hover:text-[#B5443B]"
            >
              Hosting
            </a>

            <a
              href="/see-what-we-build"
              className="transition hover:text-[#B5443B]"
            >
              See What We Build
            </a>

            <a
              href="/contact"
              className="transition hover:text-[#B5443B]"
            >
              Contact
            </a>

            <a
              href="/build-my-website"
              className="rounded-xl bg-[#B5443B] px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              Build My Website →
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-[#F5F1EA]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Website Design & Development
              </p>

              <h1 className="mt-4 max-w-xl font-serif text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#17213B] md:text-6xl">
                Professional websites that help your business grow.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#505664]">
                Beautiful, effective websites for small businesses, independent
                professionals, and growing brands. We combine modern design,
                reliable hosting, and personalized support — all in one place.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-6">
                <a
                  href="/build-my-website"
                  className="rounded-xl bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
                >
                  Build My Website →
                </a>

                <div className="flex items-center gap-3 text-sm font-semibold text-[#59606C]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5DA] text-[#B5443B]">
                    ▣
                  </div>
                  <span>A simpler way to get online.</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/websites-hero.png"
                alt="Professional small business website displayed on a laptop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* WEBSITE PACKAGES */}
        <section className="border-t border-[#E4DDD4] bg-[#FBF8F3]">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                  Website Packages
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-0.025em] text-[#17213B] md:text-5xl">
                  Simple, transparent pricing.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-[#505664]">
                Choose the website solution that fits your goals. All websites
                include modern, responsive design, basic SEO setup, and
                personalized support.
              </p>
            </div>

            {/* FOUR COLUMNS */}
            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {/* LANDING PAGE */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DED8CF] bg-white shadow-sm">
                <img
                  src="/websites-landing-card.png"
                  alt="Landing page website example"
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                    Landing Page
                  </h3>

                  <p className="mt-1 text-xl font-semibold text-[#B5443B]">
                    Starting at $750
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#4F5561]">
                    A focused, single-page website perfect for getting online
                    quickly. Great for new businesses, service providers, or
                    special campaigns.
                  </p>

                  <ul className="mt-5 flex-1 space-y-2">
                    <CheckItem>Single, scrollable page</CheckItem>
                    <CheckItem>Mobile responsive design</CheckItem>
                    <CheckItem>Contact form integration</CheckItem>
                    <CheckItem>Basic SEO setup</CheckItem>
                    <CheckItem>1 round of revisions</CheckItem>
                  </ul>

                  <a
                    href="/build-my-website"
                    className="mt-6 rounded-lg border border-[#B5443B] px-4 py-3 text-center text-sm font-bold text-[#B5443B] transition hover:bg-[#B5443B] hover:text-white"
                  >
                    Get Started →
                  </a>
                </div>
              </article>

              {/* SMALL BUSINESS */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DED8CF] bg-white shadow-sm">
                <img
                  src="/websites-small-business-card.png"
                  alt="Small business website example"
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                    Small Business Website
                  </h3>

                  <p className="mt-1 text-xl font-semibold text-[#B5443B]">
                    Starting at $1,500
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#4F5561]">
                    A complete website for your business with multiple pages and
                    everything you need to make a strong impression.
                  </p>

                  <ul className="mt-5 flex-1 space-y-2">
                    <CheckItem>
                      Up to 5 pages (Home, About, Services, Contact, etc.)
                    </CheckItem>
                    <CheckItem>Mobile responsive design</CheckItem>
                    <CheckItem>Contact form integration</CheckItem>
                    <CheckItem>Basic SEO setup</CheckItem>
                    <CheckItem>2 rounds of revisions</CheckItem>
                  </ul>

                  <a
                    href="/build-my-website"
                    className="mt-6 rounded-lg border border-[#B5443B] px-4 py-3 text-center text-sm font-bold text-[#B5443B] transition hover:bg-[#B5443B] hover:text-white"
                  >
                    Get Started →
                  </a>
                </div>
              </article>

              {/* CUSTOM WEBSITE */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DED8CF] bg-white shadow-sm">
                <img
                  src="/websites-custom-card.png"
                  alt="Custom website planning and wireframe example"
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                    Custom Website
                  </h3>

                  <p className="mt-1 text-xl font-semibold text-[#B5443B]">
                    Starting at $2,000
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#4F5561]">
                    A fully custom website tailored to your brand, goals, and
                    unique requirements. Perfect for businesses that need a more
                    custom solution.
                  </p>

                  <ul className="mt-5 flex-1 space-y-2">
                    <CheckItem>Custom design and functionality</CheckItem>
                    <CheckItem>Unlimited pages as needed</CheckItem>
                    <CheckItem>Mobile responsive design</CheckItem>
                    <CheckItem>Contact form integration</CheckItem>
                    <CheckItem>Basic SEO setup</CheckItem>
                    <CheckItem>3 rounds of revisions</CheckItem>
                  </ul>

                  <a
                    href="/build-my-website"
                    className="mt-6 rounded-lg border border-[#B5443B] px-4 py-3 text-center text-sm font-bold text-[#B5443B] transition hover:bg-[#B5443B] hover:text-white"
                  >
                    Get Started →
                  </a>
                </div>
              </article>

              {/* WEBSITE REFRESH */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DED8CF] bg-white shadow-sm">
                <img
                  src="/websites-refresh-card.png"
                  alt="Website refresh represented by circular refresh arrows"
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                    Website Refresh
                  </h3>

                  <p className="mt-1 text-xl font-semibold text-[#B5443B]">
                    Custom Quote
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#4F5561]">
                    Give your existing website a fresh, modern look. We&apos;ll
                    update the design, improve functionality, and make it work
                    harder for your business.
                  </p>

                  <ul className="mt-5 flex-1 space-y-2">
                    <CheckItem>Modern, refreshed design</CheckItem>
                    <CheckItem>Improved layout and content</CheckItem>
                    <CheckItem>Mobile responsive updates</CheckItem>
                    <CheckItem>SEO best practices</CheckItem>
                    <CheckItem>
                      Preserve existing content when possible
                    </CheckItem>
                  </ul>

                  <a
                    href="/build-my-website"
                    className="mt-6 rounded-lg border border-[#B5443B] px-4 py-3 text-center text-sm font-bold text-[#B5443B] transition hover:bg-[#B5443B] hover:text-white"
                  >
                    Request a Quote →
                  </a>
                </div>
              </article>
            </div>

            {/* ECOMMERCE STRIP */}
            <div className="mt-4 grid overflow-hidden rounded-2xl border border-[#DED8CF] bg-white md:grid-cols-[240px_1fr_auto] md:items-center">
              <img
                src="/websites-ecommerce-strip.png"
                alt="Shopping cart representing e-commerce website services"
                className="h-full min-h-32 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                  E-Commerce & Advanced Functionality
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4F5561]">
                  E-commerce, memberships, booking systems, custom features,
                  and other advanced functionality are quoted separately based
                  on your specific project scope and requirements. Contact us to
                  discuss your needs.
                </p>
              </div>

              <div className="p-6 md:pl-0">
                <a
                  href="/build-my-website"
                  className="inline-flex whitespace-nowrap rounded-lg border border-[#B5443B] px-5 py-3 text-sm font-bold text-[#B5443B] transition hover:bg-[#B5443B] hover:text-white"
                >
                  Discuss Your Project →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MANAGED HOSTING */}
        <section className="bg-[#F5F1EA]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[300px_1fr_280px] lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/websites-hosting-section.png"
                alt="Warm professional workspace with plant and coffee mug"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Reliable Hosting for Your Website
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold text-[#17213B]">
                Managed Hosting & Updates
              </h2>

              <p className="mt-1 text-3xl font-extrabold text-[#B5443B]">
                $59/month
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4F5561]">
                Keep your website fast, secure, and worry-free. Our managed
                hosting includes reliable performance, security updates, daily
                backups, and ongoing support — so you can focus on running your
                business.
              </p>

              <a
                href="/hosting"
                className="mt-5 inline-flex rounded-lg bg-[#B5443B] px-6 py-3 font-bold text-white transition hover:opacity-90"
              >
                View Hosting →
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-[#B5443B]">
                  ◇
                </div>
                <div>
                  <h3 className="font-bold text-[#17213B]">
                    Secure & Reliable
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#4F5561]">
                    Fast, secure hosting with proactive monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-[#B5443B]">
                  ▤
                </div>
                <div>
                  <h3 className="font-bold text-[#17213B]">
                    Daily Backups
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#4F5561]">
                    Your site is backed up regularly for peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-[#B5443B]">
                  ☁
                </div>
                <div>
                  <h3 className="font-bold text-[#17213B]">
                    Automatic Updates
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#4F5561]">
                    We handle core updates, plugins, and security patches.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-[#B5443B]">
                  ◉
                </div>
                <div>
                  <h3 className="font-bold text-[#17213B]">
                    Ongoing Support
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#4F5561]">
                    Real help from a real person when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-[#DED8CF] bg-[#EBD8CA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Ready to Get Started?
              </p>

              <h2 className="mt-2 max-w-xl font-serif text-4xl font-bold leading-tight text-[#17213B] md:text-5xl">
                Let&apos;s build something great together.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#4F5561]">
                Tell us about your business, your goals, and what you&apos;re
                looking for. We&apos;ll be in touch soon to discuss your project
                and how Weeks Systems can help.
              </p>
            </div>

            <div className="rounded-2xl bg-white/95 p-6 shadow-sm">
              <h3 className="text-center font-serif text-2xl font-bold text-[#17213B]">
                Start Your Website Project
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-[#D8D0C7] bg-white px-4 py-3 text-sm text-[#88868B]">
                  Your Name
                </div>

                <div className="rounded-md border border-[#D8D0C7] bg-white px-4 py-3 text-sm text-[#88868B]">
                  Your Email
                </div>
              </div>

              <div className="mt-3 rounded-md border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#88868B]">
                Tell us about your business and what you&apos;re looking for...
              </div>

              <a
                href="/build-my-website"
                className="mt-3 block rounded-md bg-[#B5443B] px-5 py-3 text-center font-bold text-white transition hover:opacity-90"
              >
                Build My Website →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
