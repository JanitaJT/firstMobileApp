import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    } from "react-native";
    



function CalculatorScreen(props) {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState('');
    console.log(num1);
    console.log(num2);
    console.log(total);

    const Add = () => {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        let sum = n1 + n2;
        setTotal(sum)
    }
    const Sub = () => {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        let sum = n1 - n2;
        setTotal(sum)
    }
    return (
        <View style={styles.container}>
         <Text>Result: {total}</Text>
        
            <TextInput style={styles.input}
                placeholder="Enter first number"
                keyboardType={'numeric'}
                onChangeText={(num1) => setNum1(num1)}
                value={num1}
            ></TextInput>
            <TextInput style={styles.input}
                placeholder="Enter second number"
                keyboardType={'numeric'}
                onChangeText={(num2) => setNum2(num2)}
                value={num2}
            ></TextInput>
       
       <View style={styles.buttons}>
         <Button
            title="+"
            onPress={Add}
        ></Button>
        <Button
            title="-"
            onPress={Sub}
        ></Button>
        </View>
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
         width: '25%',
        justifyContent: 'space-evenly'
    }
})
export default CalculatorScreen;
