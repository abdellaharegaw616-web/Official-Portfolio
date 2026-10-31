/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316', // Primary orange
          600: '#EA580C', // Dark orange
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        brand: {
          bg: "#F8FAFC",
          text: "#0F172A",
          muted: "#64748B",
          accent: "#F97316",
          accentHover: "#EA580C",
          accentLight: "#FFF7ED",
          border: "#E2E8F0",
          card: "#FFFFFF",
          // Dark mode custom tokens
          darkBg: "#0B0F19",
          darkCard: "#111827",
          darkCardSecondary: "#1F2937",
          darkCardHover: "#1F2937",
          darkBorder: "#1F2937",
          darkText: "#F8FAFC",
          darkMuted: "#94A3B8",
        },
      },
      borderRadius: {
        'bento': '20px',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
