# Gutenberg + Rust + TypeScript

This is a minimum block plugin template to rapidly get started building WP blocks using Rust + TypeScript.

- Follow me on Twitter: https://twitter.com/kevinbatdorf
- Sponsor this package: https://github.com/sponsors/KevinBatdorf/

### Getting Started
- Run `npm install` to install necessary packages
- Run `npm run rename <text-domain> <label>` to rename the script files.
- Run `npm run start` to start the dev mode

## Features
### Rust
Rust is a systems programming language with a strong type system, memory safety, and great documentation. Beyond that it's fun to write and has a great community of helpful developers. Rust also compiles into WebAssembly, letting us utilize the power of systems programming on the web.

Read more about Rust: https://www.rust-lang.org/

### TypeScript
TypeScript is essentially JavaScript with type safety. TypeScript will save you plenty of headaches while writing your code. Ever try to access a JS property on undefined? TypeScript will warn you before you even press save.

Read more about TypeScript: https://www.typescriptlang.org/

### Tailwind CSS (heavily scoped)
Tailwind CSS is a utility framework designed for rapid building. Rather than maintaining CSS/scss files, you use specific class names directly in your markup, keeping the component logic, layout, and design in one place. You should default to WordPress components and classes when possible, and use Tailwind for everything beyond that.

This starter repo builds on top of Tailwind in a few useful ways:
- Separates editor and frontend styles and processes them in isolation, keeping the stylesheet size on the frontend to a minimum
- Removes the preflight and global Tailwind styles/animation presets so that there isn't a conflict with other blocks, plugins, etc.
- On frontend styles, padding and margins will only be applied if the block doesn't have inline styling (e.g. `.p-4:not([style*="padding"])`). This lets you define a default while letting users override these values. Open an issue for more info.

Read more about Tailwind CSS: https://tailwindcss.com/

### Cypress e2e testing - coming soon!

### Eject Features
To remove some features, run the following:
- To remove Tailwind, run `npm run eject tailwind`
- To remove Rust, run `npm run eject rust`
