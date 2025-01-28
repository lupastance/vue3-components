<script setup>
    const props = defineProps({
        buttonText: String, // Button text to sow inside component
        buttonClass: String // class name for CSS
    })
</script>
<template>
    <button
        :class="buttonClass"
        @click="$emit('buttonClick')"
    >
        {{ buttonText }}
    </button>
</template>
<style src="./Button.css" />