<?php
/**
 * Plugin Name:       Rust Starter
 * Description:       An example block built using Rust and TypeScript
 * Requires at least: 6.6
 * Requires PHP:      8.1
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
    wp_set_script_translations('kevinbatdorf/rust-starter', 'rust-starter');
});
