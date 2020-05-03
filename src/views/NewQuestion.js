import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../common'
import { mergeData } from './helper'
import { Actions } from 'react-native-router-flux'
export default function NewQuestion(props) {

    const [cardQuestion, setCardQuestion] = useState("")
    const [cardAnswer, setCardAnswer] = useState("")
    const {deck} = props
 
    const addCard = () => {
        let qtn = {
            question: cardQuestion,
            answer: cardAnswer,
        }
        let newDeck =   {...deck, questions: [...deck.questions, qtn]}
        //call the method to persist it to async storage
        // console.log( "sending deck ", { [deck.title]: newDeck })
        mergeData({ [deck.title]: newDeck })
        // mergeData(newDeck)
        Actions.info()

    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                value={cardQuestion}
                placeholder="Quetion"
                onChangeText={(text) => setCardQuestion(text)}
                placeholderTextColor="#808080"
                multiline={true}
                autoFocus={true}
                blurOnSubmit
                clearButtonMode="while-editing" //IOS
                //disableFullscreenUI={true}  //Android
                enablesReturnKeyAutomatically={true}  //IOS
            />
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                value={cardAnswer}
                placeholder="Answer"
                onChangeText={(text) => setCardAnswer(text)}
                placeholderTextColor="#808080"
                multiline={true}
                blurOnSubmit
                clearButtonMode="while-editing" //IOS
                //disableFullscreenUI={true}  //Android
                enablesReturnKeyAutomatically={true}  //IOS
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.primary }]} onPress={() => addCard()} >
                <Text style={[styles.ans, { color: Colors.white }]}>Submit.</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
    },
    input: {
        borderWidth: 0.7,
        fontSize: 15,
        borderRadius: 10,
        shadowColor: Colors.primary,
        shadowOpacity: 0.3,
        padding: 10,
        margin: 10,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45,
        borderWidth: 2,
        borderColor: Colors.primary,
        //margin: 25,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

