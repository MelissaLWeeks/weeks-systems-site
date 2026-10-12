function FeatureItem({ icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-xl text-[#B5443B]">
        {icon}
      </div>

      <div>
        <h3 className="font-serif text-lg font-bold text-[#17213B]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#5B6170]">
          {children}
        </p>
      </div>
    </div>
  );
}

function FutureProjectCard({ image, description }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#DED8CF] bg-white">
      <div className="relative">
        <img
          src={image}
          alt="Future Weeks Systems project"
          className="h-36 w-full object-cover"
        />

        <span className="absolute bottom-3 left-3 rounded-full bg-[#FFF3EA] px-3 py-1 text-xs font-bold text-[#B5443B]">
          Coming Soon
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-xl font-bold text-[#17213B]">
          Future Project
        </h3>

        <p className="mt-1 text-sm leading-5 text-[#5B6170]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SeeWhatWeBuildPage() {
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
            <a href="/" className="transition hover:text-[#B5443B]">
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
              className="transition hover:text-[#B5443B]"
            >
              Hosting
            </a>

            <a
              href="/see-what-we-build"
              className="border-b-2 border-[#B5443B] pb-1 text-[#B5443B]"
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
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Our Work
              </p>

              <h1 className="mt-3 font-serif text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#17213B] md:text-6xl">
                See what we build.
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-[#505664]">
                Weeks Systems creates practical digital solutions and websites
                for small businesses, independent professionals, and growing
                brands. Each project is built to solve real needs, work
                beautifully, and help our clients move forward.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/websites-hero.png"
                alt="Weeks Systems website displayed on a laptop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CASEKEEP FEATURED PROJECT */}
        <section className="border-t border-[#E4DDD4] bg-[#FBF8F3]">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="overflow-hidden rounded-2xl border border-[#DED8CF] bg-[#FDFBF7]">
              <div className="grid lg:grid-cols-[0.95fr_1.4fr_0.8fr]">
                {/* LEFT COLUMN */}
                <div className="p-8 lg:p-9">
                  <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                    Featured Project
                  </p>

                  <img
                    src="/casekeep-preview.png"
                    alt="CaseKeep"
                    className="mt-6 w-full max-w-[390px]"
                  />

                  <p className="mt-6 max-w-md text-base leading-7 text-[#5B6170]">
                    CaseKeep is a simple, secure tool that helps individuals and
                    families organize medical expenses, track reimbursements,
                    and keep important documents in one place. It&apos;s designed
                    to reduce stress and make healthcare finances easier to
                    manage.
                  </p>

                  <a
                    href="https://usecasekeep.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-lg bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
                  >
                    View CaseKeep →
                  </a>
                </div>

                {/* CENTER VISUAL */}
                <div className="flex items-center bg-[#F3ECE4] p-5 lg:p-6">
                  <img
                    src="/casekeep-preview.png"
                    alt="CaseKeep medical expense organizer"
                    className="w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>

                {/* RIGHT FEATURES */}
                <div className="flex flex-col justify-center gap-7 p-8 lg:p-9">
                  <FeatureItem icon="▱" title="Organize Expenses">
                    Keep track of medical bills, receipts, and reimbursements in
                    one place.
                  </FeatureItem>

                  <FeatureItem icon="▤" title="Store Important Documents">
                    Upload and securely store EOBs, receipts, and other key
                    files.
                  </FeatureItem>

                  <FeatureItem icon="↗" title="Track Reimbursements">
                    See what&apos;s been paid, what&apos;s pending, and what you still
                    owe.
                  </FeatureItem>

                  <FeatureItem icon="◇" title="Built for Real Life">
                    A clean, simple design that helps reduce the stress of
                    medical finances.
                  </FeatureItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FUTURE PROJECTS */}
        <section className="bg-[#F5F1EA]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[0.7fr_1.6fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Coming Soon
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold text-[#17213B] md:text-5xl">
                Future Projects
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-[#5B6170]">
                We&apos;re always working on new tools and websites to help small
                businesses and individuals solve real problems. Here&apos;s a look
                at what&apos;s coming next.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <FutureProjectCard
                image="/websites-landing-card.png"
                description="A new tool designed to solve a common challenge and make life a little easier."
              />

              <FutureProjectCard
                image="/websites-custom-card.png"
                description="A website or application focused on helping businesses work more effectively."
              />

              <FutureProjectCard
                image="/websites-hosting-section.png"
                description="Another practical solution is in development. Stay tuned for updates!"
              />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="border-t border-[#DED8CF] bg-[#EBD8CA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#17213B] md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#4F5561]">
                We&apos;d love to hear about it. Tell us what you&apos;re looking to
                build and we&apos;ll help you find the right solution.
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
                Tell us about your project or what you&apos;re looking to build...
              </div>

              <a
                href="/contact"
                className="mt-3 block rounded-md bg-[#B5443B] px-5 py-3 text-center font-bold text-white transition hover:opacity-90"
              >
                Get In Touch →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}