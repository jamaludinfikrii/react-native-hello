import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const Layout = () => {
    return(
       <ListProduct />
    )
}

export default Layout;


const ListProduct = () => {
    return(
        <SafeAreaView>
            
            {/* row */}
            <View style={{flexDirection : "row",flexWrap : "wrap"}}>

                {/* Product 1 */}
                <View style={{backgroundColor : "grey",width:"50%",height : 200,alignItems : "center",justifyContent : "center"}}>
                    <Text>Product 1</Text>
                </View>

                {/* Product 2 */}
                <View  style={{backgroundColor : "green",width:"50%",height : 200,alignItems : "center",justifyContent : "center"}}>
                    <Text>Product 2</Text>
                </View>

                {/* Product 3 */}
                <View  style={{backgroundColor : "green",width:"50%",height : 200,alignItems : "center",justifyContent : "center"}}>
                    <Text>Product 3</Text>
                </View>

                {/* Product 4*/}
                <View  style={{backgroundColor : "grey",width:"50%",height : 200,alignItems : "center",justifyContent : "center"}}>
                    <Text>Product 4</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}



const LayoutNavbar = () => {
    return(
        <SafeAreaView style={{borderWidth : 1 , borderColor : 'red',justifyContent : "space-between",flexDirection : "row"}}>

            {/* left */}
            <View>
                <View style={{borderWidth : 1 , borderColor : 'green'}}>
                    <Text>
                        Box 1
                    </Text>
                </View>
            </View>


            {/* Right */}
            <View style={{flexDirection : "row"}}>
                <View style={{borderWidth : 1 , borderColor : 'blue'}}>
                        <Text>
                            Box 2
                    </Text>
                </View>

                <View style={{borderWidth : 1 , borderColor : 'yellow'}}>
                        <Text>
                            Box 3
                    </Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}