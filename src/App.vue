<script setup>
    import { ref } from 'vue';

    import Button from './components/Button/Button.vue'
    import Tooltip from './components/Tooltip/Tooltip.vue'
    import Menu from './components/Menu/Menu.vue'

    // Datos para el Componente 🔰 Tooltip.vue
    const tituloAyuda = ref('Leer Politica de Cookies')
    const textoAyuda = ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in nemo omnis exercitationem corrupti odit optio asperiores magnam? Dignissimos quibusdam modi animi harum aut molestias deserunt, odit nesciunt quos delectus.')
    
    // Secciones para el menú
    const menuLinks = [
        {
            linkName: 'Home',
            linkURL: '/'
        },
        {
            linkName: 'Link #1',
            linkURL: '/linkview',
        },
        {
            linkName: 'Link #2',
            linkURL: '/linkview',
        },
        {
            linkName: 'Link #3',
            linkURL: '/linkview',
        },
        {
            linkName: 'Link #4',
            linkURL: '/linkview',
        },
    ]

    function sayHello(){
        alert('Hola! 🤘');
    }
    
</script>

<template>
    <h3>
        🔰 Menu
    </h3>
    <div id="menu">
        <Menu
            :links="menuLinks"
            menu-class="nav-horizontal"
        />
    </div>
    <!-- <RouterView /> -->
    <h3>
        🔰 Button.vue
    </h3>
    <div id="button-component">
        <Button buttonText="Click aquí" buttonClass="red" @buttonClick="sayHello" />
        <Button buttonText="Click aquí" buttonClass="green" @buttonClick="sayHello" />
        <Button buttonText="Click aquí" buttonClass="blue" @buttonClick="sayHello" />
    </div>

    <h3>
        🔰 Tooltip.vue
    </h3>
    <div id="tooltip-component">
        <Tooltip
            tooltip-title="mostrar ayuda"
            tooltip-description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in nemo omnis exercitationem corrupti odit optio asperiores magnam? Dignissimos quibusdam modi animi harum aut molestias deserunt, odit nesciunt quos delectus." />

        <Tooltip
            :tooltip-title="tituloAyuda"
            :tooltip-description="textoAyuda"
        />
    </div>
</template>

<style scoped>
    button:not(:last-child) {
        margin-right: 20px;
    }
</style>