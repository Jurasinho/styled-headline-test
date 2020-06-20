<script>
    import Vue from 'vue';
    import { headlineMain, headline1, mobileHeadline1, responsiveHeadline } from "../src/entry";

    export default Vue.extend({
        name: 'ServeDev',
        components: {
            headlineMain,
            headline1,
            mobileHeadline1,
            responsiveHeadline
        }
    });
</script>

<template>
    <div id="app">
        <headline-main>This is headline main</headline-main>
        <headline-main forced-down="true">This is headline main with forced size down.</headline-main>
        <headline-1>I'm headline 1 for landing pages</headline-1>
        <mobile-headline-1>I'm mobile version of headline1</mobile-headline-1>
        <responsive-headline>My name is responsive headline and I change size if viewport is under 576px</responsive-headline>
    </div>
</template>
