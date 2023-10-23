import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                color: 'gray'
            }
        }
    },
    textStyles: {
        h1: {
            fontSize: '78px',
            fontWeight: 700,
            color: 'gray'
        },
        h2: {
            fontSize: '52px',
            fontWeight: 700,
            color: 'gray'
        },
        body: {
            fontSize: '20px',
            fontWeight: 700,
            color: 'gray'
        },
        bold_body: {
            fontSize: '24px',
            fontWeight: 1000,
            color: 'gray'
        }
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '7px',
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