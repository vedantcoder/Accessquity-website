export const metadata = {
  title: "Competition • Symposium",
};

export default function CompetitionPage() {
  return (
    <section className="space-y-4" aria-labelledby="competition-title">
      <h1 id="competition-title" className="text-3xl font-bold">
        Competition
      </h1>
      <p className="text-foreground/80">
        Details about the competition will be announced soon. Stay tuned for
        categories, rules, and prizes.
      </p>
      <div aria-live="polite" className="sr-only">
        Competition information will be updated as soon as it becomes available.
      </div>
    </section>
  );
}
