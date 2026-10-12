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
        'importhnostony': {
          primary: '#DC2626',
          primaryhover: '#B91C1C',
          secondary: '#171717',
          dark: '#262626',
          background: '#FFFFFF',
          surface: '#F5F5F5',
          border: '#E5E7EB',
          muted: '#6B7280'
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
        'samar': {
          primary: '#FAF7F2', // 🤍 Marfil
          secondary: '#EEF2E8', // 🌿 Verde salvia muy claro
          primarytwo: '#8A9A7B', // 🌿 Verde salvia
          secondarytwo: '#68755B', // 🪴 Verde oliva suave
          acento: '#D8C3A5', // 🧴 Beige cálido
          acentofemenino: '#D9B8B0', // 🌸 Rosa empolvado
          textoprincipal: '#343633', // 🖤 Gris carbón
          textosecundario: '#77766F', // 🩶 Gris cálido
          bordes: '#DDD8CE', // 🤎 Beige grisáceo
          botonprincipal: '#59684E', // 🌿 Verde profundo
          hoverboton: '#46543D', // 🌿 Verde oscuro
          blanco: '#FFFFFF', // 🤍 Blanco
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