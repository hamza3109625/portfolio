import { testimonials } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Kind words from people I&apos;ve worked with
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 100}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-8"
            >
              <blockquote className="text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-6">
                <div className="font-display font-semibold tracking-tight">{t.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.title}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
