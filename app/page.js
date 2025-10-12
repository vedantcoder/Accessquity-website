"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section (white) - new layout: three logos, two-column content with divider on desktop */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Top logos: left, center, right */}
          <div className="-mt-6 mb-4 flex items-start justify-between">
            <div className="flex-1 flex justify-start">
              <Image
                src="/logos/bits-logo.png"
                alt="BITS Pilani Hyderabad Campus logo"
                width={200}
                height={64}
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                priority
              />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <Image
                src="/logos/symposium-logo.png"
                alt="Accessible by Design symposium logo"
                width={320}
                height={120}
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                priority
              />
              <p className="mt-2 text-base sm:text-lg italic text-[#000000]">
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
              />
            </div>
          </div>

          {/* Main two-column hero content. On mobile this stacks; divider hidden */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Left: large title and date */}
            <div className="lg:col-span-1 text-left">
              <h1 className="text-balance text-6xl font-bold tracking-tight text-[#000000] sm:text-7xl lg:text-8xl">
                Accessible by Design
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-[#000000] italic">
                a two-day international symposium
              </p>
              <p className="mt-4 text-3xl sm:text-4xl font-semibold text-[#000000]">
                <strong>15-16 October, 2025</strong>
              </p>
              <p className="text-lg sm:text-xl text-[#000000]">
                Venue: Auditorium
              </p>
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
            <div className="lg:col-span-1 lg:text-right lg:-ml-8">
              <p className="text-xl md:text-2xl lg:text-2xl leading-relaxed text-[#000000] max-w-[52ch]">
                supported by the Department of Science, Innovation, and
                Technology&#39;s International Science Partnerships Fund (ISPF)
                via the <strong>Royal Academy of Engineering</strong>, United
                Kingdom, under the Frontiers Champions scheme.
              </p>
            </div>
          </div>

          {/* Bottom-centered buttons across the hero */}
          <div className="mt-8 flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule"
                className="inline-block rounded-lg bg-[#000000] px-10 py-4 text-lg font-semibold text-[#ffffff] shadow-lg transition-all hover:bg-[#333333] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
              >
                View Schedule
              </a>
              <a
                href="#register"
                className="inline-block rounded-lg border border-[#000000] px-10 py-4 text-lg font-semibold text-[#000000] hover:bg-[#000000]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Symposium Section */}
      <section id="about" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-6">
                About the Symposium
              </h2>
              <h3 className="text-2xl font-semibold italic text-[#000000] mb-8">
                Towards disability equity in tech futures
              </h3>
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
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e6e6]">
                <h4 className="text-3xl font-bold text-[#000000] mb-8 text-center">
                  Events
                </h4>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Thematic panel discussions
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Action plan and recommendation workshops
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-medium text-[#000000]">
                      Technology showcase - Display by AT companies and
                      innovators
                    </span>
                  </div>
                </div>
              </div>

              {/* Participants Section */}
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e6e6]">
                <h4 className="text-3xl font-bold text-[#000000] mb-6 text-center">
                  Participants
                </h4>
                <p className="text-lg text-[#000000] mb-8 text-center">
                  This symposium invites a diverse community of participants
                  from across the assistive technology ecosystem, including:
                </p>
                <div className="grid grid-cols-1 gap-3">
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
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg text-center"
                    >
                      <span className="text-base text-[#000000] font-medium">
                        {participant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Theme 1 */}
              <div className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]">
                <h3 className="text-xl font-bold text-[#000000] mb-3">
                  Theme 1: Empathize
                </h3>
                <h4 className="text-lg font-semibold text-[#000000] mb-4 italic">
                  Whose Empathy? Whose Experience?
                </h4>
                <p className="text-base leading-relaxed text-[#000000]">
                  To foster interdisciplinary dialogue between different
                  stakeholders of Assistive Technology and go beyond tokenism by
                  recognising the potential of disabled people as
                  user-designers.
                </p>
              </div>

              {/* Theme 2 */}
              <div className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]">
                <h3 className="text-xl font-bold text-[#000000] mb-3">
                  Theme 2: Define
                </h3>
                <h4 className="text-lg font-semibold text-[#000000] mb-4 italic">
                  Defining Problems or Defining People?
                </h4>
                <p className="text-base leading-relaxed text-[#000000]">
                  To discuss the relevance of user-centric design in Assistive
                  Technology, ensuring solutions that are accessible by going
                  beyond body-centric solutions to environmental adaptations.
                </p>
              </div>

              {/* Theme 3 */}
              <div className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]">
                <h3 className="text-xl font-bold text-[#000000] mb-3">
                  Theme 3: Ideate
                </h3>
                <h4 className="text-lg font-semibold text-[#000000] mb-4 italic">
                  Whose Ideas Count?
                </h4>
                <p className="text-base leading-relaxed text-[#000000]">
                  To identify emerging trends, challenges, and future directions
                  in Assistive Technology in the form of design fictions and
                  critiques that are disability centric.
                </p>
              </div>

              {/* Theme 4 */}
              <div className="rounded-xl bg-alt-dark p-8 text-left border border-[#e6e6e6]">
                <h3 className="text-xl font-bold text-[#000000] mb-3">
                  Theme 4: Prototype
                </h3>
                <h4 className="text-lg font-semibold text-[#000000] mb-4 italic">
                  Accessible to Whom? Legible to What?
                </h4>
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
      <section id="keynote-sessions" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-12 text-center">
              Keynote Sessions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Plenary 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Colorful header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 1
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                    Prof. Hemachandran Karah
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Director, Accessibility Research Centre, IIT Madras
                  </p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;End-usage as Craftsmanship and Engineering:
                      Challenges and Opportunities in Co-creating Assistive
                      Technology&rdquo;
                    </h4>
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
                      <span className="text-sm">10:15 pm</span>
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

              {/* Plenary 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Colorful header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 2
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                    Prof. Amita Dhanda
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Professor of Law and Director, Centre for Disability
                    Studies, NALSAR University of Law, Hyderabad
                  </p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;Why the Right to Accessibility Needs the Force of
                      the Law&rdquo;
                    </h4>
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
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Colorful header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-sky-400 to-red-500"></div>

                {/* Content with gradient overlay for better text visibility */}
                <div className="bg-[#333333] text-white p-8 h-full flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Plenary 3
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                    Prof. Shilpa Das
                  </h3>

                  <p className="text-sky-300 mb-6 text-sm font-medium">
                    Head, Faculty of Interdisciplinary Design Studies, National
                    Institute of Design, Ahmedabad
                  </p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-lg mb-2 text-white italic">
                      &ldquo;From Assistive Design to Equitable Systems: The
                      Disability-Led Mandate for Design Futures&rdquo;
                    </h4>
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
                      <span className="text-sm">12:30 pm</span>
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
            Day 1 - 15th October, 2025
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
            Day 2 - 16th October, 2025
          </button>
        </div>
      </div>

      {/* Day 1 Content */}
      {activeDay === 1 && (
        <div
          id="day1-panel"
          role="tabpanel"
          aria-labelledby="day1-tab"
          className="space-y-6"
        >
          {/* Inaugural Session */}
          <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6]">
            <h4 className="text-2xl font-bold text-[#000000] mb-4">
              Inaugural Session
            </h4>
            <p className="text-lg text-[#000000] font-semibold">
              Time: 09:30 a.m. to 10:15 a.m.
            </p>
          </div>

          {/* Morning Sessions - Day 1 */}
          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-6">
              Morning Sessions
            </h4>

            {/* Plenary 1 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Plenary 1
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 10:15 a.m. to 11:00 a.m.
              </p>
              <p className="text-base text-[#000000]">
                <strong>Speaker:</strong> Prof. Hemachandran Karah, Director of
                Accessibility Research Centre at IIT Madras.
              </p>
            </div>

            {/* Break */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Break</h5>
              <p className="text-base text-[#000000]">Duration: 30 minutes</p>
              <p className="text-base text-[#000000]">
                Time: 11:00 a.m. to 11:30 a.m.
              </p>
            </div>

            {/* Session 1 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 1
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 11:30 a.m. to 1:00 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Empathize - Whose empathy? Whose experience?
              </p>
              <p className="text-base text-[#000000] mb-4">
                Theme Description: To foster interdisciplinary dialogue between
                different stakeholders of Assistive Technology and go beyond
                tokenism by recognising the potential of disabled people as
                user-designers.
              </p>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Presenters:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    R. Nitin Sinha, Research Scholar at the Department of Design
                    at IIT Hyderabad.
                  </li>
                  <li className="text-base text-[#000000]">
                    Arya Moitra, Independent Scholar with M.A. in English at
                    Jadavpur University, Class of 2025.
                  </li>
                  <li className="text-base text-[#000000]">
                    Ananya Thakur, Department of Design at IIT Hyderabad.
                  </li>
                  <li className="text-base text-[#000000]">
                    Raghavendra Satish Peri, Founder of HelloA11y.com and a
                    Digital Accessibility Evangelist.
                  </li>
                  <li className="text-base text-[#000000]">
                    Dr. Karthika J, Post-Doctoral Researcher at Accessibility
                    Research Centre, IIT Madras.
                  </li>
                </ul>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Lunch</h5>
              <p className="text-base text-[#000000]">Time: 1 to 2 p.m.</p>
              <p className="text-base text-[#000000]">
                Venue: Auditorium Foyer
              </p>
            </div>
          </div>

          {/* Afternoon Sessions - Day 1 */}
          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-6">
              Afternoon Sessions
            </h4>

            {/* Session 2 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 2
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 2 to 3:30 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Define – Defining Problems or Defining People?
              </p>
              <p className="text-base text-[#000000] mb-4">
                Theme Description: To discuss the relevance of user-centric
                design in Assistive Technology, ensuring solutions that are
                accessible by going beyond body-centric solutions to
                environmental adaptations.
              </p>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Participants:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    Neha Manik Jadhav, Product Manager at Helix Opportunity and
                    Progressive Accessibility Solutions.
                  </li>
                  <li className="text-base text-[#000000]">
                    Amar Pawar, PhD Research Candidate at the Centre for
                    Political Studies, JNU, New Delhi.
                  </li>
                  <li className="text-base text-[#000000]">
                    Manasi Panwar, PhD Research Scholar at the Department of
                    Humanities and Social Sciences, BITS Pilani.
                  </li>
                  <li className="text-base text-[#000000]">
                    Dr. Viswesh Sekhar, Advocate practising in the High Court of
                    Karnataka and a Disability Rights Professional.
                  </li>
                </ul>
              </div>
            </div>

            {/* Break */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Break</h5>
              <p className="text-base text-[#000000]">Duration: 30 minutes</p>
              <p className="text-base text-[#000000]">
                Time: 3:30 p.m. to 4:00 p.m.
              </p>
            </div>

            {/* Plenary 2 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Plenary 2
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 4 p.m. to 4:45 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Session Title: &quot;Why the Right to Accessibility Needs the
                Force of the Law&quot;
              </p>
              <p className="text-base text-[#000000]">
                <strong>Speaker:</strong> Prof. Amita Dhanda, Professor of Law
                and Director at Centre for Disability Studies, NALSAR University
                of Law, Hyderabad.
              </p>
            </div>

            {/* Session 3 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 3
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 4:45 p.m. to 5:30 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Define – Defining Problems or Defining People? and Ideate
                – Whose Ideas Count?
              </p>
              <div className="mb-4">
                <p className="text-base text-[#000000] mb-2">
                  <strong>Theme Description:</strong>
                </p>
                <p className="text-base text-[#000000] mb-2">
                  <strong>Define:</strong> To discuss the relevance of
                  user-centric design in Assistive Technology, ensuring
                  solutions that are accessible by going beyond body-centric
                  solutions to environmental adaptations.
                </p>
                <p className="text-base text-[#000000]">
                  <strong>Ideate:</strong> To identify emerging trends,
                  challenges, and future directions in Assistive Technology in
                  the form of design fictions and critiques that are disability
                  centric
                </p>
              </div>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Participants:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    Deepa Palaniappan, Consultant for Disability Team at Azim
                    Premji University, Bengaluru.
                  </li>
                  <li className="text-base text-[#000000]">
                    Krishna Thiruvengadam, CEO & CoFounder at dVerse
                    Technologies Pvt Ltd
                  </li>
                  <li className="text-base text-[#000000]">
                    Pavan Muntha, CEO at Swadhikaar
                  </li>
                </ul>
              </div>
            </div>

            {/* Director's Dinner */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">
                Director&apos;s Dinner
              </h5>
              <p className="text-base text-[#000000]">Time: 07:00 p.m.</p>
              <p className="text-base text-[#000000]">
                Venue: Auditorium Foyer
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Day 2 Content */}
      {activeDay === 2 && (
        <div
          id="day2-panel"
          role="tabpanel"
          aria-labelledby="day2-tab"
          className="space-y-6"
        >
          {/* Morning Sessions */}
          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-6">
              Morning Sessions
            </h4>

            {/* Session 4 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 4
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 9:30 a.m. to 11:00 a.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Ideate – Whose Ideas Count?
              </p>
              <p className="text-base text-[#000000] mb-4">
                Theme Description: To identify emerging trends, challenges, and
                future directions in Assistive Technology in the form of design
                fictions and critiques that are disability centric.
              </p>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Presenters:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    Prof. Tony Kurian, Assistant Professor at Social Science
                    group in the School of Arts and Sciences, Azim Premji
                    University, Bengaluru.
                  </li>
                  <li className="text-base text-[#000000]">
                    Dr. Bubai Bag, Members of Sruti Disability Rights centre at
                    Kolkata and Assistant Professor at Bagnan College
                  </li>
                  <li className="text-base text-[#000000]">
                    Samya Brata Roy, Assistant Professor, Gitam Deemed to be
                    University, Hyderabad
                  </li>
                  <li className="text-base text-[#000000]">
                    Dr. Sujith. C, Senior Research Fellow at the Department of
                    Indian and World Literatures, EFL University Hyderabad.
                  </li>
                  <li className="text-base text-[#000000]">
                    Keerthana.R, Research Scholar at the Department of English,
                    Vel Tech Rangarajan Dr. Sagunthala R & D Institute of
                    Science and Technology, Morai, Avadi, Chennai.
                  </li>
                </ul>
              </div>
            </div>

            {/* Break */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Break</h5>
              <p className="text-base text-[#000000]">Time: 11 to 11:30 a.m.</p>
              <p className="text-base text-[#000000]">Duration: 30 minutes</p>
            </div>

            {/* Session 5 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 5
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 11:30 a.m. to 12:30 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Ideate – Whose Ideas Count? and Prototype — Accessible to
                Whom? Legible to What?
              </p>
              <div className="mb-4">
                <p className="text-base text-[#000000] mb-2">
                  <strong>Theme Description:</strong>
                </p>
                <p className="text-base text-[#000000] mb-2">
                  <strong>Ideate:</strong> To identify emerging trends,
                  challenges, and future directions in Assistive Technology in
                  the form of design fictions and critiques that are disability
                  centric.
                </p>
                <p className="text-base text-[#000000]">
                  <strong>Prototype:</strong> To examine the concepts of
                  accessibility and legibility in the design of Assistive
                  Technology by reflecting on inaccessible prototyping practices
                  and disability-led prototyping processes.
                </p>
              </div>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Participants:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    Suman Damera, Senior Principal Engineer at Phenom, Hyderabad
                  </li>
                  <li className="text-base text-[#000000]">
                    Aishwarya T.V, Co-Founder at Grailmaker Innovations
                  </li>
                  <li className="text-base text-[#000000]">
                    Prof. Srinivasa Prakash Regalla, Senior Professor at the
                    Department of Mechanical Engineering, BITS-Pilani, Hyderabad
                  </li>
                </ul>
              </div>
            </div>

            {/* Plenary 3 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Plenary 3
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 12:30 p.m. to 1:15 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Session Title: &apos;From Assistive Design to Equitable Systems:
                The Disability-Led Mandate for Design Futures&apos;
              </p>
              <p className="text-base text-[#000000]">
                <strong>Speaker:</strong> Prof. Shilpa Das, Head, Faculty of
                Interdisciplinary Design Studies at National Institute of
                Design, Ahmedabad.
              </p>
            </div>

            {/* Lunch */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Lunch</h5>
              <p className="text-base text-[#000000]">
                Time: 1:15 to 2:30 p.m.
              </p>
              <p className="text-base text-[#000000]">
                Venue: Auditorium Foyer
              </p>
            </div>
          </div>

          {/* Afternoon Sessions */}
          <div>
            <h4 className="text-2xl font-bold text-[#000000] mb-6">
              Afternoon Sessions
            </h4>

            {/* Session 6 */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Session 6
              </h5>
              <p className="text-lg text-[#000000] font-semibold mb-3">
                Time: 2:30 to 4:00 p.m.
              </p>
              <p className="text-base text-[#000000] font-semibold mb-2">
                Theme: Prototype — Accessible to Whom? Legible to What?
              </p>
              <p className="text-base text-[#000000] mb-4">
                Theme Description: To examine the concepts of accessibility and
                legibility in the design of Assistive Technology by reflecting
                on inaccessible prototyping practices and disability-led
                prototyping processes.
              </p>
              <div>
                <p className="text-base text-[#000000] font-semibold mb-2">
                  Participants:
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-base text-[#000000]">
                    Ramprasad.V, Officer, Research & Documentation,
                    Comprehensive Care Support and Treatment for Persons with
                    Disabilities (CCST-PwDs) at Swami Vivekananda Youth
                    Movement, Mysuru
                  </li>
                  <li className="text-base text-[#000000]">
                    Dr. K.Pavani Sree, Post-Doctoral Fellow, Department of
                    Sociology at University of Hyderabad
                  </li>
                  <li className="text-base text-[#000000]">
                    Nirdesh Joshi, PhD Scholar, Department of Design at IIT
                    Hyderabad
                  </li>
                  <li className="text-base text-[#000000]">
                    Sangita Thakur, Ashtavakra Accessibility Solutions Pvt. Ltd.
                  </li>
                  <li className="text-base text-[#000000]">
                    Mohammed Jouhar Palakkal, PhD Scholar, Department of Design
                    at IIT Hyderabad
                  </li>
                </ul>
              </div>
            </div>

            {/* Break */}
            <div className="bg-alt-dark p-6 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-2">Break</h5>
              <p className="text-base text-[#000000]">
                Time: 4 p.m. to 4:15 p.m.
              </p>
              <p className="text-base text-[#000000]">Duration: 15 mins.</p>
            </div>

            {/* Valedictory Session */}
            <div className="bg-alt-dark p-8 rounded-xl border border-[#e6e6e6] mb-6">
              <h5 className="text-xl font-bold text-[#000000] mb-3">
                Valedictory Session
              </h5>
              <p className="text-lg text-[#000000] font-semibold">
                Time: 4:15 p.m. to 5:00 pm
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
