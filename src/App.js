import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed';

import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { UsersProvider } from './context/UsersContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='UserList'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name='UserList'
                        component={UserList}
                        options={({navigation}) => {
                            return {
                                title: "Page: User List",
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        onPress={() => navigation.navigate('UserForm')}
                                        icon={<Icon name="add" size={25} color="#fff"/>}
                                    />
                                )
                            }
                        }} />
                    <Stack.Screen name='UserForm' component={UserForm} options={{title: "Page: User Form"}} />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: 'bolder'
    }
}