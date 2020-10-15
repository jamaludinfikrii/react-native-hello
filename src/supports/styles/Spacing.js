const { StyleSheet } = require("react-native")

const One = 10
const Two = 13
const Three = 15
const Four = 20
const Five = 25

const spacing = StyleSheet.create({
    pOne : {
        padding : One
    },
    plOne : {
        paddingLeft : One
    },
    prOne : {
        paddingRight : One
    },
    ptOne : {
        paddingTop : One
    },
    pbOne : {
        paddingBottom : One
    },
    pxOne : {
        paddingHorizontal : One
    },
    pyOne : {
        paddingVertical : One
    }
})

export default spacing;