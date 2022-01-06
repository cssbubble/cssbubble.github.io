module.exports = {
  content: [
    './docs/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'sp-very-dark-magenta' : 'hsl(300, 43%, 22%)',
        'sp-soft-pink' : 'hsl(333, 80%, 67%)',
        'sp-dark-grayish-magenta' : 'hsl(303, 10%, 53%)',
        'sp-light-grayish-magenta' : 'hsl(300, 24%, 96%)',
        
        'sppg-customCyan' : 'hsl(179, 62%, 43%)',
        'sppg-brightYellow': 'hsl(71, 73%, 54%)',
        'sppg-lightGray': 'hsl(204, 43%, 93%)',
        'sppg-grayishBlue': 'hsl(218, 22%, 67%)',
      },
      maxWidth: {
          's' : '375px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
