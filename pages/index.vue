<template>
  <div class="bg-[#161616] py-24 px-6 sm:px-10 overflow-hidden relative">
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

    <div
      class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10"
    >
      <div class="lg:col-span-6 space-y-8">
        <div
          class="inline-block px-3 py-1 bg-[#4ecdc4] bg-opacity-20 text-[#4ecdc4] rounded-full text-sm font-bold tracking-wider mb-2"
        >
          Dockrelix v1.0.0 releasing soon!
        </div>
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Painless management for
          <div class="mt-2 relative inline-flex">
            <span
              class="relative z-10 bg-gradient-to-r from-[#66bdc4] to-[#6bd5ff] text-transparent bg-clip-text"
              >Docker Swarm</span
            >
            <span
              class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#4ecdc4] to-[#6bd5ff] rounded-full"
            ></span>
          </div>
        </h1>
        <p class="text-[#e1e1e1] text-xl sm:text-2xl leading-relaxed">
          Dockrelix transforms complex Docker Swarm operations into simple,
          intuitive interactions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#install"
            class="bg-[#4ecdc4] hover:bg-[#3dbdb5] transition-all duration-300 text-[#1a1a2e] px-8 py-4 rounded-xl text-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Get Started
          </a>
          <a
            href="https://docs.dockrelix.org"
            class="text-white hover:text-[#4ecdc4] transition-colors border-2 border-white hover:border-[#4ecdc4] px-8 py-4 rounded-xl text-lg font-semibold text-center flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
              />
            </svg>
            Documentation
          </a>
        </div>
      </div>

      <div class="lg:col-span-6 relative">
        <div
          class="relative transform hover:scale-105 transition-transform duration-500 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 pointer-events-none"
          ></div>

          <NuxtImg
            src="/dashboard.png"
            alt="Dockrelix dashboard"
            class="w-full rounded-xl"
          />
        </div>

        <div
          class="absolute -right-8 -top-8 w-16 h-16 bg-[#4ecdc4] bg-opacity-20 rounded-xl transform rotate-12"
        ></div>
        <div
          class="absolute -left-5 bottom-1/4 w-8 h-8 bg-[#6bd5ff] bg-opacity-30 rounded-lg transform -rotate-12"
        ></div>
      </div>
    </div>
  </div>

  <div
    id="install"
    class="relative py-28 px-6 sm:px-10 bg-gradient-to-b from-[#1f1d1d] to-[#161616]"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1 bg-[#4ecdc4] bg-opacity-20 text-[#4ecdc4] rounded-full text-sm font-bold tracking-wider mb-4"
          >DEPLOYMENT</span
        >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Deploy in One Command
        </h2>
        <p class="text-[#e1e1e1] text-lg max-w-3xl mx-auto">
          Get up and running in seconds. Just run the command below to install
          Dockrelix on your system.
          <span class="block mt-2 text-base text-[#6bd5ff]"
            >Note: Dockrelix is still unreleased and this command is not yet
            functional.</span
          >
        </p>
      </div>

      <div
        class="relative bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <div
          class="flex items-center bg-white/5 px-6 py-3 border-b border-white/20"
        >
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-[#ff6b6b] rounded-full"></div>
            <div class="w-3 h-3 bg-[#ffbb4d] rounded-full"></div>
            <div class="w-3 h-3 bg-[#4ecdc4] rounded-full"></div>
          </div>
          <div class="ml-4 text-white/60 text-sm font-medium">Terminal</div>
        </div>

        <div class="p-6 sm:p-8 relative md:block hidden">
          <div class="group">
            <pre
              class="text-sm sm:text-base font-mono overflow-x-auto p-4 rounded-lg bg-white/5 text-white whitespace-pre-wrap relative"
            >
<span class="text-[#4ecdc4]">$</span> <span class="text-white">curl -sSL https://get.dockrelix.org/ | CHANNEL=stable sh</span></pre>

            <button
              @click="handleCopy"
              class="absolute right-11 top-1/2 transform -translate-y-1/2 bg-[#4ecdc4] hover:bg-[#3dbdb5] text-[#1e1f30] px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center transition-all duration-200 opacity-90 hover:opacity-100"
            >
              <svg
                v-if="!copied"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path
                  d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ copied ? "Copied!" : "Copy" }}
            </button>
          </div>
        </div>

        <div class="p-6 sm:p-8 relative md:hidden block mt-5">
          <button
            @click="handleCopy"
            class="absolute top-1/2 transform -translate-y-1/2 bg-[#4ecdc4] hover:bg-[#3dbdb5] text-[#1e1f30] px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center transition-all duration-200 opacity-90 hover:opacity-100"
          >
            <svg
              v-if="!copied"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path
                d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ copied ? "Copied!" : "Copy installation command" }}
          </button>
        </div>

        <div class="px-6 sm:px-8 pb-8">
          <div class="rounded-lg overflow-hidden border-t border-white/10">
            <div
              class="bg-white/5 p-4 font-mono text-xs sm:text-sm text-white/80"
            >
              <div class="animate-pulse">
                <div class="flex items-center">
                  <div class="h-3 bg-white/10 rounded w-1/6 mb-2"></div>
                </div>
                <div class="flex items-center">
                  <div class="h-3 bg-white/10 rounded w-3/6 mb-2"></div>
                </div>
                <div class="flex items-center">
                  <div class="h-3 bg-[#4ecdc4]/20 rounded w-2/3 mb-2"></div>
                </div>
                <div class="flex items-center">
                  <div class="h-3 bg-white/10 rounded w-1/4 mb-2"></div>
                </div>
                <div class="flex items-center">
                  <div class="h-3 bg-white/10 rounded w-1/2 mb-2"></div>
                </div>
                <div class="flex items-center mt-4">
                  <span class="text-[#4ecdc4] mr-1">></span>
                  <span class="text-white/80"
                    >Dockrelix successfully installed!</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" class="grid md:grid-cols-3 gap-8 mt-20">
        <div
          class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#4ecdc4]/30 transition-all hover:bg-white/10"
        >
          <div
            class="w-12 h-12 bg-[#4ecdc4] bg-opacity-20 rounded-lg flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#4ecdc4]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-white text-lg font-semibold mb-2">Lightning Fast</h3>
          <p class="text-white/70 text-sm">
            Deploy and start managing your Docker Swarm in under 2 minutes.
          </p>
        </div>

        <div
          class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#4ecdc4]/30 transition-all hover:bg-white/10"
        >
          <div
            class="w-12 h-12 bg-[#4ecdc4] bg-opacity-20 rounded-lg flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#4ecdc4]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="text-white text-lg font-semibold mb-2">
            Secure By Design
          </h3>
          <p class="text-white/70 text-sm">
            Built with security best practices and fully auditable open source
            code.
          </p>
        </div>

        <div
          class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#4ecdc4]/30 transition-all hover:bg-white/10"
        >
          <div
            class="w-12 h-12 bg-[#4ecdc4] bg-opacity-20 rounded-lg flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#4ecdc4]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <h3 class="text-white text-lg font-semibold mb-2">
            Zero Dependencies
          </h3>
          <p class="text-white/70 text-sm">
            Dockrelix runs with minimal resources and no external dependencies.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div id="billing" class="py-24 max-w-7xl mx-auto px-6 sm:px-10">
    <div class="text-center mb-16">
      <span
        class="inline-block px-4 py-1 bg-[#4ecdc4] bg-opacity-20 text-[#4ecdc4] rounded-full text-sm font-bold tracking-wider mb-4"
        >HOSTING</span
      >
      <h2 class="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6">
        Managed Dockrelix Instances
      </h2>
      <p class="text-[#615959] text-lg max-w-2xl mx-auto leading-relaxed">
        Fully-managed KVM root servers with Dockrelix pre-installed and ready to
        go. Choose from Manager or Worker roles, configure your specs, and get
        started in minutes.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-3 mt-14">
      <div
        class="rounded-xl border border-[#cfcfcf] p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
      >
        <div>
          <h3 class="text-2xl font-bold text-[#1a1a2e]">Manager - Small</h3>
          <div class="h-1 w-16 bg-[#4ecdc4] rounded-full my-4"></div>
          <ul class="mt-6 text-[#615959] space-y-3 text-base">
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              2 vCPU
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              4 GB RAM
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              50 GB SSD
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              1 Gbps Uplink
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Dockrelix Pre-installed
            </li>
          </ul>
        </div>
        <div class="mt-8">
          <p class="text-2xl font-bold text-[#1a1a2e]">€11/mo</p>
        </div>
      </div>
      <div
        class="rounded-xl border-2 border-[#4ecdc4] p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between relative"
      >
        <div
          class="absolute top-0 right-0 bg-[#4ecdc4] text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg"
        >
          Popular
        </div>
        <div>
          <h3 class="text-2xl font-bold text-[#1a1a2e]">Manager - Pro</h3>
          <div class="h-1 w-16 bg-[#4ecdc4] rounded-full my-4"></div>
          <ul class="mt-6 text-[#615959] space-y-3 text-base">
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              4 vCPU
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              8 GB RAM
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              100 GB NVMe
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              1 Gbps Uplink
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Dockrelix Pre-installed
            </li>
          </ul>
        </div>
        <div class="mt-8">
          <p class="text-2xl font-bold text-[#1a1a2e]">€30.25/mo</p>
        </div>
      </div>

      <div
        class="rounded-xl border border-[#cfcfcf] p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
      >
        <div>
          <h3 class="text-2xl font-bold text-[#1a1a2e]">Worker Node</h3>
          <div class="h-1 w-16 bg-[#4ecdc4] rounded-full my-4"></div>
          <ul class="mt-6 text-[#615959] space-y-3 text-base">
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              2 vCPU
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              2 GB RAM
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              30 GB SSD
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              1 Gbps Uplink
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-[#4ecdc4]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Dockrelix Pre-installed
            </li>
          </ul>
        </div>
        <div class="mt-8">
          <p class="text-2xl font-bold text-[#1a1a2e]">€6/mo</p>
        </div>
      </div>
    </div>
  </div>

  <div id="configurator" class="pb-24 max-w-7xl mx-auto px-6 sm:px-10">
    <div
      class="rounded-xl border border-[#cfcfcf] p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <h2 class="text-xl lg:text-2xl font-bold text-[#1a1a2e] mb-6">
        Configure your own KVM server!
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="space-y-4">
            <label class="block text-lg font-semibold text-[#1a1a2e]"
              >Node Type</label
            >
            <div class="flex space-x-4">
              <button
                @click="setNodeType('manager')"
                :class="[
                  'px-6 py-3 rounded-lg text-center w-1/2 transition-all duration-300',
                  nodeType === 'manager'
                    ? 'bg-[#4ecdc4] text-[#1a1a2e] font-semibold'
                    : 'bg-[#f0f0f0] text-[#615959] hover:bg-[#e0e0e0]',
                ]"
              >
                Manager
              </button>
              <button
                @click="setNodeType('worker')"
                :class="[
                  'px-6 py-3 rounded-lg text-center w-1/2 transition-all duration-300',
                  nodeType === 'worker'
                    ? 'bg-[#4ecdc4] text-[#1a1a2e] font-semibold'
                    : 'bg-[#f0f0f0] text-[#615959] hover:bg-[#e0e0e0]',
                ]"
              >
                Worker
              </button>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <label class="block text-lg font-semibold text-[#1a1a2e]"
                >vCPU Cores</label
              >
              <span class="text-[#4ecdc4] font-bold">{{ cpuCores }} Cores</span>
            </div>
            <input
              type="range"
              v-model="cpuCores"
              min="1"
              max="16"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4ecdc4]"
            />
            <div class="flex justify-between text-xs text-[#615959]">
              <span>1 Core</span>
              <span>16 Cores</span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <label class="block text-lg font-semibold text-[#1a1a2e]"
                >RAM</label
              >
              <span class="text-[#4ecdc4] font-bold">{{ ram }} GB</span>
            </div>
            <input
              type="range"
              v-model="ram"
              min="1"
              max="32"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4ecdc4]"
            />
            <div class="flex justify-between text-xs text-[#615959]">
              <span>1 GB</span>
              <span>32 GB</span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <label class="block text-lg font-semibold text-[#1a1a2e]"
                >Storage</label
              >
              <span class="text-[#4ecdc4] font-bold">{{ storage }} GB</span>
            </div>
            <input
              type="range"
              v-model="storage"
              min="25"
              max="500"
              step="25"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4ecdc4]"
            />
            <div class="flex justify-between text-xs text-[#615959]">
              <span>25 GB</span>
              <span>500 GB</span>
            </div>
          </div>

          <div class="space-y-4">
            <label class="block text-lg font-semibold text-[#1a1a2e]"
              >Storage Type</label
            >
            <div class="flex space-x-4">
              <button
                @click="setStorageType('ssd')"
                :class="[
                  'px-6 py-3 rounded-lg text-center w-1/2 transition-all duration-300',
                  storageType === 'ssd'
                    ? 'bg-[#4ecdc4] text-[#1a1a2e] font-semibold'
                    : 'bg-[#f0f0f0] text-[#615959] hover:bg-[#e0e0e0]',
                ]"
              >
                SSD
              </button>
              <button
                @click="setStorageType('nvme')"
                :class="[
                  'px-6 py-3 rounded-lg text-center w-1/2 transition-all duration-300',
                  storageType === 'nvme'
                    ? 'bg-[#4ecdc4] text-[#1a1a2e] font-semibold'
                    : 'bg-[#f0f0f0] text-[#615959] hover:bg-[#e0e0e0]',
                ]"
              >
                NVMe
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="bg-[#f9f9f9] rounded-xl p-6 border border-[#e0e0e0]">
            <h3 class="text-xl font-bold text-[#1a1a2e] mb-4">
              Configuration Summary
            </h3>
            <ul class="space-y-3 mb-6">
              <li class="flex justify-between">
                <span class="text-[#615959]">Node Type:</span>
                <span class="font-medium text-[#1a1a2e]">{{
                  nodeTypeDisplay
                }}</span>
              </li>
              <li class="flex justify-between">
                <span class="text-[#615959]">CPU:</span>
                <span class="font-medium text-[#1a1a2e]"
                  >{{ cpuCores }} vCPU</span
                >
              </li>
              <li class="flex justify-between">
                <span class="text-[#615959]">RAM:</span>
                <span class="font-medium text-[#1a1a2e]">{{ ram }} GB</span>
              </li>
              <li class="flex justify-between">
                <span class="text-[#615959]">Storage:</span>
                <span class="font-medium text-[#1a1a2e]"
                  >{{ storage }} GB {{ storageTypeDisplay }}</span
                >
              </li>
              <li class="flex justify-between">
                <span class="text-[#615959]">Network:</span>
                <span class="font-medium text-[#1a1a2e]">1 Gbps Uplink</span>
              </li>
            </ul>

            <div
              class="border-t border-[#e0e0e0] pt-4 flex justify-between items-center"
            >
              <span class="text-lg font-semibold text-[#1a1a2e]"
                >Monthly Price:</span
              >
              <span class="text-2xl font-bold text-[#4ecdc4]"
                >€{{ calculatedPrice }}/mo</span
              >
            </div>
          </div>

          <div
            class="bg-[#161616] rounded-xl p-6 text-white relative overflow-hidden"
          >
            <div class="absolute inset-0 opacity-10">
              <div
                class="absolute inset-0"
                style="
                  background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');
                  background-size: 24px 24px;
                "
              ></div>
            </div>

            <h3 class="text-xl font-bold mb-3 relative z-10">
              Ready to Deploy?
            </h3>
            <p class="text-white/80 mb-6 relative z-10">
              Our nodes are immediately available for deployment after order.
            </p>

            <button
              disabled
              class="w-full bg-[#4ecdc59a] cursor-default text-[#1a1a2e] px-6 py-3 rounded-xl text-lg font-semibold text-center shadow-lg relative z-10"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
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

