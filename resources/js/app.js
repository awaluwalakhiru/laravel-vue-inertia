require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from "@inertiajs/inertia-vue3";

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, props, app, plugin }) {
        createApp({
            render: () => h(app, props),
        }).use(plugin).mount(el);
    }
});