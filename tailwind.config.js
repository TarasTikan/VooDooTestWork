/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        widthContainer: '1330px',
        widthMobileContainer: '342px',
        widthContainerMain: '1272px',
        widthBasketContainer: '362px',
        widthInfoProduct: '231px',
        widthImortantText: '1024',
        widthContainerInfoFooter: '300px',
      },
      fontSize: {
        infoText: '16px',
        importantText: '14px',
      },
      screens: {
        sm: '390px',
        lg: '1028px',
      },
    },
  },
  plugins: [],
};
