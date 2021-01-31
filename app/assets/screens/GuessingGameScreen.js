
import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    } from "react-native";

export default function GuessingGameScreen() {
    const [guess, setGuess] = useState('');
    const [totalGuessed, setTotalGuessed] = useState(1);
    const [secretNum, setSecretNum] = useState(Math.floor(Math.random() * 100) +1);
    const [msg, setMsg] = useState('Guess between 1  100')
    console.log(secretNum);
    const Guessed = () => {   
        if(secretNum == guess) {
            alert('You win with number of ' + totalGuessed + ' guesses');
            setSecretNum(Math.floor(Math.random() * 100) +1);
            setMsg('Guess between 1 - 100');
            setTotalGuessed(1);
        }else if (secretNum > guess){
            setMsg('Your guess ' + guess + ' is too low');
        }
        else {
            setMsg('Your guess ' + guess + ' is too high');
        }
        
        setTotalGuessed(totalGuessed + 1);
    }
    return (
         <View style={styles.container}>
         <Text>{msg}</Text>
            <TextInput style={styles.input}
                keyboardType={'numeric'}
                onChangeText={(guess) => setGuess(guess)}
                value={guess}
            ></TextInput>
            <Button style={styles.buttons}
                title = 'Make guess'
                onPress={Guessed}></Button>
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        borderColor: 'grey',
        borderWidth: 1,
        textAlign: 'center',
        margin: 5,
        height: 40  
    },
    buttons: {
        flexDirection: 'row',
         width: '50%',
        justifyContent: 'center'
    }
})