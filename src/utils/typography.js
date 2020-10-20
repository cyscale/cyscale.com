import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

import theme from './theme';

const fallbackFonts = [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
]
fairyGatesTheme.baseFontSize = 16
fairyGatesTheme.baseLineHeight = 1.5
fairyGatesTheme.scaleRatio = 2
fairyGatesTheme.blockMarginBottom = 0
fairyGatesTheme.headerColor = theme.palette.deepOcean
fairyGatesTheme.bodyColor = theme.palette.black70
// fairyGatesTheme.googleFonts = [
//     {
//         name: 'Work Sans',
//         styles: ['600'],
//     },
//     {
//         name: 'Quattrocento Sans',
//         styles: ['400', '400i', '700&display=swap'],
//     },
// ]
delete fairyGatesTheme.googleFonts
fairyGatesTheme.headerFontFamily = [...fallbackFonts]
fairyGatesTheme.bodyFontFamily = [...fallbackFonts]

fairyGatesTheme.overrideThemeStyles = () => ({
    html: {
        fontSize: '100%'
    },
    a: {
        textShadow: 'none',
        backgroundImage: 'none',
        color: theme.palette.link,
    },
    'a.gatsby-resp-image-link': {
        boxShadow: `none`,
    },
})

const typography = new Typography(fairyGatesTheme)
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
