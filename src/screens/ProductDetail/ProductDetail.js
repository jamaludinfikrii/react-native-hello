import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { UserContext } from '../../context/UserContext'

const ProductDetail = ({name}) => {
    console.log('product detail page')
    const {user,setUser} = useContext(UserContext)

    return(
        <View style={{justifyContent : "center",alignItems : "center",height : "100%"}}>
            <Text>
                Products Detail  {name}
            </Text>
            <Text onPress={() => setUser("Seto")}>
                Dari Context  {user}
            </Text>
        </View>
    )
}

export default ProductDetail;


