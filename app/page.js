import Image from "next/image";

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

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
              Schedule
            </h2>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
              Register
            </h2>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-20 bg-alt-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
              Organizers
            </h2>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl mb-6">
              Sponsors
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
