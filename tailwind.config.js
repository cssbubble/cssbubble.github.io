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

        'pcc-bg-color': 'hsl(185, 75%, 39%)',

        'ec-customOrange': 'hsl(26, 100%, 55%)',
          'ec-paleOrange': 'hsl(25, 100%, 94%)',
          'ec-veryDarkBlue': 'hsl(220, 13%, 13%)',
          'ec-darkGrayishBlue': 'hsl(219, 9%, 45%)',
          'ec-grayishBlue': 'hsl(220, 14%, 75%)',
          'ec-lightGrayishBlue': 'hsl(223, 64%, 98%)',

          'png-customBlue': 'hsl(223, 87%, 63%)',
            'png-paleBlue': 'hsl(223, 100%, 88%)',
            'png-lightRed': 'hsl(354, 100%, 66%)',
            'png-customGray': 'hsl(0, 0%, 59%)',
            'png-veryDarkBlue': 'hsl(209, 33%, 12%)',
            'chat-paleViolet': 'hsl(276, 100%, 81%)',
            'chat-modViolet': 'hsl(276, 55%, 52%)',
            'chat-dsDarkViolet': 'hsl(271, 15%, 43%)',
            'chat-grayBlue': 'hsl(206, 6%, 79%)',
            'chat-vDarkDsViolet': 'hsl(271, 36%, 24%)',
            'chat-DarkGrayViolet': 'hsl(270, 7%, 64%)',
            'chat-lightMagenta': 'hsl(293, 100%, 63%)',
            'chat-lightViolet': 'hsl(264, 100%, 61%)',
            'chat-lightGrayViolet': 'hsl(270, 20%, 96%)',
            'chat-vLightMagenta': 'hsl(289, 100%, 72%)',
            'hd-violet': 'hsl(257, 40%, 49%)',
            'hd-soft-magenta': 'hsl(300, 69%, 71%)',
            'tg-mod-violet': 'hsl(263, 55%, 52%)',
            'tg-darkGrayBlue': 'hsl(217, 19%, 35%)',
            'tg-darkBlackBlue': 'hsl(219, 29%, 14%)',
            'tg-lightGray': 'hsl(0, 0%, 81%)',
            'tg-lightGrayBlue': 'hsl(210, 46%, 95%)',    
            '4c-custom-red': 'hsl(0, 78%, 62%)',
            '4c-custom-cyan': 'hsl(180, 62%, 55%)',
            '4c-custom-orange': 'hsl(34, 97%, 64%)',
            '4c-custom-blue' : 'hsl(212, 86%, 64%)',
            'nft-very-dark-blue': 'hsl(217, 54%, 11%)',
            'nft-dark-blue': 'hsl(216, 50%, 16%)',
            'line-blue': 'hsl(215, 32%, 27%)',
            'nft-cyan': 'hsl(178, 100%, 50%)',
            'nft-soft-blue': 'hsl(215, 51%, 70%)',
            'intro-form-red': 'hsl(0, 100%, 74%)',
            'intro-form-green': 'hsl(154, 59%, 51%)',
            'intro-form-accent': 'hsl(248, 32%, 49%)',
            'intro-form-blue': 'hsl(246, 25%, 77%)',       
      },
      maxWidth: {
          's' : '375px',
      },
      fontSize: {
        'chat-xxs' : '0.5rem',
        'chat-small': '0.60rem',
      },
      backgroundImage: {
        'intro-form-mb': "url('./images/intro-signup-form/bg-intro-mobile.png')",
        'intro-form-dt': "url('./images/intro-signup-form/bg-intro-desktop.png')",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
