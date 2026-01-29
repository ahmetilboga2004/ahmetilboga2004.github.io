<script setup>
import { SOCIALS } from '@/data/data'
import { ArrowUpRight } from 'lucide-vue-next'
import { useSectionAnimation } from '@/composables/useSectionAnimation'

const { elementRef, isVisible } = useSectionAnimation()
</script>

<template>
  <footer ref="elementRef" class="min-h-screen flex items-center py-20" aria-labelledby="contact-heading">
    <div
      class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center h-full"
    >
      <div class="flex-1 flex flex-col justify-center">
        <header class="mb-12 md:mb-16 overflow-hidden">
          <h2
            id="contact-heading"
            class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-all duration-1000 transform"
            :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'"
            style="transition-delay: 200ms"
          >
            Contact
          </h2>
        </header>

        <div class="grid gap-x-12 gap-y-16 md:grid-cols-2">
          <a
            v-for="(social, index) in SOCIALS"
            :key="social.id"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-2 transition-all duration-1000 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${200 + index * 100}ms` }"
          >
            <div class="flex items-center justify-between">
              <span
                class="font-mono text-sm text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
                >{{ social.name }}</span
              >
              <ArrowUpRight
                class="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
              />
            </div>

            <span
              class="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-400 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 wrap-break-word"
            >
              {{ social.label }}
            </span>
          </a>
        </div>
      </div>

      <div
        class="pt-16 md:pt-24 flex justify-between items-center text-xs font-mono text-neutral-500 dark:text-neutral-700 mt-auto transition-all duration-1000 opacity-0"
        :class="isVisible && 'opacity-100'"
        style="transition-delay: 600ms"
      >
        <p>© {{ new Date().getFullYear() }} Ahmet İlboga</p>
      </div>
    </div>
  </footer>
</template>
