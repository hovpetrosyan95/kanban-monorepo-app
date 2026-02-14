<template>
  <div class="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
    <main class="flex-1 pb-16 lg:pb-0 lg:pl-20">
      <slot />
    </main>

    <Navbar />
  </div>
</template>
