<script setup>
import { EXPERIENCE } from '@/data/data'
import { useSectionAnimation } from '@/composables/useSectionAnimation'

const { elementRef, isVisible } = useSectionAnimation()
</script>

<template>
  <section ref="elementRef" class="min-h-screen flex items-center py-20" aria-labelledby="experience-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <header class="mb-16 md:mb-24 overflow-hidden">
        <h2
          id="experience-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'"
          style="transition-delay: 200ms"
        >
          Experience
        </h2>
      </header>

      <div class="flex flex-col gap-16 md:gap-24" role="list">
        <article
          v-for="(exp, index) in EXPERIENCE"
          :key="exp.id"
          class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
          role="listitem"
        >
          <!-- Period - Left Column on Desktop -->
          <div class="md:col-span-3">
            <time
              class="font-mono text-sm text-neutral-500 dark:text-neutral-500 py-1 block transition-colors duration-300"
            >
              {{ exp.period }}
            </time>
          </div>

          <!-- Content - Right Column on Desktop -->
          <div class="md:col-span-9 flex flex-col gap-8">
            <div class="flex flex-col gap-1">
              <h3
                class="font-display text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 transition-colors duration-300"
              >
                {{ exp.role }}
              </h3>
              <p
                class="text-base font-mono text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
              >
                {{ exp.company }}
              </p>
            </div>

            <p
              class="text-base md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-light max-w-3xl transition-colors duration-300"
            >
              {{ exp.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
