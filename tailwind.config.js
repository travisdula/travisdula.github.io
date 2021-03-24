module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    enabled: true,
    content: ['./*.html'],
  },
  //purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
      fontFamily: {
          sans: ['JetBrains Mono', 'Font Awesome'],
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-theming')({
      preset: 'nord', // Change your preset here.
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