const nodeType = ref("manager");
const cpuCores = ref(1);
const ram = ref(1);
const storage = ref(25);
const storageType = ref("ssd");

const nodeTypeDisplay = computed(() => {
  return nodeType.value === "manager" ? "Manager" : "Worker";
});

const storageTypeDisplay = computed(() => {
  return storageType.value === "nvme" ? "NVMe" : "SSD";
});
const calculatedPrice = computed(() => {
  const basePrice = 2.5;
  let price = basePrice;

  const baseCpu = 1;
  const cpuPrice = 1.5;
  if (cpuCores.value > baseCpu) {
    price += (cpuCores.value - baseCpu) * cpuPrice;
  }

  const baseRam = 1;
  const ramPrice = 1.5;
  if (ram.value > baseRam) {
    price += (ram.value - baseRam) * ramPrice;
  }

  const baseStorage = 25;
  const isNvme = storageType.value === "nvme";
  const storagePrice = isNvme ? 0.15 : 0.1;
  if (storage.value > baseStorage) {
    price += (storage.value - baseStorage) * storagePrice;
  }

  if (isNvme) {
    price += 1.5;
  }

  price += 2;

  return Math.round(price * 100) / 100;
});

function setNodeType(type) {
  nodeType.value = type;
  if (type === "manager") {
    cpuCores.value = 1;
    ram.value = 1;
    storage.value = 25;
    storageType.value = "ssd";
  } else {
    cpuCores.value = 1;
    ram.value = 1;
    storage.value = 25;
    storageType.value = "ssd";
  }
}

function setStorageType(type) {
  storageType.value = type;
}
</script>
