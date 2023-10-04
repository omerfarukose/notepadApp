import { useState, useEffect } from "react"
import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native"
import { MyColors } from "../values/MyColors"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { navigate } from "../helper/NavigationHelper"
import Feather from 'react-native-vector-icons/Feather'
import { SampleNoteList } from "../values/SampleData"

export const NoteListScreen = ( ) => {
    
    const [selectedCategories, setSelectedCategories] = useState([0,1,2,3]);
    const [filteredNotes, setFilteredNotes] = useState(SampleNoteList);
    const [isFilterSelected, setIsFilterSelected] = useState(false);

    useEffect(() => {
      setFilteredNotes(SampleNoteList.filter((note) => selectedCategories.includes(note.type)));
    }, [selectedCategories])
    

    const handleSelectCategory = (type) => {

        if (!isFilterSelected) {
            setIsFilterSelected(true)
            setSelectedCategories([type]);
        } else {
            if (selectedCategories.includes(type)) {
                if (selectedCategories.length === 1) {
                    // reset categories
                    setIsFilterSelected(false)
                    setSelectedCategories([0,1,2,3])
                } else {
                    // remove from list 
                    setSelectedCategories(selectedCategories.filter((c) => c !== type));
                }
                
            } else {
                setSelectedCategories([...selectedCategories, type]);
            }
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
                    width: wp(16),
                    height: wp(16),
                    borderRadius: 100,
                    bottom: 40,
                    right: 20,
                }}>

                <Feather name="plus" size={wp(10)} color="white" />    

            </TouchableOpacity>
        )
    }
    
    const _renderCategoryCardItem = (type) => {

        let isSelected = selectedCategories.includes(type)

        return(
            <TouchableOpacity onPress={() => handleSelectCategory(type)}>

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
                        isSelected && isFilterSelected &&
                        <Feather name="list" size={wp(10)} color="white" />
                    }

                </View>

            </TouchableOpacity>
        )
    } 

    const _renderNoteItem = (data) => {
        let type = data?.type;
        let title = data?.title;
        let note = data?.note;
        let date = data?.date;

        return(
            <TouchableOpacity>

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
                    borderTopRightRadius: 40,
                    alignItems: "center",
                    overflow: "hidden"
                }}>

                <FlatList
                    data={filteredNotes}
                    renderItem={({item}) => _renderNoteItem(item)}
                    keyExtractor={(item, index) => index}/>

            </View>

            { _renderFloatingCreateButton() }

        </SafeAreaView>
    )
}