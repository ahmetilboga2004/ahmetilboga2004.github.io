<script setup>
import { SKILLS } from '@/data/data'
import { useSectionAnimation } from '@/composables/useSectionAnimation'

const { elementRef, isVisible } = useSectionAnimation()
</script>

<template>
  <section ref="elementRef" class="min-h-screen flex items-center py-20" aria-labelledby="skills-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <header class="mb-12 md:mb-16 overflow-hidden">
        <h2
          id="skills-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'"
          style="transition-delay: 200ms"
        >
          Skills
        </h2>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
        <div
          v-for="(skill, index) in SKILLS"
          :key="skill"
          class="group flex items-center transition-all duration-800 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: `${300 + index * 50}ms` }"
        >
          <span
            class="font-display text-lg md:text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
