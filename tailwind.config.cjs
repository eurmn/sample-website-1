const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-shade': 'var(--color-primary-shade)',
        'secondary': 'var(--color-secondary)',
        'action': 'var(--color-action)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif'],
      }
    },
  },

  plugins: [],
};

module.exports = config;
