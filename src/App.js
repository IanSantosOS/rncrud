import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/base';

import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name='UserList'
                    component={UserList}
                    options={() => {
                        return {
                            title: "Page: User List",
                            headerRight: () => {
                                <Button type="clear" icon={<Icon name="add" size={25} color="#fff" />} />
                            }
                        }
                    }} />
                <Stack.Screen name='UserForm' component={UserForm} options={{title: "Page: User Form"}} />
            </Stack.Navigator>
        </NavigationContainer>
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