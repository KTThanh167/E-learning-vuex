export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Màu chủ đạo (Xanh Teal trong các button, icons của bạn)
        primary: {
          DEFAULT: 'rgba(73, 187, 189, 1)',
        },
      },
    },
  },
  plugins: [],
}
