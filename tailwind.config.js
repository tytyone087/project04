module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff701f"
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['NotoSansKR', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['Pretendard', 'ui-serif', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    extend: {},
  },
plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
}
