<template>
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto p-4"
  >
    <div class="max-w-2xl">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#302c2c] leading-tight lg:leading-[1.2]"
      >
        Painless management UI for
        <span
          class="bg-[#393231] text-white px-4 rounded-xl text-3xl sm:text-4xl lg:text-5xl text-nowrap"
          >Docker Swarm</span
        >
      </h1>
    </div>
    <div class="max-w-md mt-10 lg:mt-0">
      <p class="text-[#585252] text-xl sm:text-2xl mt-5">
        Dockrelix makes managing your Docker Swarm cluster a breeze.
      </p>
      <div class="flex flex-col sm:flex-row gap-2 mt-5">
        <NuxtLink
          to="#install"
          class="bg-[#302c2c] hover:bg-[#443d3c] transition-colors text-white px-4 py-2 rounded-xl text-lg font-semibold"
          >Get started</NuxtLink
        >
        <NuxtLink
          to="https://docs.dockrelix.org"
          class="text-[#615959] hover:text-[#302c2c] transition-colors px-4 py-2 rounded-xl text-lg font-semibold"
          >Read the docs</NuxtLink
        >
      </div>
    </div>
  </div>
  <div class="mt-10 lg:mt-28">
    <NuxtImg src="/dashboard.png" alt="Dockrelix" class="rounded-xl w-full" />
  </div>
  <div
    id="install"
    class="flex flex-col justify-center mt-20 p-6 sm:p-10 lg:p-20 bg-[#1d1a1a] rounded-lg"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#fcf6f4]">
        Deploy - In just one command!
      </h2>
      <p class="text-[#fcf6f4] text-base sm:text-lg lg:text-xl mt-5">
        Dockrelix is still unreleased and the command below is not yet
        functional.
      </p>
    </div>

    <code
      class="text-xs overflow-auto sm:text-sm lg:text-base mt-10 mx-auto text-left hidden sm:inline-flex items-center space-x-4 bg-[#302c2c] text-white rounded-lg p-4 pl-6"
    >
      <span class="flex gap-4">
        <span class="shrink-0 text-[#fcf6f4]"> $ </span>

        <span class="flex-1 overflow-x-auto">
          curl -sSL https://get.dockrelix.org/ | CHANNEL=stable sh
        </span>
      </span>

      <svg
        v-if="!copied"
        class="shrink-0 hover:cursor-pointer h-5 w-5 transition text-[#fcf6f4] group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        @click="handleCopy"
      >
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
          d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
        ></path>
      </svg>
      <svg
        v-else
        class="shrink-0 h-5 w-5 transition text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </code>
    <button
      class="mt-5 mx-auto bg-[#383434] px-4 py-2 rounded-md text-[#fcf6f4] text-sm sm:hidden block"
      @click="handleCopy"
    >
      {{ copied ? "Copied!" : "Copy command" }}
    </button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Dockrelix • Simple and painless Docker Swarm management UI",
  meta: [
    {
      name: "description",
      content:
        "Dockrelix makes managing your Docker Swarm Cluster a breeze. Start properly managing and monitoring your Docker Swarm Cluster with Dockrelix for free now! Deployable with just one command!",
    },
    {
      name: "author",
      content: "Dockrelix",
    },
    {
      name: "publisher",
      content: "Dockrelix",
    },
    {
      name: "keywords",
      content: "Docker, Docker Swarm, management UI, Dockrelix",
    },
    {
      property: "og:title",
      content: "Dockrelix • Simple and painless Docker Swarm management UI",
    },
    {
      property: "og:description",
      content:
        "Dockrelix makes managing your Docker Swarm Cluster a breeze. Start properly managing and monitoring your Docker Swarm Cluster with Dockrelix for free now! Deployable with just one command!",
    },
    {
      property: "og:image",
      content: "/hero-light.png",
    },
    {
      property: "og:url",
      content: "https://dockrelix.org",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dockrelix.org",
    },
  ],
});
useSeoMeta({
  robots: "index, follow",
});

function handleCopy() {
  navigator.clipboard.writeText(
    "curl -sSL https://get.dockrelix.org/ | CHANNEL=stable sh"
  );
  copied.value = true;

  setTimeout(() => {
    copied.value = false;
  }, 2000);
}

const copied = ref(false);
</script>
