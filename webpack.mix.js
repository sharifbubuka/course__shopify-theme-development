const mix = require("laravel-mix");

const tailwindcss = require("tailwindcss");

mix.disableNotifications();

mix
	.js("src/js/app", "assets")
	.sass("src/scss/app.scss", "assets")
	.options({
		processCssUrls: false,
		postCss: [tailwindcss("tailwind.config.js")],
	});
