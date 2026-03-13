import Image from "next/image";
import BackToTop from "@/components/back-to-top";

const games = [
  {
    title: "Tetris",
    description: "Classic Tetris rebuilt from scratch using AI — fully playable in the browser.",
    image: "/SSTetris.png",
    href: "/tetris.html",
  },
  {
    title: "Xonix",
    description: "Classic Xonix territory capture game rebuilt using AI — claim the board without getting caught.",
    image: "/SSXonix.png",
    href: "/xonix.html",
  },
];

export default function GamesPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Games
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Here are some games I developed using AI.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game) => (
            <a
              key={game.href}
              href={game.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-card shadow-card-hover transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-xl ring-1 ring-slate-200 aspect-[3/4]">
                <Image
                  src={game.image}
                  alt={`${game.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-900">{game.title}</h2>
              <p className="mt-3 text-base text-slate-700">{game.description}</p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Play now →
              </span>
            </a>
          ))}
        </div>
      </section>
      <BackToTop />
    </div>
  );
}
