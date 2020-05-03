import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Colors } from '../common';
import { clearNotification, setNotification } from './helper'
export default function QuizView(props: any) {
    const { questions } = props
    const [ index, setIndex] = useState(0)
    const [correctQtn, setcorrectQtn] = useState([])
    const [failedQtn, setfailedQtn] = useState([])
    const [currentQuestion, setcurrentQuestion] = useState(questions[index])
    const [isfliped, setIsFliped] = useState(false)
    const flip = () => {
        setIsFliped(!isfliped)
    }
   const correct = (qtn) => {
       setIndex(index + 1)
       if (index <= questions.length-1) {
           setcorrectQtn([ ...correctQtn, qtn])
       } 
       if (index === questions.length-1) {
           setcurrentQuestion(null)
       }
    }
   const failed = (qtn) => {
       setIndex(index+1)
       if(index <= questions.length - 1){
            setfailedQtn([...failedQtn ,qtn])
        }
       if (index === questions.length - 1) {
           setcurrentQuestion(null)
       }
    }
    useEffect(()=>{
        if(index !== questions.length){
            setcurrentQuestion(questions[index])
        }
    }, [index])
    useEffect(() =>{
            clearNotification().then(setNotification);
  
    })
    // useEffect(()=>{
    //     if(isfliped === true){
    //         set
    //     }
    // }, [isfliped])
    return (
        <SafeAreaView style={styles.container}>
           { (index > 0 && (correctQtn.length + failedQtn.length) == questions.length)?
            <View>
                <Text> You scored {correctQtn.length} correctly</Text>
                <Text> You faled {failedQtn.length}  quetion</Text>
            </View>
           : <>
            <View style={styles.progress}>
                <Text>{`${correctQtn.length + (currentQuestion ? (failedQtn.length + 1) : failedQtn.length)} / ${questions.length}` }</Text>
            </View>
            {questions.length == 0 && 
                <View style={styles.question}>
                    <Text style={styles.qntText}> No question for this Card</Text>

                </View>
            }
            {currentQuestion && <>
                <View style={styles.question}>
                    <Text style={styles.qntText}>{isfliped ? currentQuestion.answer : currentQuestion.question } </Text>
                    <TouchableOpacity onPress={() => flip()}>
                        <Text style={styles.ans}> {isfliped? "answer" : "question"} </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.primary }]} onPress={() => correct(currentQuestion)}>
                        <Text style={[styles.ans, { color: Colors.white }]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.black }]} onPress={() => failed(currentQuestion)} >
                        <Text style={[styles.ans, { color: Colors.white }]}>InCorrect.</Text>
                    </TouchableOpacity>
                </View>
                </>
            }
            </>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    progress: {
        flex: 1,
    },
    question: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttons: {
        justifyContent: 'flex-start',
        padding: 10,
        flex: 2,
        color: Colors.white,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 12,
        height: 45,
        borderWidth: 2,
        borderColor: Colors.primary,
        //margin: 25,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qntText: {
        fontSize: 20,
        fontWeight: "400",
        paddingVertical: 10,
    },
    ans: {
        color: Colors.primary,
        fontSize: 18,
    }
})