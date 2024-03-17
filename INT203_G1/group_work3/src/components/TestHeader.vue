<script setup></script>

<template>
  <div class="bg-slate-200 font-sans flex flex-row">
    <div class="w-16">
      <slot name="logo">
        <img src="./home_icons.png" />
      </slot>
    </div>
    <div class="flex justify-center items-center ml-3">
      <slot name="header">
        <div class="flex flex-col">
          <span class="font-semibold">This is Header </span>
          <span> <i> this is headerr</i></span>
        </div>
      </slot>

    </div>
  </div>
</template>

<style scoped></style>
