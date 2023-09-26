import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default (/*props*/ {route, navigation}) => {
    // console.warn(Object.keys(props.route.params));
    const [user, setUser] = useState(route.params ? route.params : {});
    return (
        <View style={{padding:12}}>
            <Text>Name:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o Nome'
                value={user.name}
            />
            <Text>Email:</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe o E-mail'
                value={user.email}
            />
            <Text>URL do Avatar:</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder='Informe a URL do Avatar'
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15
    }
});