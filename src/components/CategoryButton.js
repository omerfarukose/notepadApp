import { TouchableOpacity, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { MyColors } from "../values/MyColors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const CategoryButton = (props) => {

    let {type, onPress, isSelected, selectedIcon = "list"} = props;

    return(
        <TouchableOpacity onPress={onPress}>

            <View
                style={{
                    width: wp(20),
                    height: wp(20),
                    backgroundColor: MyColors.noteCategoryColors[type],
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                {
                    isSelected &&
                    <Feather name={selectedIcon} size={wp(10)} color="white" />
                }

            </View>

        </TouchableOpacity>
    )
}