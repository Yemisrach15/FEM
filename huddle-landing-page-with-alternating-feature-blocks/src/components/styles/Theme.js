let theme = {
    breakpoints: ['376px', '769px', '1440px', '1100px', '0px'],
    colors: {
        primary: 'hsl(322, 100%, 66%)',
        netural100: 'hsl(193, 100%, 96%)',
        netural200: 'hsl(208, 11%, 55%)',
        netural300: 'hsl(192, 100%, 9%)'
    },
    filters: {
        white: 'brightness(1000%) saturate(0) contrast(1000%) invert(0)',
    },
    fonts: {
        header: "'Poppins', sans-serif",
        other: "'Open Sans', sans-serif"
    },
    fontSizes: ["0.5em", "0.85em", "1em", "1.2em", "1.5em", "1.8em", "2em", "2.2em"],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    letterSpacings: {
        compact: [
            "-2px",
            "-0.8px",
            "-0.6px",
            "-0.4px",
        ],
        stretched: [
            "0.1px",
            "0.2px",
            "0.5px",
            "1px",
        ],
        none: "0px"
    },
    lineHeights: [
        1.4,
        1.5,
        1.6
    ],
    radii: ["0em", "1em", "10em"],
    shadows: ["none", "0px 2px 10px 3px hsl(208deg 11% 55% / 15%)"],
    sizes: ["0em", "1em", "2em", "3em", "4em", "5em", "6em", "7em", "8em", "9em", "10em", "11em", "12em", "13em", "14em", "15em", "16em", "17em", "18em"],
    space: ["0em", "0.5em", "1em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em", "5.5em", "6em", "6.5em", "7em", "7.5em", "8em", "8.5em", "9em"],
    width: {
        extraSmall: {
            width: '80%'
        },
        small: {
            width: '89%'
        },
        medium: {
            width: '92%'
        },
        full: {
            width: '100%'
        }
    }
}

theme.breakpoints.xs = theme.breakpoints[4]
theme.breakpoints.sm = theme.breakpoints[0]
theme.breakpoints.md = theme.breakpoints[1]
theme.breakpoints.lg = theme.breakpoints[2]
theme.breakpoints.hybrid = theme.breakpoints[3]

export default theme;