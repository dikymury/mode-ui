<template>
  <div class="w-full max-w-[1350px] mx-auto pt-9 px-8">
    <h1 class="font-bold text-4xl mx-auto w-fit text-primary">ModeUi</h1>
    <p class="font-medium text-lg mx-auto w-fit mb-5">Design System For Mode Developer By Diky</p>
    <div class="bg-white-1 p-4 rounded-lg">
      <h2 class="font-semibold text-lg mb-2 border-b border-primary">Element</h2>
      <ul class="gap-3 grid">
        <li class="bg-white rounded-md px-3 py-2">
          <h3 class="font-medium text-base border-b border-gray-2 mb-2">Avatar</h3>
          <p class="text-xs mb-2 max-w-[800px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic expedita ducimus
            repellendus consequatur ullam praesentium, at eveniet, quod deserunt odit accusantium ab
            vel minus harum eius fuga exercitationem dolorem! Dolorum!
          </p>
          <div class="relative w-full mb-2">
            <h4 class="text-sm mb-2">Demo :</h4>
            <div class="flex gap-4 flex-wrap">
              <base-avatar>
                <img :src="imgUser1" alt="user1" />
              </base-avatar>
              <base-avatar>
                <img :src="imgUser2" alt="user1" />
              </base-avatar>
            </div>
          </div>
          <div class="relative w-full">
            <h4 class="text-sm mb-2">Code :</h4>
            <code>
              -
              <!-- <base-avatar><img :src="imgUser1" alt="user1" /> </base-avatar> -->
            </code>
          </div>
        </li>
        <li class="bg-white rounded-md px-3 py-2">
          <h3 class="font-medium text-base border-b border-gray-2 mb-2">Badge</h3>
          <p class="text-xs mb-2 max-w-[800px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic expedita ducimus
            repellendus consequatur ullam praesentium, at eveniet, quod deserunt odit accusantium ab
            vel minus harum eius fuga exercitationem dolorem! Dolorum!
          </p>
          <div class="relative w-full mb-2">
            <h4 class="text-sm mb-2">Demo :</h4>
            <div class="flex gap-2 flex-wrap">
              <base-chip color="success">Success</base-chip>
              <base-chip color="primary">Submited</base-chip>
              <base-chip color="blue">Information</base-chip>
              <base-chip color="error">Failed</base-chip>
            </div>
          </div>
          <div class="relative w-full">
            <h4 class="text-sm mb-2">Code :</h4>
            <code> - </code>
          </div>
        </li>
        <li class="bg-white rounded-md px-3 py-2">
          <h3 class="font-medium text-base border-b border-gray-2 mb-2">Button</h3>
          <p class="text-xs mb-2 max-w-[800px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic expedita ducimus
            repellendus consequatur ullam praesentium, at eveniet, quod deserunt odit accusantium ab
            vel minus harum eius fuga exercitationem dolorem! Dolorum!
          </p>
          <div class="relative w-full mb-2">
            <h4 class="text-sm mb-2">Demo :</h4>
            <div class="flex gap-2 flex-wrap">
              <!-- <base-button iconRight="IconStatus">Submit</base-button>
              <base-button iconRight="IconStatus" outlined>Submit</base-button>
              <base-button color="error">Cancel</base-button>
              <base-button color="error" outlined>Cancel</base-button> -->
            </div>
          </div>
          <div class="relative w-full">
            <h4 class="text-sm mb-2">Code :</h4>
            <code> - </code>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseAvatar from "./components/elements/BaseAvatar.vue"
import BaseChip from "./components/elements/BaseChip.vue"
// import * as BaseBadge from "./components/elements/BaseBadge.vue"

const imgUser1 = require("./assets/images/components/user/user1.jpg")
const imgUser2 = require("./assets/images/components/user/user-none.png")
</script>
