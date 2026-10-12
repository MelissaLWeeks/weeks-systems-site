function InfoCard({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
      <div className="flex gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-2xl text-[#B5443B]">
          {icon}
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-[#17213B]">
            {title}
          </h3>

          <p className="mt-2 text-base leading-7 text-[#5B6170]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BuildMyWebsitePage() {
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
              className="rounded-xl bg-[#B5443B] px-6 py-3 font-bold text-white"
            >
              Build My Website →
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-[#F5F1EA]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Website Project Inquiry
              </p>

              <h1 className="mt-3 max-w-xl font-serif text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#17213B] md:text-6xl">
                Let&apos;s Build
                <br />
                Your Website
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#505664]">
                Tell us about your business and what you&apos;re looking to
                build. We&apos;ll get back to you with next steps and options
                that fit your needs and budget.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/websites-hero.png"
                alt="Professional website displayed on a laptop in a warm workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROJECT DETAILS */}
        <section className="border-t border-[#E4DDD4] bg-[#FBF8F3]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 lg:grid-cols-[1.2fr_0.85fr]">
            {/* FORM */}
            <div className="rounded-2xl border border-[#DED8CF] bg-white p-7">
              <h2 className="font-serif text-4xl font-bold text-[#17213B]">
                Project Details
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-7 text-[#5B6170]">
                The more information you can share, the better we can understand
                your goals and provide the right recommendations. All fields
                are optional, but the more detail, the more helpful our
                response will be.
              </p>

              <form className="mt-7">
                {/* NAME / EMAIL */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />

                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />
                </div>

                {/* BUSINESS */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Business Name *"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />

                  <input
                    type="text"
                    placeholder="Business Website (if you have one)"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />
                </div>

                {/* WEBSITE TYPE */}
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-semibold text-[#4F5561]">
                    What type of website are you looking for? *
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#6B7079] outline-none focus:border-[#B5443B]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Landing Page</option>
                    <option>Small Business Website</option>
                    <option>Custom Website</option>
                    <option>Website Refresh</option>
                    <option>E-Commerce Website</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                {/* PROJECT DESCRIPTION */}
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-semibold text-[#4F5561]">
                    Tell us about your business and what you&apos;re looking to
                    build *
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Share your goals, features you need, and anything else that would be helpful..."
                    className="w-full resize-none rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#9A9AA0] focus:border-[#B5443B]"
                  />
                </div>

                {/* FEATURES */}
                <fieldset className="mt-5">
                  <legend className="font-serif text-lg font-bold text-[#17213B]">
                    What features are you interested in?
                  </legend>

                  <div className="mt-3 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Custom Design
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Hosting & Domain Setup
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Online Booking
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Website Updates
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      E-Commerce
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Ongoing Support
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Blog / Content Pages
                    </label>

                    <label className="flex items-center gap-3 text-sm text-[#5B6170]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CFC7BE] accent-[#B5443B]"
                      />
                      Not Sure Yet
                    </label>
                  </div>
                </fieldset>

                {/* OTHER DETAILS */}
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-[#4F5561]">
                    Anything else we should know?
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Budget range, timeline, examples you like, or any questions you have..."
                    className="w-full resize-none rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none placeholder:text-[#9A9AA0] focus:border-[#B5443B]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
                >
                  Submit Inquiry →
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              <InfoCard icon="▣" title="Custom Websites">
                We design clean, modern websites that showcase your business,
                build credibility, and help you connect with your customers.
              </InfoCard>

              <InfoCard icon="⚙" title="Practical Solutions">
                From simple sites to more advanced features like online booking
                or e-commerce, we create solutions that fit your needs.
              </InfoCard>

              <InfoCard icon="◎" title="Ongoing Support">
                We&apos;re here after launch too. Hosting, updates, and support
                options are available so you can focus on running your
                business.
              </InfoCard>

              <div className="rounded-2xl bg-[#F3E6DD] p-6">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFDACB] text-3xl font-semibold text-[#B5443B]">
                    ?
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                      Not Sure What You Need?
                    </h3>

                    <p className="mt-2 text-base leading-7 text-[#5B6170]">
                      That&apos;s okay! Tell us a little about your business and
                      we can help you figure out the best options. We&apos;ll
                      make suggestions based on your goals, budget, and
                      timeline.
                    </p>

                    <a
                      href="/contact"
                      className="mt-5 inline-flex rounded-lg bg-[#B5443B] px-6 py-3 font-bold text-white transition hover:opacity-90"
                    >
                      Send Us a Message Instead →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#FBF8F3] px-6 pb-8">
          <div
            className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#DED8CF] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(245,241,234,0.97) 0%, rgba(245,241,234,0.90) 43%, rgba(245,241,234,0.35) 72%, rgba(245,241,234,0.12) 100%), url('/hosting-cta-bg.png')",
            }}
          >
            <div className="px-8 py-10 md:px-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Ready To Get Started
              </p>

              <h2 className="mt-2 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#17213B] md:text-5xl">
                We&apos;re excited to learn about your project.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#4F5561]">
                Whether you have a clear vision or just an idea, we&apos;re here
                to help you bring it to life with a website that works for your
                business.
              </p>

              <a
                href="/see-what-we-build"
                className="mt-6 inline-flex rounded-lg bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
              >
                View Our Work →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}