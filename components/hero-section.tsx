import { site } from "@/lib/portfolio-data"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-32 md:pt-32">
        <p className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
          {site.hero.greeting}
        </p>

        <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {site.hero.headline}
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {site.hero.subline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
