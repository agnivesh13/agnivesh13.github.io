/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep, blue-tinted blacks — the canvas.
        ink: {
          950: '#04060c',
          900: '#070a12',
          800: '#0c1120',
          700: '#131a2e',
        },
        // Electric cyan — the primary AI accent.
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        // Violet — the secondary accent for gradients.
        plasma: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        meteor: 'meteor var(--meteor-duration, 5s) linear infinite',
        aurora: 'aurora 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'shimmer-sweep': {
          '0%': { backgroundPosition: '150% 0' },
          // Long tail so the sheen reads as an occasional glint, not a strobe.
          '60%, 100%': { backgroundPosition: '-150% 0' },
        },
        'border-beam-spin': {
          to: { rotate: '360deg' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-800px)',
            opacity: '0',
          },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.16), 0 0 32px -8px rgba(34,211,238,0.35)',
        'glow-lg': '0 0 0 1px rgba(34,211,238,0.22), 0 0 64px -12px rgba(34,211,238,0.5)',
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 48px -24px rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [],
};
