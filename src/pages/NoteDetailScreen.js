import { SafeAreaView, Text, View } from "react-native"
import { CategoryButton } from "../components/CategoryButton";
import { widthPercentageToDP as wp, heightPercentageToDP  as hp } from "react-native-responsive-screen";
import { useState } from "react";
import { MyColors } from "../values/MyColors";
import { ContenCard } from "../components/ContentCard";

export const NoteDetailScreen  = ({ route }) => {

    const { note } = route.params;

    let type = note?.type

    const [selectedCategory, setSelectedCategory] = useState(type);

    console.log("note : ", note);

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: MyColors.mainColor
            }}>

            <View
                style={{
                    height: hp(15),
                    width: wp(100),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>

                <CategoryButton
                    type={0}
                    isSelected={selectedCategory === 0}
                    onPress={() => setSelectedCategory(0)}/>

                <CategoryButton
                    type={1}
                    isSelected={selectedCategory === 1}
                    onPress={() => setSelectedCategory(1)}/>

                <CategoryButton
                    type={2}
                    isSelected={selectedCategory === 2}
                    onPress={() => setSelectedCategory(2)}/>

                <CategoryButton
                    type={3}
                    isSelected={selectedCategory === 3}
                    onPress={() => setSelectedCategory(3)}/>

            </View>


            <ContenCard height={hp(75)}>

                <Text>
                    test
                </Text>

            </ContenCard>

        </SafeAreaView>
    )
}