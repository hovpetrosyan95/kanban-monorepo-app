export const useDropdown = () => {
  const isOpen = ref(false);
  const coords = ref({ top: 0, left: 0 });

  const close = () => {
    isOpen.value = false;
    // Remove listener when closed
    if (import.meta.client) {
      window.removeEventListener("scroll", close, true);
    }
  };

  const toggle = (event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    coords.value = {
      top: rect.bottom + 8,
      left: Math.min(rect.left - 140, window.innerWidth - 200),
    };
    isOpen.value = !isOpen.value;

    // listen for any scroll in the app to close it
    if (isOpen.value && import.meta.client) {
      window.addEventListener("scroll", close, true);
    }
  };

  // Cleanup if component is destroyed
  onUnmounted(() => {
    if (import.meta.client) window.removeEventListener("scroll", close, true);
  });

  return { isOpen, coords, toggle, close };
};
