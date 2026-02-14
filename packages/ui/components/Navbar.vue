<template>
  <nav
    class="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-border bg-card-bg lg:top-0 lg:left-0 lg:h-screen lg:w-20 lg:flex-col lg:justify-start lg:border-r lg:border-t-0 lg:pt-10"
  >
    <NavLink to="/">
      <span class="i-heroicons-home-20-solid h-6 w-6" />
    </NavLink>

    <NavLink to="/board">
      <span class="i-heroicons-squares-2x2-20-solid h-6 w-6" />
    </NavLink>

    <NavLink to="/settings" class="lg:mt-auto lg:mb-10">
      <span class="i-heroicons-cog-6-tooth-20-solid h-6 w-6" />
    </NavLink>
  </nav>
</template>
