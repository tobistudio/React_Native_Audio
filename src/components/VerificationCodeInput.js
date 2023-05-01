import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function VerificationCodeInput() {
    const [code, setCode] = useState('');
    const inputRefs = useRef([]);

    const handleTextChange = (text, index) => {
        setCode((prevCode) => {
            const codeArr = prevCode.split('');
            codeArr[index] = text;
            return codeArr.join('');
        });

        if (text && index < inputRefs.current.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        } else if (!text && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };


    return (
        <View style={styles.container}>
            {Array(4)
                .fill()
                .map((_, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code[index] ? code[index].toString() : ''}
                        onChangeText={(text) => handleTextChange(text, index)}
                        selectTextOnFocus
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace' && !code[index] && inputRefs.current[index - 1]) {
                                inputRefs.current[index - 1].clear();
                                inputRefs.current[index - 1].focus();
                            }
                        }}
                    />

                ))}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 60,
        width: 60,
        borderRadius: 60,
        marginHorizontal: 5,
        fontSize: 30,
        textAlign: 'center',
        borderWidth: 1,
    },
});

export default VerificationCodeInput