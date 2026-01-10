# How to Add a New Section

This project has a modular structure. To add a new section (e.g., "Education", "Services", "Blog", etc.), follow these 3 simple steps.

## 1. Prepare Data (`src/data/data.js`)

If your section will contain dynamic data (like a list), add your data to this file.

```javascript
/* Add to the bottom of src/data/data.js */

export const EDUCATION = [
  {
    id: 1,
    school: 'Istanbul Technical University',
    degree: 'B.Sc. Computer Engineering',
    year: '2020 — 2024',
  },
  // Other items...
]
```

## 2. Create Component

Create a new file in the `src/components` directory (e.g., `EducationSection.vue`). To maintain design consistency, use the template below. The easiest way is to copy an existing file (e.g., `ExperienceSection.vue`) and rename/modify it.

**Template:**

```vue
<script setup>
import { EDUCATION } from '@/data/data' // 1. Import your data
</script>

<template>
  <!-- Main Section: Maintain min-h-screen and flex structure -->
  <section class="min-h-screen flex items-center py-20" aria-labelledby="edu-heading">
    <div class="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      <!-- Header Area -->
      <header class="mb-16 md:mb-24">
        <h2
          id="edu-heading"
          class="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, type: 'keyframes', ease: 'easeOut' },
          }"
        >
          Education
          <!-- Section Title -->
        </h2>
      </header>

      <!-- Content Area -->
      <div class="flex flex-col gap-12">
        <article
          v-for="(item, index) in EDUCATION"
          :key="item.id"
          class="..."
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: index * 150, type: 'keyframes', ease: 'easeOut' },
          }"
        >
          <!-- Write your content here using Tailwind classes (dark mode compatible) -->
          <h3 class="text-2xl font-display text-neutral-900 dark:text-neutral-50">
            {{ item.degree }}
          </h3>
          <!-- ... -->
        </article>
      </div>
    </div>
  </section>
</template>
```

**Key Points:**

- **Dark Mode:** Remember to add both light and dark theme classes when styling colors, e.g., `text-neutral-900 dark:text-neutral-50`.
- **Animation:** Maintain the `v-motion` properties as shown in the template for consistency.

## 3. Add to Page (`src/App.vue`)

Finally, import your new component into the main page and place it where you want it.

```vue
<script setup>
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue' // 1. Import component
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <main ...>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <!-- 2. Add to desired position -->
    <ContactSection />
  </main>
</template>
```

Congratulations! Your new section is now part of your portfolio, working seamlessly with the rest of the site.
