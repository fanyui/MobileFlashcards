import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '../common'
import { addDeck } from './helper'
import { Actions } from 'react-native-router-flux';
export default function NewDeck() {
    const [decTitle, setDeckTitle ] = useState("")
    const creatDeck =() => {
        const obj = {
            title: decTitle,
            questions: []
        }
        addDeck({[obj.title] : obj})
        Actions.info()
    }
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}> What is the title of your new deck</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                value={decTitle}
                onChangeText={(text)=>setDeckTitle(text)}
                placeholderTextColor="#808080"
                multiline={true}
                autoFocus={true}
                blurOnSubmit
                clearButtonMode="while-editing" //IOS
                //disableFullscreenUI={true}  //Android
                enablesReturnKeyAutomatically={true}  //IOS
                />
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.primary }]} onPress={() => creatDeck()} >
                <Text style={[styles.ans, { color: Colors.white }]}>Submit.</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10,
    }, 
    title:{
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',
        padding: 10,
        margin: 10,
    }, 
    input: {
        height: 80,
        borderWidth: 0.7,
        fontSize: 15, 
        borderRadius: 10,
        shadowColor: Colors.primary,
        shadowOpacity: 0.3,
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