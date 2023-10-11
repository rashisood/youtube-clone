/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {screens:{
      // 'xs':{'max':'375px'},
      'xs':{'min':'0px','max': '767px'},
      'md':{'min':'768px','max': '1023px'},
      'lg': '1024px',
      'xl': '1280px',
    },},
  },
  plugins: [],
};
