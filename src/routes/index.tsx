import React from 'react';
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import MovieScreen from '../screens/Movies';
import SerieScreen from '../screens/Series';

import { ColorPallete } from '../global/Colors';
import { FontFamily } from '../global/Font';

import IconMovie from '../assets/icons/movie.png';
import IconSerie from '../assets/icons/serie.png';

export default function RootNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                header: props => <></>,
                tabBarIcon: () => <></>,
                tabBarLabelStyle: { fontSize: 14 },
                tabBarInactiveTintColor: ColorPallete.WHITE,
                tabBarActiveTintColor: ColorPallete.RED,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: ColorPallete.SECONDARY,
                    height: 70,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            }}
        >
            <Tab.Screen
                name="movie"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IconMovie}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused
                                    ? ColorPallete.RED
                                    : ColorPallete.WHITE,
                            }}
                        />
                    ),
                    tabBarLabel: 'Filmes',
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 16,
                        fontFamily: FontFamily.BOLD,
                    },
                }}
                component={MovieScreen}
            />
            <Tab.Screen
                name="serie"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IconSerie}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused
                                    ? ColorPallete.RED
                                    : ColorPallete.WHITE,
                            }}
                        />
                    ),
                    tabBarLabel: 'Séries',
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 16,
                        fontFamily: FontFamily.BOLD,
                    },
                }}
                component={SerieScreen}
            />
        </Tab.Navigator>
    );
}
