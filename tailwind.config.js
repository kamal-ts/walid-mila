/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spinSlow' : 'spin 20s linear infinite'
      }
    },
    fontFamily: {
      adc : ["Dancing Script", 'cursive'],
      def : ["Engagement", 'cursive'],
      lora : ["Lora", 'serif']
    }
  },
  plugins: [],
}

