<script setup>
import { HERO_DATA } from '@/data/data'
import { MapPin, ArrowDown } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-dvh flex items-center py-16 md:py-20 relative" aria-label="Introduction">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <div class="flex flex-col items-start gap-8 md:gap-10 max-w-3xl">
        <!-- Main heading area -->
        <header class="flex flex-col gap-6">
          <h1
            class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-neutral-900 dark:text-neutral-50 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 60, filter: 'blur(10px)' }"
            :enter="{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 1000, type: 'keyframes', ease: 'easeOut' },
            }"
          >
            {{ HERO_DATA.name }}
          </h1>
          <div class="flex flex-col gap-3">
            <p
              class="font-mono text-base md:text-lg text-neutral-600 dark:text-neutral-400 tracking-wide block transition-colors duration-300"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 1000, delay: 200, type: 'keyframes', ease: 'easeOut' },
              }"
            >
              {{ HERO_DATA.title }}
            </p>

            <!-- Open to work indicator -->
            <div
              v-if="HERO_DATA.open"
              class="inline-flex items-center gap-2"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: { duration: 1000, delay: 400, type: 'keyframes', ease: 'easeOut' },
              }"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span
                class="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
                >Open to Work</span
              >
            </div>
          </div>
        </header>

        <!-- Bio area -->
        <div class="flex flex-col gap-6">
          <p
            class="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl font-light transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 1000, delay: 600, type: 'keyframes', ease: 'easeOut' },
            }"
          >
            {{ HERO_DATA.bio }}
          </p>

          <p
            class="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 font-mono mt-2 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{
              opacity: 1,
              transition: { duration: 1000, delay: 800, type: 'keyframes', ease: 'easeOut' },
            }"
          >
            <MapPin class="w-4 h-4" />
            <span>{{ HERO_DATA.location }}</span>
          </p>
        </div>
      </div>

      <!-- Scroll indicator - Centered horizontally -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-500 hidden md:block animate-bounce transition-colors duration-300"
        aria-hidden="true"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 1000, delay: 1200, ease: 'linear' } }"
      >
        <ArrowDown class="w-6 h-6" />
      </div>
    </div>
  </section>
</template>
