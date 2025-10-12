"use client";
import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "event-details", label: "Event Details" },
  { id: "themes", label: "Themes" },
  { id: "events", label: "Events" },
  { id: "register", label: "Register" },
];

export default function InPageNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers = [];

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(it.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="bg-[#f2e7cb] border-b border-[#e6dcc2]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          <ul
            className="flex w-full max-w-3xl justify-between py-4"
            role="list"
          >
            {items.map((it) => (
              <li key={it.id} className="flex-1 text-center">
                <a
                  href={`#${it.id}`}
                  className={`inline-block px-6 py-3 rounded-md text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] ${
                    active === it.id
                      ? "bg-[#c1b89f] text-[#000000] shadow-md"
                      : "text-[#000000] hover:bg-[#e2d8bc]"
                  }`}
                  aria-current={active === it.id ? "page" : undefined}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
