<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        tooltipTitle: String,
        tooltipDescription: String
    })

    const hide = ref(true);

    const showTooltip = () => {
        hide.value = false;
    };

    const hideTooltip = () => {
        hide.value = true;
    };
</script>

<template>
    <div class="tooltip-container">
        <p
            class="tooltip-title"
            @mouseover="showTooltip"
            @mouseleave="hideTooltip"
        >
            {{ tooltipTitle }}
        </p>
        <div
            class="tooltip-text"
            :class="{ 'tooltip-hide': hide }"
        >
            {{  tooltipDescription }}
        </div>
    </div>
</template>

<style src="./Tooltip.css" scoped />