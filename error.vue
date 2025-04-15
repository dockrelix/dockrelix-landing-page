<template>
  <NuxtLayout name="404">
    <div
      class="bg-[#161616] min-h-screen py-24 px-6 sm:px-10 overflow-hidden relative"
    >
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');
            background-size: 24px 24px;
          "
        ></div>
      </div>

      <div
        class="absolute top-20 right-20 w-20 h-20 bg-[#6bd5ff] opacity-10 rounded-full blur-xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 left-32 w-24 h-24 bg-[#4ecdc4] opacity-10 rounded-full blur-xl animate-pulse"
        style="animation-delay: 1s"
      ></div>

      <div class="max-w-2xl mx-auto text-center relative z-10">
        <div class="inline-block text-[#4ecdc4] mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-24 w-24 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Oops! You've hit a
          <div class="mt-2 relative inline-flex">
            <span
              class="relative z-10 bg-gradient-to-r from-[#4ecdc4] to-[#6bd5ff] text-transparent bg-clip-text"
              >404 Error</span
            >
            <span
              class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#4ecdc4] to-[#6bd5ff] rounded-full"
            ></span>
          </div>
        </h1>

        <p class="text-[#e1e1e1] text-xl sm:text-2xl leading-relaxed mt-6 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/"
            class="bg-[#4ecdc4] hover:bg-[#3dbdb5] transition-all duration-300 text-[#1a1a2e] px-8 py-4 rounded-xl text-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
