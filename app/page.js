"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section (white) - new layout: three logos, two-column content with divider on desktop */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="hero-title"
      >
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Top logos: left, center, right */}
          <div
            className="-mt-6 mb-4 flex items-start justify-between"
            role="banner"
          >
            <div className="flex-1 flex justify-start">
              <Image
                src="/logos/bits-logo.png"
                alt="BITS Pilani Hyderabad Campus logo"
                width={200}
                height={64}
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                priority
                aria-describedby="bits-logo-description"
              />
              <span id="bits-logo-description" className="sr-only">
                BITS Pilani Hyderabad Campus is a hosting institution for the
                symposium
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <Image
                src="/logos/symposium-logo.png"
                alt="Accessible by Design symposium logo"
                width={320}
                height={120}
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                priority
                aria-describedby="symposium-logo-description"
              />
              <p
                className="mt-2 text-base sm:text-lg italic text-[#000000]"
                id="symposium-logo-description"
              >
                AccessQuity
              </p>
            </div>

            <div className="flex-1 flex justify-end">
              <Image
                src="/logos/rae-logo.png"
                alt="Royal Academy of Engineering logo"
                width={200}
                height={64}
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                priority
                aria-describedby="rae-logo-description"
              />
              <span id="rae-logo-description" className="sr-only">
                Royal Academy of Engineering is a supporting organization for
                the symposium
              </span>
            </div>
          </div>

          {/* Main two-column hero content. On mobile this stacks; divider hidden */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Left: large title and date */}
            <div className="lg:col-span-1 text-left">
              <h1
                id="hero-title"
                className="text-balance text-6xl font-bold tracking-tight text-[#000000] sm:text-7xl lg:text-8xl"
              >
                Accessible by Design
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-[#000000] italic">
                a two-day international symposium
              </p>
              <div aria-labelledby="event-details-title">
                <h2 id="event-details-title" className="sr-only">
                  Event Details
                </h2>
                <p className="mt-4 text-3xl sm:text-4xl font-semibold text-[#000000]">
                  <strong>15-16 October, 2025</strong>
                </p>
                <p className="text-lg sm:text-xl text-[#000000]">
                  Venue: Auditorium
                </p>
              </div>
            </div>

            {/* Divider visible from md up (solid black) */}
            <div className="hidden md:flex items-stretch justify-center">
              <div
                className="bg-black opacity-100 my-6"
                style={{ width: "2px", height: "220px" }}
                aria-hidden="true"
              ></div>
            </div>

            {/* Right: place the two buttons here (replaces 'organized by') */}
            <div
              className="lg:col-span-1 lg:text-right lg:-ml-8"
              aria-labelledby="supported-by"
            >
              <h2 id="supported-by" className="sr-only">
                Supported By
              </h2>
              <p className="text-xl md:text-2xl lg:text-2xl leading-relaxed text-[#000000] max-w-[52ch]">
                supported by the Department of Science, Innovation, and
                Technology&#39;s International Science Partnerships Fund (ISPF)
                via the <strong>Royal Academy of Engineering</strong>, United
                Kingdom, under the Frontiers Champions scheme.
              </p>
            </div>
          </div>

          {/* Bottom-centered buttons across the hero */}
          <div className="mt-8 flex justify-center" aria-label="Quick links">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule"
                className="inline-block rounded-lg bg-[#000000] px-10 py-4 text-lg font-semibold text-[#ffffff] shadow-lg transition-all hover:bg-[#333333] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                aria-label="View the symposium schedule"
              >
                View Schedule
              </a>
              <a
                href="#register"
                className="inline-block rounded-lg border border-[#000000] px-10 py-4 text-lg font-semibold text-[#000000] hover:bg-[#000000]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                aria-label="Register for the symposium"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Symposium Section */}
      <section
        id="about"
        className="py-20 bg-alt-dark"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2
                id="about-heading"
                className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-6"
              >
                About the Symposium
              </h2>
              <p
                className="text-2xl font-semibold italic text-[#000000] mb-8"
                aria-labelledby="about-heading"
              >
                Towards disability equity in tech futures
              </p>
            </div>

            {/* Main content in single column for better readability */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e6e6]">
                <p className="text-lg leading-relaxed text-[#000000] mb-8">
                  Assistive technology (AT) ensures access and dignity to people
                  with and without disabilities. Specifically, assistive
                  technology ensures full and equal participation of people with
                  disabilities by fostering inclusion, removing physical and
                  social barriers, facilitating social justice, and enabling the
                  exercise of human rights. However, despite significant
                  technological advancements, AT in India faces numerous
                  barriers and challenges that hinder its widespread adoption.
                  Lack of awareness, limited information, affordability issues,
                  challenges in research, development, and manufacturing all
                  contribute to significant hurdles. While India has a
                  UNCRPD-compliant law, in the RPD Act 2016, which ensures
                  justice and equitable participation for people with
                  disabilities, poor implementation of access mandates prevents
                  AT from being a tool of justice.
                </p>

                <p className="text-lg leading-relaxed text-[#000000]">
                  <span className="font-bold text-xl">
                    Accessible by Design
                  </span>
                  , a two-day symposium at BITS-Pilani Hyderabad Campus, intends
                  to highlight the development of assistive technology in India
                  to foster a more inclusive, equitable and empowered society
                  for people with disabilities. Knowledge and leadership of
                  persons with disabilities will be centered as the shapers and
                  co-creators of accessible and just design futures.
                </p>
              </div>
            </div>

            {/* Events and Participants in clean grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Events Section */}
              <div
                className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e6e6]"
                aria-labelledby="events-heading"
              >
                <h3
                  id="events-heading"
                  className="text-3xl font-bold text-[#000000] mb-8 text-center"
                >
                  Events
                </h3>
                <ul className="space-y-6" aria-label="List of symposium events">
                  <li className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Thematic panel discussions
                    </span>
                  </li>
                  <li className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Action plan and recommendation workshops
                    </span>
                  </li>
                  <li className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Technology showcase - Display by AT companies and
                      innovators
                    </span>
                  </li>
                </ul>
              </div>

              {/* Participants Section */}
              <div
                className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e6e6]"
                aria-labelledby="participants-heading"
              >
                <h3
                  id="participants-heading"
                  className="text-3xl font-bold text-[#000000] mb-6 text-center"
                >
                  Participants
                </h3>
                <p className="text-lg text-[#000000] mb-8 text-center">
                  This symposium invites a diverse community of participants
                  from across the assistive technology ecosystem, including:
                </p>
                <ul
                  className="grid grid-cols-1 gap-3"
                  aria-label="List of participant types"
                >
                  {[
                    "Disability advocates",
                    "Designers",
                    "Tech developers",
                    "Accessibility professionals",
                    "Policymakers and Legal practitioners",
                    "Educators and Researchers",
                    "Industry leaders",
                    "DPOs and NGOs",
                  ].map((participant, index) => (
                    <li
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg text-center"
                    >
                      <span className="text-base text-[#000000] font-medium">
                        {participant}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section
        id="themes"
        className="py-20 bg-white"
        aria-labelledby="themes-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2
              id="themes-heading"
              className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6"
            >
              Themes
            </h2>
            <p className="text-xl leading-relaxed text-[#000000]">
              This symposium is critically structured thematically around the
              four canonical stages of design thinking:{" "}
              <span className="font-semibold">
                Empathize, Define, Ideate, and Prototype
              </span>
              , with the objectives listed below.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              role="list"
              aria-label="Symposium themes"
            >
              {/* Theme 1 */}
              <div
                className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]"
                role="listitem"
                aria-labelledby="theme-1-heading"
              >
                <h3
                  id="theme-1-heading"
                  className="text-xl font-bold text-[#000000] mb-3"
                >
                  Theme 1: Empathize
                </h3>
                <p
                  className="text-lg font-semibold text-[#000000] mb-4 italic"
                  aria-labelledby="theme-1-heading"
                >
                  Whose Empathy? Whose Experience?
                </p>
                <p className="text-base leading-relaxed text-[#000000]">
                  To foster interdisciplinary dialogue between different
                  stakeholders of Assistive Technology and go beyond tokenism by
                  recognising the potential of disabled people as
                  user-designers.
                </p>
              </div>

              {/* Theme 2 */}
              <div
                className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]"
                role="listitem"
                aria-labelledby="theme-2-heading"
              >
                <h3
                  id="theme-2-heading"
                  className="text-xl font-bold text-[#000000] mb-3"
                >
                  Theme 2: Define
                </h3>
                <p
                  className="text-lg font-semibold text-[#000000] mb-4 italic"
                  aria-labelledby="theme-2-heading"
                >
                  Defining Problems or Defining People?
                </p>
                <p className="text-base leading-relaxed text-[#000000]">
                  To discuss the relevance of user-centric design in Assistive
                  Technology, ensuring solutions that are accessible by going
                  beyond body-centric solutions to environmental adaptations.
                </p>
              </div>

              {/* Theme 3 */}
              <div
                className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]"
                role="listitem"
                aria-labelledby="theme-3-heading"
              >
                <h3
                  id="theme-3-heading"
                  className="text-xl font-bold text-[#000000] mb-3"
                >
                  Theme 3: Ideate
                </h3>
                <p
                  className="text-lg font-semibold text-[#000000] mb-4 italic"
                  aria-labelledby="theme-3-heading"
                >
                  Whose Ideas Count?
                </p>
                <p className="text-base leading-relaxed text-[#000000]">
                  To identify emerging trends, challenges, and future directions
                  in Assistive Technology in the form of design fictions and
                  critiques that are disability centric.
                </p>
              </div>

              {/* Theme 4 */}
              <div
                className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]"
                role="listitem"
                aria-labelledby="theme-4-heading"
              >
                <h3
                  id="theme-4-heading"
                  className="text-xl font-bold text-[#000000] mb-3"
                >
                  Theme 4: Prototype
                </h3>
                <p
                  className="text-lg font-semibold text-[#000000] mb-4 italic"
                  aria-labelledby="theme-4-heading"
                >
                  Accessible to Whom? Legible to What?
                </p>
                <p className="text-base leading-relaxed text-[#000000]">
                  To examine the concepts of accessibility and legibility in the
                  design of Assistive Technology by reflecting on inaccessible
                  prototyping practices and disability-led prototyping
                  processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Sessions Section */}
      <section
        id="keynote-sessions"
        className="py-20 bg-alt-dark"
        aria-labelledby="keynote-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl">
            <h2
              id="keynote-heading"
              className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-12 text-center"
            >
              Keynote Sessions
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
              aria-label="Keynote speakers"
            >
              {/* Plenary 1 */}
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                role="listitem"
                aria-labelledby="keynote-1-heading"
              >
                {/* Colorful header */}
                <div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"
                  aria-hidden="true"
                ></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 1
                    </span>
                  </div>

                  <h3
                    id="keynote-1-heading"
                    className="text-2xl font-bold text-white mt-6 mb-2"
                  >
                    Prof. Hemachandran Karah
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Director, Accessibility Research Centre, IIT Madras
                  </p>

                  <div className="mb-6 flex-grow">
                    <p className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;End-usage as Craftsmanship and Engineering:
                      Challenges and Opportunities in Co-creating Assistive
                      Technology&rdquo;
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                    <div
                      className="flex items-center"
                      aria-label="Time: 10:15 PM"
                    >
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">10:15 pm</span>
                    </div>
                    <div
                      className="flex items-center"
                      aria-label="Date: October 15, 2025"
                    >
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">15 October, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plenary 2 */}
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                role="listitem"
                aria-labelledby="keynote-2-heading"
              >
                {/* Colorful header */}
                <div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"
                  aria-hidden="true"
                ></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 2
                    </span>
                  </div>

                  <h3
                    id="keynote-2-heading"
                    className="text-2xl font-bold text-white mt-6 mb-2"
                  >
                    Prof. Amita Dhanda
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Professor of Law and Director, Centre for Disability
                    Studies, NALSAR University of Law, Hyderabad
                  </p>

                  <div className="mb-6 flex-grow">
                    <p className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;Why the Right to Accessibility Needs the Force of
                      the Law&rdquo;
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">04:00 pm</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">15 October, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plenary 3 */}
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                role="listitem"
                aria-labelledby="keynote-3-heading"
              >
                {/* Colorful header */}
                <div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"
                  aria-hidden="true"
                ></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 3
                    </span>
                  </div>

                  <h3
                    id="keynote-3-heading"
                    className="text-2xl font-bold text-white mt-6 mb-2"
                  >
                    Prof. Shilpa Das
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Head, Faculty of Interdisciplinary Design Studies, National
                    Institute of Design, Ahmedabad
                  </p>

                  <div className="mb-6 flex-grow">
                    <p className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;From Assistive Design to Equitable Systems: The
                      Disability-Led Mandate for Design Futures&rdquo;
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                    <div
                      className="flex items-center"
                      aria-label="Time: 12:30 PM"
                    >
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">12:30 pm</span>
                    </div>
                    <div
                      className="flex items-center"
                      aria-label="Date: October 16, 2025"
                    >
                      <svg
                        className="w-5 h-5 text-sky-300 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">16 October, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-[#000000] font-medium">
                Don&apos;t miss these insightful keynote sessions by leading
                experts in accessibility and inclusive design!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScheduleComponent />
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-8">
              Register
            </h2>
            <p className="text-lg text-[#000000] mb-10">
              Register for the symposium using the below Google form
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_CPf5PjX11DR7Ym61oE2RSYrdrR9rx3Y2OR8UL9yAot5Iag/viewform?usp=sharing&ouid=111816030110154936006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#000000] px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
            >
              Register Now
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
              Organizers
            </h2>

            <div className="text-center mb-12">
              <p className="text-lg text-[#000000] mb-4">Organized by</p>
              <p className="text-2xl font-bold text-[#000000] mb-2">
                Department of Humanities &amp; Social Sciences
              </p>
              <p className="text-lg text-[#000000] mb-4">
                in collaboration with
              </p>
              <p className="text-2xl font-bold text-[#000000]">
                Department of Computer Science &amp; Information Systems
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#000000] mb-8">
                Organizing Team
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-alt-dark border border-[#e6e6e6] p-6 rounded-lg text-left">
                  <p className="font-bold text-[#000000] mb-1">
                    Dr. Sarbani Banerjee Belur
                  </p>
                  <p className="text-[#000000]">
                    Department of Humanities and Social Sciences
                  </p>
                </div>
                <div className="bg-alt-dark border border-[#e6e6e6] p-6 rounded-lg text-left">
                  <p className="font-bold text-[#000000] mb-1">
                    Dr. Shilpaa Anand
                  </p>
                  <p className="text-[#000000]">
                    Department of Humanities and Social Sciences
                  </p>
                </div>
                <div className="bg-alt-dark border border-[#e6e6e6] p-6 rounded-lg text-left">
                  <p className="font-bold text-[#000000] mb-1">
                    Dr. Dipanjan Chakraborty
                  </p>
                  <p className="text-[#000000]">
                    Department of Computer Sciences and Information Systems
                  </p>
                </div>
                <div className="bg-alt-dark border border-[#e6e6e6] p-6 rounded-lg text-left">
                  <p className="font-bold text-[#000000] mb-1">
                    Hrittika Bhowmick
                  </p>
                  <p className="text-[#000000]">
                    Department of Humanities and Social Sciences and
                  </p>
                  <p className="text-[#000000]">
                    Department of Computer Sciences and Information Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-12">
              Sponsors
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#e6e6e6] text-center">
              <p className="text-xl font-semibold text-[#000000]">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ScheduleComponent() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold tracking-tight text-[#000000] text-center mb-12">
        Schedule
      </h2>

      {/* Tab Navigation */}
      <div
        role="tablist"
        aria-label="Schedule days"
        className="flex justify-center mb-12"
      >
        <div className="bg-alt-dark rounded-lg p-1">
          <button
            id="day1-tab"
            role="tab"
            aria-selected={activeDay === 1}
            aria-controls="day1-panel"
            onClick={() => setActiveDay(1)}
            className={`px-8 py-3 rounded-md font-semibold transition-all ${
              activeDay === 1
                ? "bg-[#000000] text-white"
                : "text-[#000000] hover:bg-white/50"
            }`}
          >
            Day 1 · 15 Oct 2025
          </button>
          <button
            id="day2-tab"
            role="tab"
            aria-selected={activeDay === 2}
            aria-controls="day2-panel"
            onClick={() => setActiveDay(2)}
            className={`px-8 py-3 rounded-md font-semibold transition-all ${
              activeDay === 2
                ? "bg-[#000000] text-white"
                : "text-[#000000] hover:bg-white/50"
            }`}
          >
            Day 2 · 16 Oct 2025
          </button>
        </div>
      </div>

      {/* Day 1 */}
      {activeDay === 1 && (
        <div
          id="day1-panel"
          role="tabpanel"
          aria-labelledby="day1-tab"
          className="space-y-6"
        >
          <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6]">
            <h4 className="text-2xl font-bold text-[#000000] mb-2">
              Inaugural Session
            </h4>
            <p className="text-base text-[#000000] font-semibold">
              Time: 09:30 to 11:00 a.m.
            </p>
            <p className="mt-3 text-base text-[#000000]">
              Welcome and symposium inauguration.
            </p>
            <p className="mt-2 text-base text-[#000000]">
              <strong>Chief Guest:</strong> Prof. Soumyo Mukherji, Director,
              BITS-Pilani Hyderabad Campus
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-4">
              Morning Sessions
            </h4>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Plenary 1
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 09:30 to 11:00 a.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Session Title: End-usage as Craftsmanship and Engineering:
                Challenges and Opportunities in Co-creating Assistive Technology
              </p>
              <p className="text-base text-[#000000] mb-2">
                <strong>Speaker:</strong> Prof. Hemachandran Karah — Director,
                Accessibility Research Centre, IIT Madras
              </p>
              <p className="text-base text-[#000000]">
                <strong>Chair:</strong> Prof. Dipanjan Chakraborty
              </p>
            </div>

            <div className="p-6 rounded-xl mb-6 border-2 border-dashed border-[#e6e6e6] bg-white text-center">
              <h5 className="text-lg font-semibold text-[#000000] italic mb-1">
                Break
              </h5>
              <p className="text-sm text-[#444444]">
                11:00 a.m. — 11:30 a.m. (30 minutes)
              </p>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 1 — Empathize
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 11:30 a.m. to 1:00 p.m.
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme: Empathize — Whose empathy? Whose experience?
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme Description: To foster interdisciplinary dialogue between
                different stakeholders of Assistive Technology and go beyond
                tokenism by recognising the potential of disabled people as
                user-designers.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Bidisha Banerjee, Department of Humanities and
                Social Sciences, BITS-Pilani Hyderabad Campus
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Presenters:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  R. Nitin Sinha — Research Scholar, Department of Design, IIT
                  Hyderabad
                </li>
                <li>
                  Arya Moitra — Independent Scholar (M.A. English, Jadavpur
                  University, Class of 2025)
                </li>
                <li>Ananya Thakur — Department of Design, IIT Hyderabad</li>
                <li>
                  Raghavendra Satish Peri — Founder, HelloA11y.com; Digital
                  Accessibility Evangelist
                </li>
                <li>
                  Dr. Karthika J — Post-Doctoral Researcher, Accessibility
                  Research Centre, IIT Madras
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl mb-6 border-2 border-dashed border-[#e6e6e6] bg-white text-center">
              <h5 className="text-lg font-semibold text-[#000000] italic mb-1">
                Lunch
              </h5>
              <p className="text-sm text-[#444444]">
                1:00 p.m. — 2:00 p.m. • Auditorium Foyer
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-4">
              Afternoon Sessions
            </h4>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Plenary 2
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 2:00 to 2:45 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Session Title: &apos;From Assistive Design to Equitable Systems:
                The Disability-Led Mandate for Design Futures&apos;
              </p>
              <p className="text-base text-[#000000] mb-1">
                <strong>Speaker:</strong> Prof. Shilpa Das — Head, Faculty of
                Interdisciplinary Design Studies, National Institute of Design,
                Ahmedabad
              </p>
              <p className="text-base text-[#000000]">
                <strong>Chair:</strong> Professor Lavanya Suresh, Department of
                Humanities and Social Sciences, BITS-Pilani Hyderabad Campus
              </p>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 2 — Define
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 2:45 to 4:15 p.m.
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme: Define — Defining Problems or Defining People?
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme Description: To discuss the relevance of user-centric
                design in Assistive Technology, ensuring solutions that are
                accessible by going beyond body-centric solutions to
                environmental adaptations.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Meghana Rao, Azim Premji University, Bengaluru
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Participants:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  Neha Manik Jadhav — Product Manager, Helix Opportunity and
                  Progressive Accessibility Solutions
                </li>
                <li>
                  Amar Pawar — PhD Research Candidate, Centre for Political
                  Studies, JNU, New Delhi
                </li>
                <li>
                  Manasi Panwar — PhD Research Scholar, Department of Humanities
                  and Social Sciences, BITS Pilani
                </li>
                <li>Pavan Muntha — CEO, Swadhikaar</li>
                <li>
                  Dr. Viswesh Sekhar — Advocate (High Court of Karnataka) and
                  Disability Rights Professional
                </li>
              </ul>
            </div>

            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-1">Break</h5>
              <p className="text-base text-[#000000]">
                Duration: 30 minutes — 4:15 to 4:30 p.m.
              </p>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Plenary 3
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 4:30 to 5:15 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Session Title: &quot;Why the Right to Accessibility Needs the
                Force of the Law&quot;
              </p>
              <p className="text-base text-[#000000] mb-1">
                <strong>Speaker:</strong> Prof. Amita Dhanda — Professor of Law
                & Director, Centre for Disability Studies, NALSAR University of
                Law, Hyderabad
              </p>
              <p className="text-base text-[#000000]">
                <strong>Chair:</strong> Professor T. Vijay Kumar, Department of
                Humanities and Social Sciences, BITS-Pilani Hyderabad Campus
              </p>
            </div>

            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-1">
                Director&apos;s Dinner
              </h5>
              <p className="text-base text-[#000000]">
                Time: 07:00 p.m. — Venue: Auditorium Foyer
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Day 2 */}
      {activeDay === 2 && (
        <div
          id="day2-panel"
          role="tabpanel"
          aria-labelledby="day2-tab"
          className="space-y-6"
        >
          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-4">
              Morning Sessions
            </h4>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 3 — Ideate
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 9:30 to 11:00 a.m.
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme: Ideate — Whose Ideas Count? (To identify emerging trends,
                challenges, and future directions in Assistive Technology in the
                form of design fictions and critiques that are disability
                centric.)
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Sarbani Banerjee-Belur, Department of
                Humanities and Social Sciences, BITS-Pilani Hyderabad Campus
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Presenters:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  Prof. Tony Kurian — Assistant Professor, Social Science group,
                  School of Arts and Sciences, Azim Premji University, Bengaluru
                </li>
                <li>
                  Dr. Bubai Bag — Sruti Disability Rights Centre, Kolkata;
                  Assistant Professor, Bagnan College
                </li>
                <li>
                  Samya Brata Roy — Assistant Professor, GITAM (Deemed to be
                  University), Hyderabad
                </li>
                <li>
                  Dr. Sujith C — Senior Research Fellow, Department of Indian
                  and World Literatures, EFL University Hyderabad
                </li>
                <li>
                  Mohammed Jouhar Palakkal — PhD Scholar, Department of Design,
                  IIT Hyderabad
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl mb-6 border-2 border-dashed border-[#e6e6e6] bg-white text-center">
              <h5 className="text-lg font-semibold text-[#000000] italic mb-1">
                Break
              </h5>
              <p className="text-sm text-[#444444]">
                11:00 a.m. — 11:30 a.m. (30 minutes)
              </p>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 4 — Ideate & Prototype
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 11:30 a.m. to 12:30 p.m.
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme: Ideate — Whose Ideas Count? and Prototype — Accessible to
                Whom? Legible to What?
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Shubha Ranganathan, Department of Liberal Arts,
                IIT-Hyderabad
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Participants:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  Dr. K. Pavani Sree — Post-Doctoral Fellow, Department of
                  Sociology, University of Hyderabad
                </li>
                <li>Aishwarya T.V — Co-Founder, Grailmaker Innovations</li>
                <li>
                  Prof. Srinivasa Prakash Regalla — Senior Professor, Dept. of
                  Mechanical Engineering, BITS-Pilani, Hyderabad
                </li>
              </ul>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 5 — Define/Ideate
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 12:30 to 1:15 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Hemachandran Karah, Accessibility Research
                Centre, IIT Madras
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Presenters:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  Dr. Kurukhetra Dip — Assistant Professor, Department of
                  Sociology, Banaras Hindu University
                </li>
                <li>
                  Krishna Thiruvengadam — CEO & CoFounder, dVerse Technologies
                  Pvt Ltd
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl mb-6 border-2 border-dashed border-[#e6e6e6] bg-white text-center">
              <h5 className="text-lg font-semibold text-[#000000] italic mb-1">
                Lunch
              </h5>
              <p className="text-sm text-[#444444]">
                1:15 p.m. — 2:30 p.m. • Auditorium Foyer
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-4">
              Afternoon Sessions
            </h4>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Session 6 — Prototype
              </h5>
              <p className="text-sm text-[#000000] font-semibold mb-2">
                Time: 2:30 to 4:00 p.m.
              </p>
              <p className="text-base text-[#000000] mb-3">
                Theme: Prototype — Accessible to Whom? Legible to What? (Examine
                accessibility and legibility in prototyping practices.)
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Chair: Professor Akanksha Rathore, Department of Computer
                Science and Information Systems, BITS-Pilani Hyderabad Campus
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Participants:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#000000]">
                <li>
                  Ramprasad V — Officer, Research & Documentation, CCST-PwDs,
                  Swami Vivekananda Youth Movement, Mysuru
                </li>
                <li>
                  Deepa Palaniappan — Consultant, Disability Team, Azim Premji
                  University, Bengaluru
                </li>
                <li>
                  Sangita Thakur — Ashtavakra Accessibility Solutions Pvt. Ltd.
                </li>
                <li>
                  Nirdesh Joshi — PhD Scholar, Department of Design, IIT
                  Hyderabad
                </li>
                <li>
                  Nilesh Singit — Distinguished Research Fellow, Centre for
                  Disability Studies, NALSAR University of Law
                </li>
                <li>
                  Suman Damera — Senior Principal Engineer, Phenom, Hyderabad
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl mb-6 border-2 border-dashed border-[#e6e6e6] bg-white text-center">
              <h5 className="text-lg font-semibold text-[#000000] italic mb-1">
                Break
              </h5>
              <p className="text-sm text-[#444444]">
                4:00 p.m. — 4:15 p.m. (15 minutes)
              </p>
            </div>

            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Valedictory Session
              </h5>
              <p className="text-base text-[#000000] font-semibold">
                Time: 4:15 to 5:00 p.m. — Concluding remarks
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
