import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
            }
        }
    },
    textStyles: {
        h1: {
            fontSize: '5vw',
            fontWeight: 700,
        },
        h2: {
            fontSize: '3vw',
            fontWeight: 700,
        },
        body: {
            fontSize: '1.5vw',
            fontWeight: 700,
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '10px',
                backgroundColor: '#2F80ED',
                color: 'white'
            },
            defaultProps: {
                size: 'lg'
            }
        }
    }
})
export default theme