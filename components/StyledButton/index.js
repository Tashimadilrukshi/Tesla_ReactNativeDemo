import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styless from './styles';

const StyledButton = (props) => {

    const { type, content, press } = props;

    const backgroundColor = (type ==='primary'?  '#171A20CC' : '#FFFFFFA6')

    const textColor = (type === 'primary' ? '#FFFFFF' : '#171A20')

    return(
        <View style={styless.container}>
            <Pressable
                style={[styless.button, {backgroundColor: backgroundColor}]}
                onPress={() => {
                    press()
                }}
            >
                <Text style={[styless.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
}

export default StyledButton;