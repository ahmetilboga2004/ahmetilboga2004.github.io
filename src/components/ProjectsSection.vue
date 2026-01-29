<script setup>
import { PROJECTS } from '@/data/data'
import { ArrowUpRight } from 'lucide-vue-next'
import { useSectionAnimation } from '@/composables/useSectionAnimation'

const { elementRef, isVisible } = useSectionAnimation()
</script>

<template>
  <section ref="elementRef" class="min-h-screen flex items-center py-20" aria-labelledby="projects-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <header class="mb-16 md:mb-24 overflow-hidden">
        <h2
          id="projects-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'"
          style="transition-delay: 200ms"
        >
          Projects
        </h2>
      </header>

      <div class="flex flex-col gap-16 md:gap-24" role="list">
        <article
          v-for="(project, index) in PROJECTS"
          :key="project.id"
          class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
          role="listitem"
        >
          <!-- Year - Left Column on Desktop -->
          <div class="md:col-span-3">
            <time
              class="font-mono text-sm text-neutral-500 dark:text-neutral-500 tabular-nums py-1 block transition-colors duration-300"
              :datetime="project.year"
            >
              {{ project.year }}
            </time>
          </div>

          <!-- Content - Right Column on Desktop -->
          <div class="md:col-span-9 flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <div class="flex items-baseline justify-between gap-4">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/link flex items-center gap-2"
                  :aria-label="`View ${project.title}`"
                >
                  <h3
                    class="font-display text-2xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 group-hover/link:text-neutral-600 dark:group-hover/link:text-white transition-colors duration-300"
                  >
                    {{ project.title }}
                  </h3>
                  <ArrowUpRight
                    class="w-5 h-5 md:w-6 md:h-6 text-neutral-400 dark:text-neutral-500 group-hover/link:text-neutral-600 dark:group-hover/link:text-white group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all duration-300"
                  />
                </a>
                <h3
                  v-else
                  class="font-display text-2xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>
              </div>

              <span
                class="text-sm font-mono text-neutral-500 dark:text-neutral-500 block transition-colors duration-300"
              >
                {{ project.category }}
              </span>
            </div>

            <p
              class="text-base md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-light max-w-3xl transition-colors duration-300"
            >
              {{ project.description }}
            </p>

            <ul class="flex flex-wrap gap-x-4 gap-y-2" aria-label="Technologies used">
              <li
                v-for="tech in project.technologies"
                :key="tech"
                class="font-mono text-xs text-neutral-600 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900/50 px-2 py-1 rounded transition-colors duration-300"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
