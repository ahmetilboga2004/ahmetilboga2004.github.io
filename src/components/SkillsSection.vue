<script setup>
import { SKILLS } from '@/data/data'
</script>

<template>
  <section class="min-h-dvh flex items-center py-20" aria-labelledby="skills-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <header class="mb-12 md:mb-16">
        <h2
          id="skills-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, type: 'keyframes', ease: 'easeOut' },
          }"
        >
          Skills
        </h2>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
        <div
          v-for="(skill, index) in SKILLS"
          :key="skill"
          class="group flex items-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 50, type: 'keyframes', ease: 'easeOut' },
          }"
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
