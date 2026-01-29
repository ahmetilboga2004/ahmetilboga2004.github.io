<script setup>
import { HERO_DATA } from '@/data/data'
import { MapPin, ArrowDown } from 'lucide-vue-next'
import { useSectionAnimation } from '@/composables/useSectionAnimation'

const { elementRef, isVisible } = useSectionAnimation({ threshold: 0 })
</script>

<template>
  <section ref="elementRef" class="min-h-screen flex items-center py-16 md:py-20 relative" aria-label="Introduction">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <div class="flex flex-col items-start gap-8 md:gap-10 max-w-3xl">
        <!-- Main heading area -->
        <header class="flex flex-col gap-6">
          <h1
            class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-neutral-900 dark:text-neutral-50 transition-all duration-1200 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            {{ HERO_DATA.name }}
          </h1>
          <div class="flex flex-col gap-3">
            <p
              class="font-mono text-base md:text-lg text-neutral-600 dark:text-neutral-400 tracking-wide block transition-all duration-1200 transform"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              style="transition-delay: 200ms"
            >
              {{ HERO_DATA.title }}
            </p>

            <!-- Open to work indicator -->
            <div
              v-if="HERO_DATA.open"
              class="inline-flex items-center gap-2 transition-all duration-1000 transform"
              :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'"
              style="transition-delay: 400ms"
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
            class="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl font-light transition-all duration-1200 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
            style="transition-delay: 600ms"
          >
            {{ HERO_DATA.bio }}
          </p>

          <p
            class="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 font-mono mt-2 transition-all duration-1000 transform"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition-delay: 800ms"
          >
            <MapPin class="w-4 h-4" />
            <span>{{ HERO_DATA.location }}</span>
          </p>
        </div>
      </div>

      <!-- Scroll indicator - Centered horizontally -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-500 hidden md:block animate-bounce transition-all duration-1000"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition-delay: 1200ms"
        aria-hidden="true"
      >
        <ArrowDown class="w-6 h-6" />
      </div>
    </div>
  </section>
</template>
