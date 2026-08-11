import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/portfolio-data"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Selected work
            </p>
            <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Projects I&apos;m proud of
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col"
            >
              <Reveal delay={(i % 2) * 100} className="group flex flex-col">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-pretty text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
