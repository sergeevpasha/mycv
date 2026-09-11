const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n,
    sassOptions: {
        // The SCSS still uses @import, slash division and global functions, which work until Dart Sass 2/3
        silenceDeprecations: ['import', 'slash-div', 'global-builtin'],
    },
};

module.exports = nextConfig;
