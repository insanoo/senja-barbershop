/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('/src/img/logo2.jpg')"
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
