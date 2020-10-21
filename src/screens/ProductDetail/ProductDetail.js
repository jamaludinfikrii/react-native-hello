import React from 'react'
import { Text, View } from 'react-native'

const ProductDetail = ({name}) => {
    console.log('product detail page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Products Detail  {name}
            </Text>
        </View>
    )
}

export default ProductDetail;


