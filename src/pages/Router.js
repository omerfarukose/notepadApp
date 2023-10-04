import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from "../helper/NavigationHelper";

// screens
import { NoteListScreen } from "./NoteListScreen";
import { CreateNoteScreen } from "./CreateNoteScreen";
import { NoteDetailScreen } from "./NoteDetailScreen";

export const Router  = ( ) => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer ref={navigationRef}>

            <Stack.Navigator screenOptions={{ headerShown:false }}>

                <Stack.Screen name="NoteList" component={NoteListScreen}/>
                <Stack.Screen name="CreateNote" component={CreateNoteScreen}/>
                <Stack.Screen name="NoteDetail" component={NoteDetailScreen}/>

            </Stack.Navigator>

      </NavigationContainer>
    )
}