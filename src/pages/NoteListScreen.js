import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { MyColors } from "../values/MyColors"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export const NoteListScreen = ( ) => {
    
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSelectCategory = (type) => {
        if (selectedCategories.includes(type)) {
            // remove from list 
            setSelectedCategories(selectedCategories.filter((c) => c !== type));
        } else {
            // add to list
            setSelectedCategories([...selectedCategories, type]);
        }
    }
    
    const _renderCategoryCardItem = (type) => {
        return(
            <TouchableOpacity onPress={() => handleSelectCategory(type)}>

                <View
                    style={{
                        width: wp(20),
                        height: wp(20),
                        backgroundColor: MyColors.noteCategoryColors[type],
                        borderRadius: 20
                    }}>

                </View>

            </TouchableOpacity>
        )
    } 

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: MyColors.mainColor
            }}>

            {/* note list view */}
            <View
                style={{
                    height: hp(15),
                    width: wp(100),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>

                { _renderCategoryCardItem(0) }
                { _renderCategoryCardItem(1) }
                { _renderCategoryCardItem(2) }
                { _renderCategoryCardItem(3) }

            </View>

            {/* note list view */}
            <View
                style={{
                    backgroundColor: MyColors.cardBackgroundColor,
                    height: hp(80),
                    width: wp(100),
                    position: "absolute",
                    bottom: 0,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}>


            </View>

        </SafeAreaView>
    )
}