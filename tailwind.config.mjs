/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          surface: '#141822',
          card: '#161b28',
        },
        border: {
          DEFAULT: '#1e2437',
          light: '#2a3045',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
          muted: '#5b677d',
          timestamp: '#64748b',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#5558e6',
          dim: 'rgba(99, 102, 241, 0.15)',
        },
        success: { DEFAULT: '#10b981', dim: 'rgba(16, 185, 129, 0.15)' },
        warning: { DEFAULT: '#f59e0b', dim: 'rgba(245, 158, 11, 0.15)' },
        danger: { DEFAULT: '#ef4444', dim: 'rgba(239, 68, 68, 0.15)' },
        info: { DEFAULT: '#3b82f6', dim: 'rgba(59, 130, 246, 0.15)' },
      },
      fontFamily: {
        sans: ['Inter', 'Vazirmatn', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        persian: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
