import { site, socials } from "@/lib/portfolio-data"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Let&apos;s build something great together.
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-3xl"
          >
            {site.email}
            <ArrowUpRight className="h-6 w-6" />
          </a>
        </Reveal>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/60 pt-8">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
