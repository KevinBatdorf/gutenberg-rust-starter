<?php
/**
 * Plugin Name:       Rust Gutenberg TypeScript
 * Description:       An example block built using Rust and TypeScript
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Kevin Batdorf
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rust-starter
 *
 * @package           kevinbatdorf
 */

add_action('init', function () {
    register_block_type(__DIR__ . '/build');
    add_filter('mime_types', function ($mimes) {
        return array_merge($mimes, [
            'wasm' => 'application/wasm',
        ]);
    });
});
