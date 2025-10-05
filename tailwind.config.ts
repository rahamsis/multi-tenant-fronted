import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'depsac': {
          products: "#dce5e4",
          popularProducts: '#dce5e4',
          greenBanner: '#0077B6',
          chat: '#FAFAFA',
          nosotros: 'rgba(59, 93, 80, 0.2)',
        }
      },
      backgroundImage: {
        // para depsac
        'depsac-banner-right': "url('/depsac/assets/dots-light.svg')",
        'depsac-whychoose': "url('/assets/dots-yellow.svg')",
        'depsac-weHelp': "url('/assets/dots-green.svg')"
      },
      colors: {
        'importonyperu': {
          primary: '#1F1F1F',
          secondary: "#696969",
          Gray: "#f0f0f0",
        },
        'depsac': {
          primary: "#0077B6", //Azul frío
          secondary: "#6C757D", //Gris metálico
          resaltado: "#F77F00", //Naranja técnico
          fondo_claro: "#E0F7FA", //Azul hielo
          gray_dark: "#2C2C2C", //Gris oscuro
          gray_light: "#F9BF29", //amarillo
          acento: "#FFC300", //amarillo tecnico
          wychoose: "#6a6a6a",
          footer: '#3b5d50',
          imputFootr: '#212529',
          borderInputFooter: '#ced4da',
          iconsFoot: '#dce5e4',
          whatsapp: '#0df053',
          paragraph: "rgba(255, 255, 255, 0.5)",
        },
        'cygrefrisac': {
          preHeader: '#000000',
          header: '#398E9E',
        },
        'lezcor': {
          primary: '#059669',
          secondary: '#10b981',
        },
        'oishipop': {
          primary: '#FF69B4', // Rosa brillante
          secondary: '#FFB6C1', // Rosa claro
          accent: '#800080', // Púrpura
          background: '#FFF0F5', // Lavanda claro
          foreground: '#4B0082', // Índigo
          muted: '#D8BFD8', // Thistle
        }
      },
      gridTemplateColumns: {
        // para depsac
        "depsac-weHelp": "repeat(27, 1fr)"
      },
      borderColor: {
        'depsac': {
          weHelp: "#3b5d50",
        }
      },
      transitionProperty: {
        // para depsac
        'depsac-products': '.3s all ease'
      },
    },
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config