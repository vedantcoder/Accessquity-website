import Image from "next/image";
import InPageNav from "./components/InPageNav";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section (white) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        {/* Large background symposium logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/logos/symposium-logo.png"
            alt=""
            width={400}
            height={400}
            className="h-60 w-60 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] object-contain opacity-20"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          {/* Logos */}
          <div
            className="mx-auto mb-8 flex max-w-4xl items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Image
              src="/logos/bits-logo.png"
              alt="BITS Pilani Hyderabad Campus logo"
              width={240}
              height={80}
              className="w-[150px] sm:w-[200px] h-auto object-contain opacity-90 ml-18"
              priority
            />
            <Image
              src="/logos/rae-logo.png"
              alt="Royal Academy of Engineering logo"
              width={264}
              height={88}
              className="w-[170px] sm:w-[220px] h-auto object-contain opacity-90 mr-18"
              priority
            />
          </div>

          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-[#000000] sm:text-7xl">
            Accessible by Design
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#000000] sm:text-3xl">
            An International Symposium
          </h2>
          <h3 className="mt-4 text-xl font-medium text-[#000000] sm:text-2xl italic">
            Towards disability equity in tech futures
          </h3>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="#register"
              className="rounded-lg bg-[#c1b89f] px-8 py-4 text-lg font-semibold text-[#000000] shadow-lg transition-all hover:bg-[#d8cfb6] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="rounded-lg border border-[#c1b89f] px-8 py-4 text-lg font-semibold text-[#000000] hover:bg-[#c1b89f]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
            >
              Learn More
            </a>
          </div>

          {/* Registration message removed per request */}
        </div>
      </section>

      <InPageNav />

      {/* About Section (2% black) */}
      <section id="about" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-8">
              About the Symposium
            </h2>
            <div className="text-xl leading-relaxed text-[#000000] space-y-6">
              <p>
                <span className="font-bold">Accessible by Design</span> is a{" "}
                <span className="font-bold">two-day symposium</span> at
                BITS-Pilani Hyderabad Campus, highlighting the development of
                assistive technology in India to foster a more inclusive,
                equitable and empowered society for people with disabilities.
              </p>
              <p>
                The symposium centers the knowledge and leadership of persons
                with disabilities as shapers and co-creators of accessible and
                just design futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details (white) */}
      <section id="event-details" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl">
              Event Details
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 text-center border border-[#e6e6e6]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-6 w-6 text-[#000000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15a.75.75 0 101.5 0v-.313a22.77 22.77 0 011.1-.306c.443-.106.893-.204 1.35-.294V15a.75.75 0 101.5 0v-.294a5.008 5.008 0 011.65-.294.75.75 0 100-1.5 3.507 3.507 0 00-1.65.294V11.25"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#000000]">
                  Date & Time
                </h3>
                <p className="mt-2 text-[#000000]">October 15-16, 2025</p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center border border-[#e6e6e6]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-6 w-6 text-[#000000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#000000]">
                  Location
                </h3>
                <p className="mt-2 text-[#000000]">
                  BITS Pilani, Hyderabad Campus
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center border border-[#e6e6e6]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-6 w-6 text-[#000000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#000000]">
                  Participants
                </h3>
                <p className="mt-2 text-[#000000]">Students & Faculty</p>
                <p className="text-sm text-[#000000]">Industry Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section (2% black) */}
      <section id="themes" className="py-20 bg-alt-dark">
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
              <div className="rounded-xl bg-white p-8 text-left border border-[#e6e6e6]">
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
              <div className="rounded-xl bg-white p-8 text-left border border-[#e6e6e6]">
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
              <div className="rounded-xl bg-white p-8 text-left border border-[#e6e6e6]">
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
              <div className="rounded-xl bg-white p-8 text-left border border-[#e6e6e6]">
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

      {/* Events Section (white) */}
      <section id="events" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl">
              Events
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="space-y-8">
              {/* Thematic Panel Discussions */}
              <div className="rounded-xl border border-[#e6e6e6] bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-6 w-6 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Thematic Panel Discussions
                    </h3>
                    <p className="text-base text-[#000000] leading-relaxed">
                      Engaging discussions with experts and stakeholders
                      exploring the four design thinking themes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Plan Workshops */}
              <div className="rounded-xl border border-[#e6e6e6] bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-6 w-6 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Action Plan and Recommendation Workshops
                    </h3>
                    <p className="text-base text-[#000000] leading-relaxed">
                      Collaborative workshops to develop actionable strategies
                      and recommendations for accessible design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Showcase */}
              <div className="rounded-xl border border-[#e6e6e6] bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-alt-dark">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-6 w-6 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Technology Showcase
                    </h3>
                    <p className="text-base text-[#000000] leading-relaxed">
                      Display by AT companies and innovators showcasing
                      cutting-edge assistive technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ideation Competition removed */}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section (2% black) */}
      <section id="register" className="py-16 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl">
              Register Now
            </h2>
            <p className="mt-4 text-lg text-[#000000]">
              Secure your spot at this transformative event
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#d8cfb6] px-8 py-4 text-lg font-semibold text-[#000000] shadow-lg transition-all hover:bg-[#e2d8bc] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
              >
                Register via Google Form
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <p className="text-sm text-[#000000]">
                Registration deadline: September 30, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
