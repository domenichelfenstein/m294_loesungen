<script setup>
defineProps({
    description: String,
    src: String
})
</script>
<template>
    <!-- Bild -->
    <div class="image">
          <img class="image__img" :src="src" alt=""/>
          <p class="image__description">
            {{ description }}
          </p>
        </div>
</template>
<style>

/** Bild **/
.image__img {
  aspect-ratio: 640/425;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.image__description {
  color: #9ca3af;
  font-size: .85rem;
  margin-top: 1rem;
}
</style>