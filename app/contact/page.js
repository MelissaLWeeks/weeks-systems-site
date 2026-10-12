"use client";

import { useState } from "react";
export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setStatus("Thank you! Your message has been sent.");
    } catch (error) {
      console.error(error);

      setStatus(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  }
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
              className="border-b-2 border-[#B5443B] pb-1 text-[#B5443B]"
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
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Get In Touch
              </p>

              <h1 className="mt-3 max-w-xl font-serif text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#17213B] md:text-6xl">
                Contact
                <br />
                Weeks Systems
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#505664]">
                We&apos;d love to hear from you. Whether you have a question
                about our services, need support, or just want to say hello,
                our team is here to help.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/contact-hero.png"
                alt="Warm Weeks Systems workspace with laptop, mug, plant, and notebook"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="border-t border-[#E4DDD4] bg-[#FBF8F3]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 lg:grid-cols-[1.2fr_0.85fr]">
            {/* FORM */}
            <div className="rounded-2xl border border-[#DED8CF] bg-white p-7">
              <h2 className="font-serif text-4xl font-bold text-[#17213B]">
                Send Us a Message
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#5B6170]">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. We typically respond within 1–2 business days.
              </p>

              <form onSubmit={handleSubmit} className="mt-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name *"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none transition placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />

                  <input
                    type="email"
                    name="email"
                    required    
                    placeholder="Your Email *"
                    className="rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none transition placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject *"
                  className="mt-4 w-full rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none transition placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Your Message *"
                  rows="8"
                  className="mt-4 w-full resize-none rounded-lg border border-[#D8D0C7] bg-white px-4 py-4 text-sm text-[#2B2D42] outline-none transition placeholder:text-[#8A8A90] focus:border-[#B5443B]"
                />

                <button
  type="submit"
  disabled={sending}
  className="mt-5 rounded-lg bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
>
  {sending ? "Sending..." : "Send Message →"}
</button>

{status && (
  <p
    className={`mt-4 text-sm font-semibold ${
      status.startsWith("Thank")
        ? "text-green-700"
        : "text-[#B5443B]"
    }`}
  >
    {status}
  </p>
)}
              </form>
            </div>

            {/* CONTACT OPTIONS */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-2xl text-[#B5443B]">
                    ✉
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                      General Inquiries
                    </h3>

                    <p className="mt-2 text-base leading-7 text-[#5B6170]">
                      Have a question about our services, partnerships, or
                      anything else? We&apos;d love to hear from you.
                    </p>

                    <a
                      href="mailto:hello@weekssystems.com"
                      className="mt-3 inline-block font-semibold text-[#B5443B] underline"
                    >
                      hello@weekssystems.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#DED8CF] bg-white p-6">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F3E6DD] text-2xl text-[#B5443B]">
                    ◉
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#17213B]">
                      Support
                    </h3>

                    <p className="mt-2 text-base leading-7 text-[#5B6170]">
                      Need help with an existing website or hosting account? Our
                      support team is here for you.
                    </p>

                    <a
                      href="mailto:support@weekssystems.com"
                      className="mt-3 inline-block font-semibold text-[#B5443B] underline"
                    >
                      support@weekssystems.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F3E6DD] p-6">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFDACB] text-2xl text-[#B5443B]">
                    ↗
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold leading-tight text-[#17213B]">
                      Ready to start a website project?
                    </h3>

                    <p className="mt-2 text-base leading-7 text-[#5B6170]">
                      If you&apos;re ready to build a new website for your
                      business, click the button below to get started.
                    </p>

                    <a
                      href="/build-my-website"
                      className="mt-5 inline-flex rounded-lg bg-[#B5443B] px-6 py-3 font-bold text-white transition hover:opacity-90"
                    >
                      Build My Website →
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
                "linear-gradient(90deg, rgba(245,241,234,0.97) 0%, rgba(245,241,234,0.90) 40%, rgba(245,241,234,0.35) 70%, rgba(245,241,234,0.12) 100%), url('/hosting-cta-bg.png')",
            }}
          >
            <div className="px-8 py-10 md:px-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#B5443B]">
                Let&apos;s Build Something Great
              </p>

              <h2 className="mt-2 max-w-xl font-serif text-4xl font-bold leading-tight text-[#17213B] md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#4F5561]">
                We build practical and affordable websites and digital
                solutions for small businesses, independent professionals, and
                growing brands.
              </p>

              <a
                href="/websites"
                className="mt-6 inline-flex rounded-lg bg-[#B5443B] px-7 py-4 font-bold text-white transition hover:opacity-90"
              >
                View Our Services →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}