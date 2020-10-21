import React from 'react'
import { Text, View } from 'react-native'
const ProductList = ({navigation}) => {
    console.log('product list page')

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Products Page
            </Text>
            <Text onPress={() => navigation.navigate('detail')}>
                Products Detail
            </Text>
        </View>
    )
}

export default ProductList