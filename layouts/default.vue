<script setup lang="ts"></script>

<template>
  <div>
    <Header class="mb-5" />
    <div
      class="container mx-auto p-4 mt-20 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-56"
    >
      <slot />
    </div>
    <Footer class="mt-10" />
  </div>
</template>
