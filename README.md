# Writing mode Tailwind Plugin

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-writing-mode
```

## Usage

```js
require('tailwindcss-writing-mode')({
	variants: ['responsive', 'hover']
})
```

```
.writing-mode-horizontal { writing-mode: horizontal-tb }
.writing-mode-vertical { writing-mode: vertical-lr }
.writing-mode-vertical-rl { writing-mode: vertical-rl }
```
