"use client";
import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [maintenanceProblem, setMaintenanceProblem] = useState("");

  const handleSubmit = async () => {
  const { error } = await supabase
      .from("feedback")
      .insert([
        {
          name,
          email,
          property_type: propertyType,
          maintenance_problem: maintenanceProblem,
        },
      ]);

    if (error) {
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Thank you! Your feedback has been submitted.");

    setName("");
    setEmail("");
    setPropertyType("");
    setMaintenanceProblem("");
  };

  return (
    <><main className="min-h-screen bg-[#0B1F3B] text-white">
      {/* Navigation */}
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-2xl font-bold tracking-tight">
          FIXIQO<span className="text-[#FF6A00]">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#how-it-works" className="transition hover:text-white">
            How It Works
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#property-care" className="transition hover:text-white">
            Property Care
          </a>
          <a href="#feedback" className="transition hover:text-white">
            Give Feedback
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#feedback"
            className="rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
          >
            Join Early Access
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Open menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute right-6 top-20 z-50 w-56 rounded-2xl border border-white/10 bg-[#0B1F3B] p-3 shadow-xl md:hidden">
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Services
            </a>

            <a
              href="#property-care"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Property Care
            </a>

            <a
              href="#feedback"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Give Feedback
            </a>
          </div>
        )}


      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            {/* Location badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF6A00]" />
              Building in Pune · Starting with Hinjewadi
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your Property.
              <br />
              <span className="text-[#FF6A00]">
                Maintained.
              </span>
              <br />
              Without the Hassle.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              From an urgent repair to everyday maintenance, Fixiqo is building
              a smarter way to manage the people, services and work that keep
              properties running.
            </p>

            {/* Positioning */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                On-demand services
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Recurring maintenance
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Digital workforce
              </span>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#feedback"
                className="rounded-full bg-[#FF6A00] px-7 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85f00]"
              >
                Join Early Access
              </a>

              <a
                href="#feedback"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Share Your Problem
              </a>
            </div>

            {/* Trust statement */}
            <p className="mt-8 text-sm text-white/40">
              We're building Fixiqo with property owners, residents,
              businesses and maintenance professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="how-it-works"
        className="border-t border-[#0B1F3B]/10 bg-white py-24 text-[#0B1F3B]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
              The problem
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Every property has maintenance problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/65">
              But managing them often means chasing workers, calling different
              vendors and trying to keep track of everything manually.
            </p>
          </div>

          {/* Problem cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <div className="group rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3B] text-xl text-white">
                👷
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Workers come and go.
              </h3>

              <p className="mt-3 leading-7 text-[#2B2B2B]/65">
                When a regular electrician, plumber, cleaner or maintenance worker
                leaves, finding a reliable replacement becomes someone else's
                problem.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6A00] text-xl text-white">
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Small problems become urgent.
              </h3>

              <p className="mt-3 leading-7 text-[#2B2B2B]/65">
                A leaking pipe, electrical fault or broken AC can quickly disrupt a
                home, office, clinic, hotel or entire building.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3B] text-xl text-white">
                📞
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Too many people to coordinate.
              </h3>

              <p className="mt-3 leading-7 text-[#2B2B2B]/65">
                Different workers, different vendors, different phone numbers and
                endless WhatsApp messages make maintenance difficult to manage.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6A00] text-xl text-white">
                📋
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Maintenance gets lost in the noise.
              </h3>

              <p className="mt-3 leading-7 text-[#2B2B2B]/65">
                Attendance, completed work, repairs, parts, payments and maintenance
                history are often scattered across registers, spreadsheets and
                conversations.
              </p>
            </div>
          </div>

          {/* Transition statement */}
          <div className="mt-16 rounded-3xl bg-[#0B1F3B] p-8 text-white sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
                  Our approach
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Property maintenance should be predictable, trackable and easy to
                  manage.
                </h3>
              </div>

              <div className="shrink-0 text-4xl">→</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#0B1F3B] px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
            On-demand services
          </p>

          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              When something breaks,
              <span className="text-[#FF6A00]"> Fixiqo gets it moving.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Request a service, get the right professional assigned, track the work
              and get the issue resolved — without the usual coordination headache.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: "⚡",
                title: "Electrical",
                text: "Repairs, switches, wiring and electrical issues.",
              },
              {
                icon: "🔧",
                title: "Plumbing",
                text: "Leaks, fittings, drainage and plumbing repairs.",
              },
              {
                icon: "❄️",
                title: "AC",
                text: "Servicing, repairs and everyday AC maintenance.",
              },
              {
                icon: "🧹",
                title: "Cleaning",
                text: "Regular, deep and property-specific cleaning.",
              },
              {
                icon: "🛠️",
                title: "General Maintenance",
                text: "Everyday fixes that keep your property running.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6A00] text-xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                ["01", "Request", "Tell us what needs fixing."],
                ["02", "Assign", "The right professional is assigned."],
                ["03", "Track", "Follow the job from start to finish."],
                ["04", "Complete", "Get the work done and recorded."],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <p className="text-sm font-bold text-[#FF6A00]">{number}</p>
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="property-care"
        className="bg-white px-6 py-24 text-[#0B1F3B] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
              Property care
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One partner for the
              <span className="text-[#FF6A00]"> everyday running of your property.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/65">
              For societies, offices and businesses that need more than a one-time
              repair, Fixiqo is building recurring maintenance contracts with
              managed workforce, work orders and ongoing support.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dedicated workforce",
                text: "Access the right maintenance professionals for your property instead of coordinating with multiple vendors.",
              },
              {
                title: "Preventive maintenance",
                text: "Keep routine maintenance on schedule before small issues turn into expensive problems.",
              },
              {
                title: "Emergency support",
                text: "When something unexpected happens, get a structured way to raise and manage urgent work.",
              },
              {
                title: "Work orders",
                text: "Every maintenance request can be assigned, tracked and recorded from start to completion.",
              },
              {
                title: "Attendance & performance",
                text: "Create visibility into workforce attendance, assigned work and completed tasks.",
              },
              {
                title: "Maintenance history",
                text: "Build a digital record of repairs, recurring work, assets and maintenance activity over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 h-1 w-10 rounded-full bg-[#FF6A00]" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#2B2B2B]/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#0B1F3B] p-8 text-white sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
                  Built for properties
                </p>

                <h3 className="mt-3 max-w-3xl text-2xl font-bold sm:text-3xl">
                  Your property gets a system for maintenance — not just another
                  vendor phone number.
                </h3>
              </div>

              <a
                href="#feedback"
                className="shrink-0 rounded-full bg-[#FF6A00] px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85f00]"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#0B1F3B] px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
                Digital workforce
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Make maintenance work
                <span className="text-[#FF6A00]"> visible.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Fixiqo is building a digital layer for the people who keep
                properties running — connecting workers, properties and actual work
                in one place.
              </p>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Attendance, skills, assigned tasks, completed work and performance
                can become part of a transparent maintenance system.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Worker profiles",
                "Skills & verification",
                "Attendance",
                "Assigned work",
                "Completed tasks",
                "Performance history",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6A00] text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-16 rounded-3xl border border-[#FF6A00]/20 bg-[#FF6A00]/10 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
              The principle
            </p>

            <h3 className="mt-3 max-w-4xl text-2xl font-bold sm:text-3xl">
              Work should be measurable. Performance should be visible.
              Compensation should be transparent.
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-[#0B1F3B] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
                Property passport
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Every property has a
                <span className="text-[#FF6A00]"> maintenance story.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#2B2B2B]/65">
                Fixiqo is building a digital record for the work that keeps a
                property running — so important maintenance information doesn't get
                lost over time.
              </p>

              <p className="mt-5 max-w-xl leading-7 text-[#2B2B2B]/65">
                Repairs, recurring work, assets and service history can live
                together in one place.
              </p>
            </div>

            <div className="rounded-3xl border border-[#0B1F3B]/10 bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-[#0B1F3B]/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
                    Property record
                  </p>
                  <h3 className="mt-2 text-xl font-bold">Maintenance history</h3>
                </div>

                <div className="rounded-xl bg-[#0B1F3B] px-3 py-2 text-xs font-semibold text-white">
                  FIXIQO
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Electrical", "Last serviced · 12 Aug 2026"],
                  ["Air Conditioning", "Last serviced · 28 Jul 2026"],
                  ["Plumbing", "Last repaired · 04 Jun 2026"],
                  ["General Maintenance", "3 completed work orders"],
                ].map(([category, detail]) => (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-2xl border border-[#0B1F3B]/10 bg-white p-4"
                  >
                    <div>
                      <p className="font-semibold">{category}</p>
                      <p className="mt-1 text-sm text-[#2B2B2B]/55">{detail}</p>
                    </div>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A00]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-serve"
        className="bg-white py-24 text-[#0B1F3B]"
      >
        <div className="mx-auto max-w-7xl px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6A00]">
              WHO WE SERVE
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Built for the places
              <span className="text-[#FF6A00]"> people depend on.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              From homes and housing societies to offices and businesses,
              Fixiqo is being built for properties that need reliable
              maintenance — not endless vendor coordination.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Homes",
                description: "Everyday repairs and maintenance when you need them.",
              },
              {
                title: "Housing Societies",
                description: "Recurring maintenance, workforce and work-order management.",
              },
              {
                title: "Offices",
                description: "Keep workplace infrastructure running without the coordination headache.",
              },
              {
                title: "Clinics & Hospitals",
                description: "Structured maintenance for spaces where reliability matters.",
              },
              {
                title: "Hotels & Rentals",
                description: "Manage repairs and recurring maintenance across properties.",
              },
              {
                title: "Shops & Restaurants",
                description: "Keep essential equipment and infrastructure running.",
              },
              {
                title: "Schools & Institutions",
                description: "Organise ongoing maintenance across larger properties.",
              },
              {
                title: "Businesses",
                description: "One system for recurring maintenance and urgent work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition hover:-translate-y-1 hover:border-[#FF6A00]/40"
              >
                <div className="mb-6 h-1 w-10 rounded-full bg-[#FF6A00]" />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section
        id="feedback"
        className="bg-[#0B1F3B] px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

            {/* Left side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
                Help us build Fixiqo
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Tell us what
                <span className="text-[#FF6A00]"> maintenance looks like </span>
                for you.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Fixiqo is being built with real property owners, residents,
                businesses and maintenance professionals.
              </p>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Tell us what currently frustrates you about maintenance,
                what you would want Fixiqo to solve, and what would make
                you actually use it.
              </p>
            </div>

            {/* Feedback form */}
            <div className="rounded-3xl bg-white p-7 text-[#0B1F3B] shadow-xl sm:p-9">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3B]/10 px-4 py-3 outline-none transition focus:border-[#FF6A00]" />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3B]/10 px-4 py-3 outline-none transition focus:border-[#FF6A00]" />
                </div>

              </div>

              <div className="mt-5">
                <label className="text-sm font-semibold">
                  What type of property do you manage/use?
                </label>

                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#0B1F3B]/10 bg-white px-4 py-3 outline-none focus:border-[#FF6A00]"
                >
                  <option>Select one</option>
                  <option>Home</option>
                  <option>Housing Society</option>
                  <option>Office</option>
                  <option>Shop / Restaurant</option>
                  <option>Hotel / Rental</option>
                  <option>Clinic / Hospital</option>
                  <option>School / Institution</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="text-sm font-semibold">
                  What is your biggest maintenance problem?
                </label>

                <textarea
                  rows={4}
                  value={maintenanceProblem}
                  onChange={(e) => setMaintenanceProblem(e.target.value)}
                  placeholder="Tell us what currently causes the most frustration..."
                  className="mt-2 w-full rounded-xl border border-[#0B1F3B]/10 px-4 py-3 outline-none transition focus:border-[#FF6A00]" />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 w-full rounded-full bg-[#FF6A00] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85f00]"
              >
                Share Feedback
              </button>

              <p className="mt-4 text-center text-xs text-[#2B2B2B]/50">
                We’re building Fixiqo based on real problems, not assumptions.
              </p>

            </div>
          </div>
        </div>
      </section>

    </main><footer className="border-t border-white/10 bg-[#08182E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold tracking-tight">
                FIXIQO<span className="text-[#FF6A00]">.</span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                Property maintenance, without the hassle.
                From on-demand services to recurring property care,
                Fixiqo is building a smarter way to keep properties running.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Explore
              </h3>

              <div className="mt-5 space-y-4 text-sm text-white/70">
                <a href="#how-it-works" className="block transition hover:text-white">
                  How It Works
                </a>
                <a href="#services" className="block transition hover:text-white">
                  Services
                </a>
                <a href="#property-care" className="block transition hover:text-white">
                  Property Care
                </a>
                <a href="#feedback" className="block transition hover:text-white">
                  Give Feedback
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Company
              </h3>

              <div className="mt-5 space-y-4 text-sm text-white/70">
                <a href="#feedback" className="block transition hover:text-white">
                  Contact
                </a>
                <a href="#feedback" className="block transition hover:text-white">
                  Early Access
                </a>
                <a
                  href="mailto:info@fixiqo.co.in"
                  className="block transition hover:text-white"
                >
                  info@fixiqo.co.in
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Connect
              </h3>

              <div className="mt-5 space-y-4 text-sm text-white/70">
                <a
                  href="https://www.instagram.com/justfixiqo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://fixiqo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  fixiqo.in
                </a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Fixiqo. All rights reserved.</p>

            <div className="flex gap-6">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}