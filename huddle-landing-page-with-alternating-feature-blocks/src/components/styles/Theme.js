// const theme = {
// colors: {
//     primary: 'hsl(322, 100%, 66%)',
//     netural100: 'hsl(193, 100%, 96%)',
//     netural200: 'hsl(208, 11%, 55%)',
//     netural300: 'hsl(192, 100%, 9%)'
// },
// breakpoints: ['375px', '768px', '1440px'],
//     sizes: [
//         "5.7em",
//         "11em",
//         "89%",
//         "91%"
//     ],
//     space: [
//         "0em",
//         "1.4em 0 1.9em 0",
//         "0.9em",
//         "2em",
//         "4.5em",
//         "0.3em 1.8em",
//         "1em 4.3em",
//         "2.6em 0 1.9em 0",
//         "3.5em"
//     ],
//     fontSizes: [
//         "0.6em",
//         "0.85em",
//         "1em",
//         "1.3em",
//         "2.3em"
//     ],
//     fonts: {
//         header: "'Poppins', sans-serif",
//         other: "'Open Sans', sans-serif"
//     },
// letterSpacings: [
//     "0.1px",
//     "0.2px",
//     "1px"
// ],
// lineHeights: [
//     1.6
// ]
// }

let theme = {
    breakpoints: ['375px', '768px', '1440px'],
    colors: {
        primary: 'hsl(322, 100%, 66%)',
        netural100: 'hsl(193, 100%, 96%)',
        netural200: 'hsl(208, 11%, 55%)',
        netural300: 'hsl(192, 100%, 9%)'
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
    radii: ["0em", "10em"],
    shadows: ["none", "0px 2px 10px 3px hsl(208deg 11% 55% / 15%)"],
    sizes: ["0em", "1em", "2em", "3em", "4em", "5em", "6em", "7em", "8em", "9em", "10em", "11em"],
    space: ["0em", "0.5em", "1em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em", "5.5em", "6em"],
    width: {
        extraSmall: {
            width: '70%'
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

export default theme;