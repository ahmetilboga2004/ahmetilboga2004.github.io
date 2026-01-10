<script setup>
import { SOCIALS } from '@/data/data'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <footer class="min-h-screen flex items-center py-20" aria-labelledby="contact-heading">
    <div
      class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full max-h-[80vh]"
    >
      <div class="flex-1 flex flex-col justify-center">
        <header class="mb-12 md:mb-24">
          <h2
            id="contact-heading"
            class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 800, type: 'keyframes', ease: 'easeOut' },
            }"
          >
            Contact
          </h2>
        </header>

        <div class="grid gap-6 md:grid-cols-3">
          <a
            v-for="(social, index) in SOCIALS"
            :key="social.id"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-4 py-8 border-t border-neutral-200 dark:border-neutral-900 md:border-t-0 md:border-l md:first:border-l-0 md:pl-12 md:first:pl-0 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: index * 100, type: 'keyframes', ease: 'easeOut' },
            }"
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
              class="font-display text-2xl md:text-4xl font-semibold text-neutral-400 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 truncate"
            >
              {{ social.label }}
            </span>
          </a>
        </div>
      </div>

      <div
        class="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500 dark:text-neutral-700 mt-auto transition-colors duration-300"
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 1000, delay: 600, ease: 'linear' } }"
      >
        <p>© {{ new Date().getFullYear() }} Ahmet İlboga</p>
      </div>
    </div>
  </footer>
</template>
