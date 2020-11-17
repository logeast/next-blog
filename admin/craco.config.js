import CracoLessPlugin from 'craco-less';

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#296bef' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
