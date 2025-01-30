<script setup>
    const props = defineProps({
        links: Object,
        menuClass: String,
    })
</script>

<template>
    <nav
        :class="menuClass"
    >
        <li
            v-for="link in links"
            :key="link"
        >
            <RouterLink :to="link.linkURL">
                {{ link.linkName }}
            </RouterLink>
        </li>
    </nav>
</template>
<style src="./Menu.css" />