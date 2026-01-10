<script setup>
import { EXPERIENCE } from '@/data/data'
</script>

<template>
  <section class="min-h-dvh flex items-center py-20" aria-labelledby="experience-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <header class="mb-16 md:mb-24">
        <h2
          id="experience-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, type: 'keyframes', ease: 'easeOut' },
          }"
        >
          Experience
        </h2>
      </header>

      <div class="flex flex-col gap-16 md:gap-24" role="list">
        <article
          v-for="(exp, index) in EXPERIENCE"
          :key="exp.id"
          class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          role="listitem"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: index * 150, type: 'keyframes', ease: 'easeOut' },
          }"
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
