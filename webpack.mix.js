import mix from require("laravel-mix");

const tailwindcss = require("tailwindcss");

mix
	.js("src/js/app", "assets")
	.sass("src/scss/app.scss", "assets")
	.options({
		processCssUrls: false,
		postCss: [tailwindcss("tailwind.config.js")],
	});
