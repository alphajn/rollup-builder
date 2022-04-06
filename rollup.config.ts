import resolve from '@rollup/plugin-node-resolve'; // 在node_模块中查找并绑定第三方依赖项
import json from '@rollup/plugin-json'; // 将 .json 文件转换为 ES6 模块
import commonjs from '@rollup/plugin-commonjs'; // 将CommonJS模块转换为ES6
import alias from '@rollup/plugin-alias'; // 设置别名
import { babel } from '@rollup/plugin-babel'; // rollup babel插件
import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve'; // 开发服务器
import livereload from 'rollup-plugin-livereload'; // 热更新服务
import path from 'path';

import {
    author, name, version, license, main,
} from './package.json';

const banner = `
/**
 * @license
 * @author ${author}
 * @name ${name}
 * @version v${version}
 * Released under the ${license} license.
 */`;

const isProd = process.env.NODE_ENV === 'production'; // 生产环境

export default {
    input: 'src/demo/index.ts',
    output: {
        file: main,
        format: 'esm',
        banner,
    },
    watch: {
        exclude: 'node_modules/**',
    },
    plugins: [
        alias({
            entries: {
                '@': path.resolve(__dirname, 'src'),
            },
        }),
        resolve(),
        json(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
            exclude: 'node_modules/**', // 只编译我们的源代码
        }),
        esbuild({
            target: 'esnext',
            minify: isProd,
        }),
        !isProd && serve({
            host: 'localhost',
            port: 8081,
            open: true,
            // openPage: 'examples/index.html',
            historyApiFallback: 'examples/index.html',
            contentBase: ['dist', 'examples'],
        }),
        !isProd && livereload({
            watch: ['dist', 'examples'],
            verbose: true, // Disable console output
        }),
    ],
};
