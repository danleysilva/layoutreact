import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Notification from './pages/Notification';
import Search from './pages/Search';
import Setings from './pages/Setings';

import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#121212',
                    borderTopColor:'transparent',
                    marginTop:-20,
                },
                tabBarActiveTintColor:'#FF7F00',
            }}
        >
            <Tab.Screen 
            name="Início" 
            component={Home}
            options={{    
            tabBarIcon: ({size, color}) =>(
                <Entypo name="home" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Explorar" 
            component={Explorer}
            options={{    
                tabBarIcon: ({size, color}) =>(
                    <Entypo name="direction" size={size} color={color} />
                    )
                }} 
            />

            <Tab.Screen 
            name="Notificações" 
            component={Notification} 
            options={{    
                tabBarIcon: ({size, color}) =>(
                    <Entypo name="notification" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
            name="Procurar" 
            component={Search} 
            options={{    
                tabBarIcon: ({size, color}) =>(
                    <Entypo name="magnifying-glass" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
            name="Setings" 
            component={Setings}
            options={{    
                tabBarIcon: ({size, color}) =>(
                    <Entypo name="sound-mix" size={size} color={color} />
                    )
                }} 
            />
        </Tab.Navigator>

    )

}