import React from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
const NOTIFICATION_KEY = 'MobileFlashCard:notifications';

const storeData = async (item: any) => {
    try {
        await AsyncStorage.setItem('DECKS', JSON.stringify(item))
    } catch (e) {
        // saving error
        return(e)
    }
}
const mergeData = async (item: any) => {
    try {
         await AsyncStorage.mergeItem('DECKS', JSON.stringify(item))
    } catch (e) {
        // saving error
        console.log("error ", e)
        return(e)
    }
}
const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('DECKS')
        if (value !== null) {
            let data = JSON.parse(value)
            return Object.values(data)

        }
    } catch (e) {
        // error reading value
        return(e)
    }
}
const removeValue = async () => {
    try {
        await AsyncStorage.removeItem('DECKS')
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}
const addDeck = async (deck :any) => {
    try {
        const value = await AsyncStorage.getItem('DECKS')
        if (value !== null) {
            let data = JSON.parse(value)
            const newItem = {...data, ...deck}
            await AsyncStorage.setItem('DECKS', JSON.stringify(newItem))
        }
    } catch (e) {
        // error reading value
        return (e)
    }
}







const  clearNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}


function createNotification() {
    return {
        title: 'Ready for some Quizzing?',
        body: "👋 It's time for quize Let's Do IT",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

const setNotification =() => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                if (!data) {
                    Permissions.askAsync(Permissions.NOTIFICATIONS)
                        .then(({ status }) => {
                            if (status === 'granted') {
                                Notifications.cancelAllScheduledNotificationsAsync()
                                let tomorrow = new Date()
                                tomorrow.setDate(tomorrow.getDate() + 1)
                                tomorrow.setHours(20)
                                tomorrow.setMinutes(1)

                                Notifications.scheduleLocalNotificationAsync(
                                    createNotification(),
                                    {
                                        time: tomorrow,
                                        repeat: 'day',
                                    }
                                )

                                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                            }
                        })
                }
            }
            console.log('Notification Reset for tomrrow')
        })
}
export { getData, storeData, mergeData, removeValue, addDeck, setNotification, clearNotification}


