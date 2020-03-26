import React from 'react'
import { Feather } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import * as Mailcomposer from 'expo-mail-composer'

import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {

    const navigation= useNavigation()
    const message = `Hello Ong, I'm getting in touch because I would like to help in the case of a dog run over with 120 Reais.`

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail() {
        Mailcomposer.composeAsync({
            subject: 'Hero of incident: Name incident',
            recipients:['carlosziegler.dev@gmail.com'],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=491727572563&text=${message}`)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
                
                <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28}  color="#e02041"/>
                </TouchableOpacity>
                
            </View>

                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, { marginTop:0}]}>NGO:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                   
                    <Text style={styles.incidentProperty}>Incident</Text>
                    <Text style={styles.incidentValue}>Cahorro atrolepado</Text>
                   
                    <Text style={styles.incidentProperty}>Value:</Text>
                    <Text style={styles.incidentValue}>150,00 €</Text>

                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Save the Day</Text>
                    <Text style={styles.heroTitle}>Be the hero of this case</Text>
                    <Text style={styles.heroDescription}>Contact us</Text>
                   
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={sendEmail}>
                            <Text style={styles.actionText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
        </View>
    )
}