// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Oryx UI',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/andre-gra/oryx-ui' }],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    { label: 'Introduction', link: '/guides/introduction' },
                    { label: 'Installation', link: '/guides/installation' },
                    { label: 'Theming', link: '/guides/theming' },
                    { label: 'AI Theme Agent', link: '/guides/ai-agent' },
                ],
            },
            {
                label: 'Components',
                items: [
                    { label: 'Accordion', link: '/components/accordion' },
                    { label: 'AlertDialog', link: '/components/alertdialog' },
                    { label: 'NavigationMenu', link: '/components/navigationmenu' },
                    { label: 'Popover', link: '/components/popover' },
                    { label: 'Select', link: '/components/select' },
                ],
            },
            {
                label: 'API Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Demos',
                autogenerate: { directory: 'demos' },
            },
        ],
		}), preact()],
});