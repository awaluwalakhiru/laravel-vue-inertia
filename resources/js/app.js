require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, props, app, plugin }) {
        createApp({
            render: () => h(app, props),
        })      //set mixins
            .mixin({
                methods: {
                    //method "hasAnyPermission"
                    hasAnyPermission: function (permissions) {
                        //get permissions from props
                        let allPermissions = this.$page.props.auth.permissions;
                        let hasPermission = false;
                        permissions.forEach(function (item) {
                            if (allPermissions[item]) hasPermission = true;
                        });
                        return hasPermission;
                    }
                },
            })
            .use(plugin).mount(el);
    }
});

InertiaProgress.init();