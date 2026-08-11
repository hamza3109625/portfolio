import { skillGroups } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Skills
            </p>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
              What I bring to the table
            </h2>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 100}>
                <h3 className="mb-4 font-display text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
