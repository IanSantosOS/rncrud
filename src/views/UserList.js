import { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from '@rneui/themed';
import UsersContext from '../context/UsersContext'

export default (props) => {

    const { state, dispatch } = useContext(UsersContext);

    const confirmUserDeletion = (user) => {
        Alert.alert('Excluir Usário', 'Deseja Excluir o usuário?', [
            {
                text: 'sim',
                onPress() {
                    // console.warn("delete");
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            { text: 'Não' }
        ]);
    }

    const getActions = (user) => {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name='edit' size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name='delete' size={25} color="red" />}
                />
            </>
        )
    }

    const getUserItem = ({ item: user }) => {
        // return <Text>{user.name} - {user.email}</Text>
        /*
            rightElement={getActions(user)}
            onPress={() => props.navigation.navigate('UserForm', user)}
        */
        return (
            <ListItem
                topDivider
                bottomDivider
                key={user.id}
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                data={state.users}
                renderItem={getUserItem}
                keyExtractor={user => `${user.id}`}
            />
        </View>
    );
}