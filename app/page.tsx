import Image from "next/image";
import { Logo } from "@/components/Logo";
import { QuoteForm } from "@/components/QuoteForm";

const phoneDisplay = "07471 722821";
const phoneHref = "tel:+447471722821";

const services = [
  "Emergency plumbing",
  "Emergency electrics",
  "Leaks and burst pipes",
  "Blocked sinks and drains",
  "Lighting and socket faults",
  "Toilet repairs",
  "Bathroom plumbing and electrics",
];

const testimonials = [
  {
    quote:
      "Clear communication, tidy work and a quick fix when we had a leak under the sink.",
    name: "Homeowner",
  },
  {
    quote:
      "Arrived promptly, explained the repair clearly and left everything clean.",
    name: "Property manager",
  },
  {
    quote:
      "Friendly family-run service and no fuss. We would use Great Help Plumbing & Electrics again.",
    name: "Customer",
  },
];

const faqs = [
  {
    question: "Do you handle emergency plumbing and electrical jobs?",
    answer:
      "Yes. Emergency service is available for plumbing and electrical problems, with response typically within 30 minutes to 1 hour where possible.",
  },
  {
    question: "Can I request a call back?",
    answer:
      "Yes. Use the request quote form and add your phone number with a short message.",
  },
  {
    question: "What work do you cover?",
    answer:
      "Leaks, pipework, blocked sinks and drains, toilets, taps, showers, bathroom plumbing, lighting faults, socket faults and electrical repairs.",
  },
  {
    question: "Is the site mobile friendly?",
    answer:
      "Yes. The call button and quote action stay easy to reach on mobile screens.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#062f58]/95 backdrop-blur">
        <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="focus-ring">
            <Logo />
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-white/90 md:flex">
            <a className="focus-ring hover:text-white" href="#services">
              Services
            </a>
            <a className="focus-ring hover:text-white" href="#emergency">
              Emergency
            </a>
            <a className="focus-ring hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href={phoneHref}
            className="focus-ring rounded-md bg-[#0b5ea8] px-4 py-2 text-sm font-black text-white ring-1 ring-sky-200/20 hover:bg-[#37b7ff] hover:text-[#062f58]"
          >
            {phoneDisplay}
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[680px] overflow-hidden pt-16 md:min-h-[760px]">
        <Image
          src="/images/plumbing-hero.png"
          alt="Professional plumber repairing pipework under a sink"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-mask absolute inset-0" />
        <div className="section-shell relative z-10 flex min-h-[616px] items-center py-16 md:min-h-[696px]">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-md bg-white/12 px-3 py-2 text-sm font-black uppercase tracking-[0.12em] text-sky-100 ring-1 ring-white/20">
              Family-run plumbing & electrical service
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Great Help Plumbing & Electrics
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/88 md:text-xl">
              Fast, professional help from a family-run team for leaks, pipe
              repairs, blocked drains, toilets, taps, showers, lighting faults,
              socket faults and electrical repairs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="focus-ring rounded-md bg-[#37b7ff] px-6 py-4 text-center font-black text-[#062f58] hover:bg-white"
              >
                Call {phoneDisplay}
              </a>
              <a
                href="#quote"
                className="focus-ring rounded-md bg-white px-6 py-4 text-center font-black text-[#073f73] hover:bg-[#edf7ff]"
              >
                Request quote
              </a>
            </div>
            <p className="mt-5 text-base font-bold text-sky-100">
              Emergency response typically within 30 minutes to 1 hour.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0b5ea8]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#102235] md:text-5xl">
              Plumbing and electrical help for urgent problems and planned repairs
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service}
                className="clip-corner border border-slate-200 bg-[#f8fbfd] p-6"
              >
                <div className="mb-5 grid size-11 place-items-center rounded-md bg-[#0b5ea8] text-lg font-black text-white">
                  +
                </div>
                <h3 className="text-xl font-black text-[#102235]">{service}</h3>
                <p className="mt-3 leading-7 text-[#5a6b7b]">
                  Reliable diagnosis, careful repair work and clear contact from
                  first message to completion.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="emergency" className="bg-[#edf7ff] py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_430px] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0b5ea8]">
              Fast response
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#102235] md:text-5xl">
              Emergency service when plumbing or electrics cannot wait
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5a6b7b]">
              Burst pipe, leak, blocked sink, faulty toilet, lighting fault or
              sudden electrical issue? Call for urgent help or send your details
              and we will get back to you.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["30 min", "1 hour", "7 days"].map((item, index) => (
                <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                  <p className="text-2xl font-black text-[#0b5ea8]">{item}</p>
                  <p className="mt-2 text-sm font-bold text-[#5a6b7b]">
                    {index === 0
                      ? "Typical fastest response"
                      : index === 1
                        ? "Target maximum where possible"
                        : "Emergency availability"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0b5ea8]">
                Why choose us
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#102235] md:text-5xl">
                Clean, direct and dependable family-run support
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Family-run business",
                "Emergency-first communication",
                "Tidy work in your home",
                "Clear explanations",
              ].map((item) => (
                <div key={item} className="border-l-4 border-[#37b7ff] bg-[#f8fbfd] p-5">
                  <p className="font-black text-[#102235]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#062f58] py-16 text-white md:py-24">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-sky-100">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Trusted for quick plumbing and electrical fixes
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.quote}
                className="rounded-lg bg-white/10 p-6 ring-1 ring-white/15"
              >
                <p className="leading-7 text-white/88">"{testimonial.quote}"</p>
                <p className="mt-5 font-black text-sky-100">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0b5ea8]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#102235] md:text-5xl">
              Common questions
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-lg border border-slate-200 bg-[#f8fbfd] p-5"
              >
                <summary className="cursor-pointer text-lg font-black text-[#102235]">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-[#5a6b7b]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#102235] pb-28 pt-10 text-white md:pb-10">
        <div className="section-shell flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="mt-2 text-sm text-white/70">
              Family-run emergency plumbing, electrics and general repairs.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={phoneHref}
              className="focus-ring rounded-md bg-[#37b7ff] px-5 py-3 font-black text-[#062f58] hover:bg-white"
            >
              Call {phoneDisplay}
            </a>
            <a
              href="#quote"
              className="focus-ring rounded-md bg-white px-5 py-3 font-black text-[#102235] hover:bg-[#eef6fb]"
            >
              Request quote
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-2 gap-3 md:left-auto md:right-5 md:w-72">
        <a
          href={phoneHref}
          className="focus-ring rounded-md bg-[#37b7ff] px-4 py-4 text-center text-sm font-black text-[#062f58] shadow-2xl shadow-slate-900/25 hover:bg-white"
        >
          Call
        </a>
        <a
          href="#quote"
          className="focus-ring rounded-md bg-[#073f73] px-4 py-4 text-center text-sm font-black text-white shadow-2xl shadow-slate-900/25 hover:bg-[#0b5ea8]"
        >
          Request quote
        </a>
      </div>
    </main>
  );
}
