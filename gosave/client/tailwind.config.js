/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00809D",
        base: "#FCECDD",
        accent: "#D4AF37",
        success: "#4CAF50",
        error: "#E53935",
        text: {
          DEFAULT: "#1E1E1E",
          muted: "#333333",
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "sans-serif"],
        body: ["Inter", "Open Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "4px 4px 12px rgba(0,0,0,0.1)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};