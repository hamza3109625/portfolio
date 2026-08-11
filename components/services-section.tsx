import { services } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
            How I can help
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you need a full product designed and built, or a specific piece of the puzzle,
            I plug in wherever I&apos;m most useful.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="flex flex-col gap-4 bg-card p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
