<template>
  <div class="fixed w-full z-50 top-0">
    <div class="flex items-center justify-center bg-[#302c2c] py-2">
      <p class="text-[#fcf6f4] text-[14px] font-semibold">
        Dockrelix is still unreleased
      </p>
    </div>
    <div
      class="flex flex-row bg-[#f0eeed] justify-between max-w-[1700px] mx-auto px-4 py-5"
    >
      <div class="flex flex-row items-center gap-2">
        <NuxtImg src="/logo_dark.png" alt="Dockrelix" class="w-8 h-9" />
        <p class="font-bold text-[#393231] text-xl hidden md:block">
          dockrelix
        </p>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink
          to="https://docs.dockrelix.org"
          class="text-[#635755] hover:text-[#393231] transition-colors font-semibold"
        >
          Docs
        </NuxtLink>
        <span class="text-[#393231] select-none font-semibold">•</span>
        <NuxtLink
          to="#install"
          class="text-[#635755] hover:text-[#393231] transition-colors font-semibold"
        >
          Install
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
