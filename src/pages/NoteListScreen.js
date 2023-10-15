import { useState, useEffect } from "react"
import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native"
import { MyColors } from "../values/MyColors"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { navigate } from "../helper/NavigationHelper"
import Feather from 'react-native-vector-icons/Feather'
import { SampleNoteList } from "../values/SampleData"
import { CategoryButton } from "../components/CategoryButton"
import { ContenCard } from "../components/ContentCard"

export const NoteListScreen = ( ) => {
    
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState(SampleNoteList);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredNotes(SampleNoteList);
        } else {
            setFilteredNotes(SampleNoteList.filter((note) => selectedCategories.includes(note.type)));
        }
    }, [selectedCategories])

    const handleSelectCategory = (type) => {
        if (selectedCategories.includes(type)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== type));
        } else {
            // add to list
            setSelectedCategories([...selectedCategories, type]);
        }
    }

    const _renderFloatingCreateButton = ( ) => {
        return(
            <TouchableOpacity
                onPress={() => navigate("CreateNote")}
                style={{
                    backgroundColor: MyColors.mainColor,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    width: wp(15),
                    height: wp(15),
                    borderRadius: 100,
                    bottom: 40,
                    right: 20,
                }}>

                <Feather name="plus" size={wp(10)} color="white" />    

            </TouchableOpacity>
        )
    }

    const _renderNoteItem = (data) => {
        let type = data?.type;
        let title = data?.title;
        let note = data?.note;
        let date = data?.date;

        return(
            <TouchableOpacity onPress={() => navigate("NoteDetail", {note: data})}>

                <View
                    style={{
                        marginTop: wp(4),
                        width: wp(90),
                        height: hp(10),
                        backgroundColor: "white",
                        borderRadius: 20,
                        overflow: "hidden",
                        flexDirection: "row"
                    }}>

                    {/* category color */}
                    <View 
                        style={{
                            backgroundColor: MyColors.noteCategoryColors[type],
                            height: "100%",
                            width: wp(5),
                        }}/>

                    <View
                        style={{
                            justifyContent: "space-evenly",
                            marginLeft: wp(3),
                            width: wp(80),
                        }}>

                        <Text
                            numberOfLines={1}
                            style={{
                                color: MyColors.noteTitleColor,
                                fontWeight: "bold"
                            }}>

                            { title }

                        </Text>

                        <Text 
                            numberOfLines={1}
                            style={{
                                color: MyColors.noteContentColor
                            }}>

                            { note }

                        </Text>

                        <Text
                            style={{
                                color: MyColors.noteDateColor,
                                fontSize: hp(1.3)
                            }}>

                            { date }

                        </Text>

                    </View>


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

            {/* category filter view */}
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
                    isSelected={selectedCategories.includes(0)}
                    onPress={() => handleSelectCategory(0)}/>

                <CategoryButton
                    type={1}
                    isSelected={selectedCategories.includes(1)}
                    onPress={() => handleSelectCategory(1)}/>

                <CategoryButton
                    type={2}
                    isSelected={selectedCategories.includes(2)}
                    onPress={() => handleSelectCategory(2)}/>

                <CategoryButton
                    type={3}
                    isSelected={selectedCategories.includes(3)}
                    onPress={() => handleSelectCategory(3)}/>

            </View>

            {/* note list view */}

            <ContenCard>

                <FlatList
                        data={filteredNotes}
                        renderItem={({item}) => _renderNoteItem(item)}
                        keyExtractor={(item, index) => index}/>

            </ContenCard>

            { _renderFloatingCreateButton() }

        </SafeAreaView>
    )
}