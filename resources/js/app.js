require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import AppLayout from '@/Layouts/AppLayout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'simdBOS';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const page = require(`./Pages/${name}.vue`).default
        if (page.layout === undefined && !name.startsWith('Public/')) {
          page.layout = AppLayout
        }
        return page
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#133FDC' });
