const theme = {
    palette: {
        //Main
        primary: '#007FFF',
        secondary: '#051333',
        accent: '#009B95',

        //Links
        link: '#1071F2',
        active: '#CC0066',
        //Messages
        error: '#CC0066',
        warning: '#FF8000',
        success: '#009B95',

        //Neuter
        white: '#FFFFFF',
        black: '#000000',
        border: '#DDDDDD',
        background: '#FCFCFC',

        //Extras
        deepOcean: '#051233',
        lightOcean: '#09235E',

        //Shades
        black04: '#F5F5F5',
        black05: '#F2F2F2',
        black10: '#E5E5E5',
        black20: '#CCCCCC',
        black30: '#B2B2B2',
        black40: '#999999',
        black54: '#757575',
        black60: '#666666',
        black70: '#4C4C4C',
    },
    bp: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
    radius: `${3 / 16}rem`,
    spacing: (n) => `${(8 * n) / 16}rem`,
    fontSize: (n) => `${n / 16}rem`,
}

export default theme
