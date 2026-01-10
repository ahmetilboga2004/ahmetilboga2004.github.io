<script setup>
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <main
    class="min-h-dvh overflow-x-hidden selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-50 dark:selection:text-neutral-950"
  >
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>
