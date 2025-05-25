const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = defaultConfig.map(config => ({
    ...config,
    plugins: [
        ...(config.plugins || []),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.'),
            extraArgs: '--no-typescript --target web',
            watchDirectories: [path.resolve(__dirname, 'rust')],
        }),
    ],
    experiments: { ...(config.experiments || {}), asyncWebAssembly: true },
}));
