const { StyleSheet } = require("react-native")

const PRIMARY = '#28abb9'
const SECONDARY = '#2d6187'
const WHITE = '#FFFFFF'
const DARK = '#b3b3b3'

const color = StyleSheet.create({
    primary : {
        color : PRIMARY
    },
    bgPrimary : {
        backgroundColor : PRIMARY
    },
    secondary : {
        color : SECONDARY
    },
    bgSecondary : {
        backgroundColor : SECONDARY
    },
    white : {
        color : WHITE
    },
    bgWhite : {
        backgroundColor : WHITE
    },
    dark : {
        color : DARK
    },
    bgDark : {
        backgroundColor : DARK
    }
})

export default color
