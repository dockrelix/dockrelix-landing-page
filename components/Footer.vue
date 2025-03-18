<template>
  <footer class="text-[#302c2c] py-10">
    <div
      class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center"
    >
      <div class="max-w-2xl text-center sm:text-left">
        <p class="text-2xl font-semibold">Dockrelix</p>
      </div>

      <p class="text-sm mt-4 sm:mt-0 text-center sm:text-left">
        Made with ❤️ by the Dockrelix team
      </p>

      <div class="text-center sm:text-right mt-4 sm:mt-0">
        <p class="text-sm">
          <a
            href="mailto:contact@dockrelix.org"
            class="text-[#302c2c] hover:text-[#455f86] transition-colors"
            >Contact Us</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@media (max-width: 640px) {
  footer {
    text-align: center;
  }
}
</style>
