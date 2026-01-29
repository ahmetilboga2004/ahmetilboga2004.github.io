import { ref, onMounted, onUnmounted } from 'vue'

export function useSectionAnimation(options = { threshold: 0.1 }) {
  const elementRef = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (observer && elementRef.value) {
          observer.unobserve(elementRef.value)
        }
      }
    }, options)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}
