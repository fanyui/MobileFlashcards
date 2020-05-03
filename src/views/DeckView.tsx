import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import {Colors} from '../common'
import { Actions } from 'react-native-router-flux'
export default function DeckView(props: any) {
    let deck = props.deck
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card} >
                <Text>{deck.title}</Text>
                <Text> {deck.questions.length}</Text>

            </View>
            <View> 
                <TouchableOpacity onPress={() => Actions.addcard({deck: props.deck})} style={[styles.btn, {backgroundColor: Colors.lighter}]} >
                    <Text> Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.quizeview({questions: deck.questions})} style={[styles.btn,{backgroundColor: Colors.primary}]} >
                    <Text> Start Quiz</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
        margin: 10,
        shadowRadius: 15,
        shadowOpacity: 0.7,
        shadowColor: Colors.light,
        borderColor: Colors.lightDark,
        elevation: 20,
        shadowOffset: { width: 3, height: 10 },




    },
    btn: {
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.7,
        height: 40,
        padding: 10,
        margin: 15,
        shadowRadius: 15,
        borderColor: Colors.black,

    }
})