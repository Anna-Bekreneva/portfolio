// https://gist.github.com/catalinberta/97c8f2c20673408dea4251213d709f7f
const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
}
export const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        dark900: '#232327',
        dark800: '#2e2e33',

        orange50: '#fff9f0',
        orange200: '#ffebb7',
        orange300: '#FFBD94',
        orange500: '#ff6e31',
        blue500: '#243763',
        brown400: '#ad8e70',
        brown800: '#b33800'
    },

    breakpoints,
}

export type BreakpointsType = (typeof breakpoints)[keyof typeof breakpoints]