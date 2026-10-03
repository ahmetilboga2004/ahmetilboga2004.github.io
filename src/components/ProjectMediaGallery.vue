<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight, Images, Play, X } from 'lucide-vue-next'

const props = defineProps({
  projectTitle: { type: String, required: true },
  media: { type: Array, required: true },
})

const activeIndex = ref(null)
const closeButton = ref(null)
const opener = ref(null)
let previousBodyOverflow = ''
const activeItem = computed(() =>
  activeIndex.value === null ? null : props.media[activeIndex.value],
)
const preview = computed(() => props.media[0])

function openGallery(index = 0, event) {
  opener.value = event?.currentTarget ?? null
  activeIndex.value = index
  nextTick(() => closeButton.value?.focus())
}

function closeGallery() {
  activeIndex.value = null
  nextTick(() => opener.value?.focus())
}

function move(direction) {
  activeIndex.value = (activeIndex.value + direction + props.media.length) % props.media.length
}

function onKeydown(event) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowLeft' && props.media.length > 1) move(-1)
  if (event.key === 'ArrowRight' && props.media.length > 1) move(1)
  if (event.key !== 'Tab') return

  const controls = [
    ...document.querySelectorAll(
      '[data-media-dialog] button, [data-media-dialog] video[controls], [data-media-dialog] iframe',
    ),
  ]
  const first = controls[0]
  const last = controls.at(-1)
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

watch(activeIndex, (index, previousIndex) => {
  if (index === null) {
    document.body.style.overflow = previousBodyOverflow
    document.removeEventListener('keydown', onKeydown)
  } else if (previousIndex === null) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (activeIndex.value !== null) document.body.style.overflow = previousBodyOverflow
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div v-if="media.length" class="w-full max-w-sm">
    <button
      type="button"
      class="group/media relative block w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 text-left shadow-sm transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:focus-visible:outline-neutral-300"
      :aria-label="`View ${projectTitle} media gallery (${media.length} items)`"
      @click="openGallery(0, $event)"
    >
      <span class="block aspect-video">
        <img
          v-if="preview.type === 'image' || preview.poster"
          :src="preview.type === 'image' ? preview.src : preview.poster"
          :alt="preview.type === 'image' ? preview.alt : ''"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover transition-transform duration-500 group-hover/media:scale-[1.03]"
        />
        <span
          v-else
          class="flex h-full items-center justify-center text-neutral-500 dark:text-neutral-400"
        >
          <Play :size="30" aria-hidden="true" />
        </span>
      </span>
      <span
        class="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-neutral-950/85 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm"
      >
        <Play v-if="preview.type !== 'image'" :size="13" aria-hidden="true" />
        <Images v-else :size="13" aria-hidden="true" />
        {{
          media.length === 1
            ? preview.type === 'image'
              ? 'View image'
              : 'Watch video'
            : `View media · ${media.length}`
        }}
      </span>
    </button>
  </div>

  <Teleport to="body">
    <div
      v-if="activeItem"
      data-media-dialog
      class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 text-white sm:p-8"
      role="dialog"
      aria-modal="true"
      :aria-label="`${projectTitle} media gallery`"
      @click.self="closeGallery"
    >
      <div class="flex w-full max-w-5xl flex-col gap-4">
        <div class="flex items-center justify-between gap-4">
          <p class="min-w-0 truncate font-mono text-xs text-neutral-300 sm:text-sm">
            {{ projectTitle }}
            <span class="text-neutral-500">· {{ activeIndex + 1 }} / {{ media.length }}</span>
          </p>
          <button
            ref="closeButton"
            type="button"
            class="rounded p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close gallery"
            @click="closeGallery"
          >
            <X :size="22" aria-hidden="true" />
          </button>
        </div>

        <div
          class="flex h-[min(68vh,650px)] items-center justify-center overflow-hidden rounded-lg bg-neutral-900"
        >
          <img
            v-if="activeItem.type === 'image'"
            :key="activeItem.src"
            :src="activeItem.src"
            :alt="activeItem.alt"
            class="max-h-full max-w-full object-contain"
          />
          <video
            v-else-if="activeItem.type === 'video'"
            :key="activeItem.src"
            :src="activeItem.src"
            :poster="activeItem.poster"
            controls
            playsinline
            preload="none"
            class="max-h-full max-w-full"
            :aria-label="activeItem.alt || `${projectTitle} video`"
          />
          <iframe
            v-else-if="activeItem.type === 'youtube'"
            :key="activeItem.videoId"
            :src="`https://www.youtube-nocookie.com/embed/${encodeURIComponent(activeItem.videoId)}`"
            :title="activeItem.alt || `${projectTitle} video`"
            allow="
              accelerometer;
              autoplay;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
            class="h-full w-full"
          />
        </div>

        <div
          v-if="media.length > 1 || (activeItem.type !== 'image' && activeItem.alt)"
          class="flex items-center justify-between gap-4"
        >
          <p
            v-if="activeItem.type !== 'image' && activeItem.alt"
            class="min-w-0 text-sm text-neutral-300"
          >
            {{ activeItem.alt }}
          </p>
          <div v-if="media.length > 1" class="ml-auto flex shrink-0 gap-2">
            <button
              type="button"
              class="rounded border border-neutral-700 p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Previous media"
              @click="move(-1)"
            >
              <ArrowLeft :size="19" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="rounded border border-neutral-700 p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Next media"
              @click="move(1)"
            >
              <ArrowRight :size="19" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
