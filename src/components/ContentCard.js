import { View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { MyColors } from "../values/MyColors"

export const ContenCard = (props) => {

    let { height } = props;

    return(
        <View
            style={{
                backgroundColor: MyColors.cardBackgroundColor,
                height: height ? height : hp(80),
                width: wp(100),
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                alignItems: "center",
                overflow: "hidden"
            }}>

            { props.children }

        </View>
    )
}