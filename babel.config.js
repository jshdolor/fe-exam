module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        [
            'babel-plugin-root-import',
            {
                paths: [
                    {
                        rootPathPrefix: '~',
                        rootPathSuffix: './src',
                    },
                ],
            },
        ],
    ],
};
