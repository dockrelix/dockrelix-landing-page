<template>
  <NuxtLayout name="404">
    <div class="max-w-2xl mt-44 mx-auto items-center text-center">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#302c2c] leading-tight lg:leading-[1.2]"
      >
        You have ran into a
        <span
          class="bg-[#582929] text-white px-4 rounded-xl text-3xl sm:text-4xl lg:text-5xl text-nowrap"
          >404 Error</span
        >
      </h1>
      <p class="text-[#585252] text-xl sm:text-2xl mb-10 mt-5">
        The page you are looking for does not exist. You might want to go back
        home ;) <br />
      </p>
      <NuxtLink
        to="/"
        class="bg-[#302c2c] hover:bg-[#615959 transition-colors text-white px-4 py-2 rounded-xl text-lg font-semibold"
        >Go back home</NuxtLink
      >
    </div>
  </NuxtLayout>
</template>
