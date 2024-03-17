<script setup>
const props = defineProps({
  size: {
    // type: 'String',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value)
    },
    default: 'sm'
  },
  variant: {
    validator(value) {
      return ['flat', 'tonal', 'outlined'].includes(value)
    },
    default: 'flat'
  }
})
</script>

<template>
  <div
    class="flex flex-col p-3"
    :class="[
      size === 'sm' ? 'w-44 h-36' : size === 'md' ? 'w-60 h-52' : 'w-80 h-72',
      variant === 'outlined'
        ? 'border border-slate-300'
        : variant === 'tonal'
        ? 'bg-slate-300'
        : 'shadow-md rounded-xl'
    ]"
  >
    <div
      class="font-bold"
      :class="
        size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
      "
    >
      <slot name="title">Untitled</slot>
      <!-- Untitled is a default fallback -->
    </div>
    <div
      class="font-semibold"
      :class="size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'"
    >
      <slot name="subtitle">replace with your subtitle</slot>
    </div>
    <div
      class="pt-2"
      :class="size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'"
    >
      <slot name="content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae
        maiores perspiciatis deserunt, sint ipsam hic magnam reprehenderit.
      </slot>
    </div>
    <div class="flex justify-end gap-3 pt-3">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped></style>