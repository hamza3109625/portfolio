import { experience } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Experience
            </p>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
              A decade of building
            </h2>
          </Reveal>

          <ol className="relative border-l border-border/60">
            {experience.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.company}-${item.period}`}
                delay={i * 80}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
