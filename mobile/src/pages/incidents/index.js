import React from 'react'
import { Feather } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {

    const navigation= useNavigation()

    function navigateToDetails() {
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.headerText}>
                    Total <Text style={styles.headerTextBold}>0 of incidents.</Text>  
                </Text>
            </View>
            
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>Choose one of the cases below and save the day</Text>

            <FlatList 
                style={styles.incidentList}
                data={[1,2,3]}
                keyExtractor={item => String(item)}
                showsVerticalScrollIndicator={false}
                renderItem={() =>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                   
                    <Text style={styles.incidentProperty}>Incident</Text>
                    <Text style={styles.incidentValue}>Cahorro atrolepado</Text>
                   
                    <Text style={styles.incidentProperty}>Value:</Text>
                    <Text style={styles.incidentValue}>150,00 €</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetails}>
                        <Text style={styles.detailsButtonText}>View more detail</Text>
                        <Feather name="arrow-right" size={16}  color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    )
}