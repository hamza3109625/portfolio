import Image from "next/image"
import { site } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal className="order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/portrait.png"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 md:order-2">
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
              About
            </p>
            <div className="space-y-6">
              {site.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {site.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
