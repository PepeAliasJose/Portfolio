import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        primary:{
            
        },
        secondary:{

        }
    },
    styles:{
        global:{
            body:{
                backgroundImage:'../bgDark.jpeg',
                bgSize:'cover',
                color:'gray.100',
                fontWeight:'semibold'
            }
        }
    }
})