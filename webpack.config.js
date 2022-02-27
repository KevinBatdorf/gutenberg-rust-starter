const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
module.exports = {
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.'),
        }),
    ],
    experiments: {
        asyncWebAssembly: true,
    },
}
