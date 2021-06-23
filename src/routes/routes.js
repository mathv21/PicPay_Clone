import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';

import HomeScreen from '../screens/home';
import WalletScreen from '../screens/wallet';
import PaymentScreen from '../screens/payment';

import PayButton from '../components/Paybutton';

const Tab = createBottomTabNavigator();

export default function Navigation(){

  return(
    <Tab.Navigator
    initialRouteName="Wallet"
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Wallet':
            iconName = 'credit-card';
            break;
          case 'Payment':
            return (
            <PayButton 
              onPress={() => {navigation.navigate('Payment')}} 
              focused={focused}
            />
          )
          case 'Notifications':
            iconName = 'bell';
            break;
          case 'Settings':
            iconName = 'settings';
            break;
          default:
            iconName = 'circle';
            break;
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}

    tabBarOptions={{
      style:{
        backgroundColor:'#131418',
        borderTopColor: 'rgba(255,255,255,0.2)'
      },
      activeTintColor:'#fff',
      inactiveTintColor:'#92929c'
    }}

    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Inicio'
        }}  
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          title:'Carteira'
        }}
      />
      <Tab.Screen 
        name="Payment" 
        component={PaymentScreen} 
        options={{
          title:""
        }}  
      /> 
       <Tab.Screen 
        name="Notifications" 
        component={PaymentScreen} 
        options={{
          title:"Notificações"
        }}  
      /> 
       <Tab.Screen 
        name="Settings" 
        component={PaymentScreen} 
        options={{
          title:"Ajustes"
        }}  
      /> 
    </Tab.Navigator>
  );
}
