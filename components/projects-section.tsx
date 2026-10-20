"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export function ProjectsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(true)

  React.useEffect(() => {
    if (!api) return
    const sync = () => {
      setCurrent(api.selectedScrollSnap())
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    sync()
    api.on("select", sync)
    api.on("reInit", sync)
    return () => {
      api.off("select", sync)
      api.off("reInit", sync)
    }
  }, [api])

  const total = projects.length

  return (
    <section id="work" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Selected work
            </p>
            <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Projects I&apos;m proud of
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span
              className="font-mono text-sm text-muted-foreground"
              aria-live="polite"
            >
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", containScroll: "trimSnaps" }}
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {projects.map((project) => (
                <CarouselItem key={project.slug} className="pl-8 sm:basis-1/2">
                  <Link
                    href={`/projects/${project.slug}`}
                    draggable={false}
                    className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 45vw"
                        draggable={false}
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
                        <span className="text-sm text-muted-foreground">
                          {project.year}
                        </span>
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
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Choose project">
            {projects.map((project, i) => (
              <button
                key={`${project.slug}-dot`}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={project.title}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-8 bg-accent" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}