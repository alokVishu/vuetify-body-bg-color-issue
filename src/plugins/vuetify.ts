import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
    light: {
      dark: false,
      colors: {
        'background': '#f4f5fa',
        'on-background': '#5e5669',
      },
    },
    dark: {
      dark: true,
      colors: {
        'background': '#28243d',
        'on-background': '#E8E8F1',
      },
    },
  },
 }      
})
