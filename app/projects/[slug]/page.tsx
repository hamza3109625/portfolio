import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getProject, projects } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(index + 1) % projects.length]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-widest text-accent">
              {project.year}
            </p>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              {project.tagline}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cover image */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] w-full -translate-y-0 overflow-hidden rounded-2xl bg-muted md:-mt-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            {/* Meta sidebar */}
            <div className="space-y-6">
              <dl className="space-y-6">
                {project.meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>

              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  {project.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>

            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Overview</h2>
              <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                {project.overview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <h3 className="mt-10 font-display text-lg font-semibold tracking-tight">
                Highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 ? (
          <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${project.title} detail ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Next project */}
        <section className="border-t border-border/60">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mx-auto flex max-w-6xl flex-col gap-2 px-6 py-16 md:py-20"
          >
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Next project
            </span>
            <span className="flex items-center gap-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {nextProject.title}
              <ArrowRight className="h-7 w-7 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
