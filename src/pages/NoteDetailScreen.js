import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { CategoryButton } from "../components/CategoryButton";
import { widthPercentageToDP as wp, heightPercentageToDP  as hp } from "react-native-responsive-screen";
import { useState } from "react";
import { MyColors } from "../values/MyColors";
import { ContenCard } from "../components/ContentCard";
import Feather from 'react-native-vector-icons/Feather'
import { goBack } from "../helper/NavigationHelper";
import { MyStrings } from "../values/Strings";


export const NoteDetailScreen  = ({ route }) => {

    const { note } = route.params;

    let type = note?.type

    const [selectedCategory, setSelectedCategory] = useState(type);
    const [noteTitle, setNoteTitle] = useState(note?.title);
    const [noteText, setNoteText] = useState(note?.note);

    let isEdited = noteTitle !== note?.title || noteText !== note?.note || selectedCategory !== type

    const handleSave = ( ) => {
        //TODO: handle save note
    }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: MyColors.mainColor
            }}>

            <View
                style={{
                    width: wp(100),
                    paddingHorizontal: wp(4),
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>

                <TouchableOpacity
                    onPress={() => goBack()}
                    style={{
                        backgroundColor: "white",
                        width: wp(10),
                        height: wp(10),
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <Feather name="chevron-left" size={30} color={MyColors.mainColor} />    

                </TouchableOpacity>

                {
                    isEdited &&
                    <TouchableOpacity
                        onPress={() => goBack()}
                        style={{
                            backgroundColor: "white",
                            paddingHorizontal: wp(3),
                            paddingVertical: wp(1),
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <Text
                            style={{
                                fontWeight: "600",
                                fontSize: hp(2),
                            }}>

                            { MyStrings.button.save }

                        </Text>

                    </TouchableOpacity>
                }

            </View>

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
                    selectedIcon="check"
                    isSelected={selectedCategory === 0}
                    onPress={() => setSelectedCategory(0)}/>

                <CategoryButton
                    type={1}
                    selectedIcon="check"
                    isSelected={selectedCategory === 1}
                    onPress={() => setSelectedCategory(1)}/>

                <CategoryButton
                    type={2}
                    selectedIcon="check"
                    isSelected={selectedCategory === 2}
                    onPress={() => setSelectedCategory(2)}/>

                <CategoryButton
                    type={3}
                    selectedIcon="check"
                    isSelected={selectedCategory === 3}
                    onPress={() => setSelectedCategory(3)}/>

            </View>

            <ContenCard height={hp(75)}>

                <View
                    style={{
                        height: hp(75),
                        margin: hp(3),
                        width: wp(90),
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: "white",
                        padding: hp(3)
                    }}>

                    <KeyboardAvoidingView>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                            <View>

                                <TextInput
                                    value={noteTitle}
                                    onChangeText={setNoteTitle}
                                    style={{
                                        fontWeight: "bold",
                                        marginBottom: hp(2)
                                    }}/>


                                <TextInput
                                    value={noteText}
                                    onChangeText={setNoteText}
                                    multiline
                                    style={{
                                        fontWeight: "bold"
                                    }}/>

                            </View>

                        </TouchableWithoutFeedback>

                    </KeyboardAvoidingView>

                </View>

            </ContenCard>

        </SafeAreaView>
    )
}