import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Colors } from '../common';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
Icon.loadFont()
import { getData, storeData, removeValue, setNotification} from './helper'
const data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

function DeckList() {
    const [decks, setDecks] = useState([])

    const [error, setError] = useState("")
    useEffect(() => {
        //removeValue()
        // storeData(data)
        getData().then(data=>setDecks(data))
        setNotification()
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            {decks && (decks.length > 0) && <FlatList
                data={decks}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.title}
            />
            }
            <ActionButton
                buttonColor={Colors.primary}
                renderIcon={() => {
                    return (
                        <Icon
                            size={30}
                            name="file"
                            style={{ color: Colors.white }}
                        />
                    )
                }}
                shadowStyle={{ padding: 2, borderRadius: 50 }}
                onPress={() => Actions.newdeck()}
            />
        </SafeAreaView>
    )
}

function Item(props) {
    const deck = props.item

    return (
        <TouchableOpacity onPress={() => Actions.deckview({ deck: deck})} style={styles.card} >
            <Text style={styles.deckTitle}> {deck.title}</Text>
            <Text> {deck.questions.length}</Text>

        </TouchableOpacity>
    )
}
export default DeckList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        
    },
    shadow: {
        shadowRadius: 25,
        shadowColor: Colors.black,
        shadowOpacity: 0.7,
        borderColor: Colors.black,
    },
    card: {
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0.3,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        // margin: 15,

        
    },
    deckTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: Colors.primary,
    }
})