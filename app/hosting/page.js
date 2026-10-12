function DetailItem({ icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-xl text-[#B5443B]">
        {icon}
      </div>

      <div>
        <h3 className="font-serif text-lg font-bold text-[#17213B]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#4F5561]">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function HostingPage() {
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
              className="transition hover:text-[#B5443B]"
            >
              Websites
            </a>

            <a
              href="/hosting"
              className="border-b-2 border-[#B5443B] pb-1 text-[#B5443B]"
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
                Managed Hosting for Small Businesses
              </p>

              <h1 className="mt-4 max-w-xl font-serif text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#17213B] md:text-6xl">
                Managed Hosting & Updates.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#505664]">
                Fast, secure, and worry-free hosting for your business website.
                We handle the technical details so you can focus on running
                your business.
              </p>

              <p className="mt-5 text-6xl font-extrabold leading-none text-[#17213B]">
                $59
                <span className="ml-2 text-2xl font-medium">/month</span>
              </p>

              <p className="mt-3 max-w-xl text-base leading-7 text-[#505664]">
                Reliable hosting, ongoing maintenance, and minor content
                updates — all in one simple plan.
              </p>

              <a
                href="/build-my-website"
                className="mt-6 inline-flex rounded-xl bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
              >
                Build My Website →
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/hosting-hero.png"
                alt="Professional business website displayed on a laptop in a warm workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="border-t border-[#E4DDD4] bg-[#FBF8F3]">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.35fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                  What&apos;s Included
                </p>

                <h2 className="mt-2 max-w-4xl font-serif text-4xl font-bold tracking-[-0.025em] text-[#17213B] md:text-5xl">
                  Everything you need for a worry-free website.
                </h2>
              </div>

              <p className="text-base leading-7 text-[#505664]">
                Reliable hosting, ongoing maintenance, security, and updates so
                your website stays fast, secure, and up to date.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="☁" title="Managed Hosting">
                  Your website is hosted on reliable commercial infrastructure
                  for fast, secure, and dependable performance.
                </DetailItem>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="◎" title="Domain Connection">
                  You keep ownership of your domain, and we handle connecting
                  it to your hosted website with the proper DNS setup.
                </DetailItem>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="▣" title="SSL & Security">
                  Every hosted website includes secure HTTPS setup and basic
                  security configuration.
                </DetailItem>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="⚙" title="Ongoing Maintenance">
                  We keep the site maintained, monitor routine issues, and
                  handle normal technical upkeep.
                </DetailItem>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="▤" title="Minor Content Updates">
                  Need to change a phone number, update text, or swap an image?
                  We handle small updates using content you provide.
                </DetailItem>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <DetailItem icon="ϟ" title="Fast & Reliable Performance">
                  Your website stays online, loads quickly, and delivers a
                  smooth experience for your customers.
                </DetailItem>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT DETAILS */}
        <section className="bg-[#F5F1EA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <div className="relative">
                <img
                  src="/websites-hosting-section.png"
                  alt="Warm professional workspace with plant and coffee mug"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#17213B]/20" />

                <div className="absolute inset-0 flex items-end p-8">
                  <div className="max-w-md text-white">
                    <h2 className="font-serif text-4xl font-bold leading-tight">
                      Built for your business.
                      <br />
                      Managed by us.
                    </h2>

                    <div className="mt-5 h-px w-10 bg-white" />

                    <p className="mt-5 text-lg leading-7">
                      You focus on your business.
                      <br />
                      We&apos;ll keep your website running smoothly in the
                      background.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Important Details
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold text-[#17213B] md:text-5xl">
                A few things to know.
              </h2>

              <div className="mt-7 space-y-6">
                <DetailItem icon="○" title="You Own the Domain">
                  Your domain always belongs to you. We simply connect it to
                  your hosted website and manage the technical side.
                </DetailItem>

                <DetailItem icon="⚙" title="What&apos;s Included">
                  Hosting, deployment, domain connection, SSL, routine
                  maintenance, and minor content updates provided by you.
                </DetailItem>

                <DetailItem
                  icon="▤"
                  title="Special Cases May Have Additional Costs"
                >
                  High-traffic websites, e-commerce stores, or sites requiring
                  additional infrastructure or outside services may have
                  separate hosting costs.
                </DetailItem>

                <DetailItem icon="◉" title="Support Scope">
                  Minor updates are included. Larger redesigns, new pages, or
                  new functionality are quoted separately.
                </DetailItem>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="border-t border-[#DED8CF] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238, 217, 202, 0.78), rgba(238, 217, 202, 0.78)), url('/hosting-cta-bg.png')",
          }}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Let&apos;s Get Started
              </p>

              <h2 className="mt-2 max-w-xl font-serif text-4xl font-bold leading-tight text-[#17213B] md:text-5xl">
                Ready for worry-free hosting?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#4F5561]">
                Keep your website secure, updated, and running smoothly with
                managed hosting from Weeks Systems.
              </p>
            </div>

            <div className="rounded-2xl bg-white/95 p-6 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-[#D8D0C7] bg-white px-4 py-3 text-sm text-[#88868B]">
                  Your Name
                </div>

                <div className="rounded-md border border-[#D8D0C7] bg-white px-4 py-3 text-sm text-[#88868B]">
                  Your Email
                </div>
              </div>

              <div className="mt-3 rounded-md border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#88868B]">
                Tell us about your website or any questions you have...
              </div>

              <a
                href="/contact"
                className="mt-3 block rounded-md bg-[#B5443B] px-5 py-3 text-center font-bold text-white transition hover:opacity-90"
              >
                Send Message →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}