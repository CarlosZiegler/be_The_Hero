import React from 'react'
import { Feather } from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as Mailcomposer from 'expo-mail-composer'

import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {

    const navigation= useNavigation()
    const router= useRoute()

    const incident = router.params.incident

    const message = `Hello ${incident.name}, I'm getting in touch because I would like to help in the incident " ${incident.title} " with ${Intl.NumberFormat('de-DE', { style: 'currency', currency : 'EUR'}).format(incident.value)}.`

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail() {
        Mailcomposer.composeAsync({
            subject: `Hero of incident: ${incident.title}`,
            recipients:[incident.email],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
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
    <Text style={styles.incidentValue}>{incident.name} of {incident.city}-{incident.uf}</Text>
                   
                    <Text style={styles.incidentProperty}>Incident</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>
                   
                    <Text style={styles.incidentProperty}>Value:</Text>
                    <Text 
                        style={styles.incidentValue}>
                            {Intl.NumberFormat('de-DE', { style: 'currency', currency : 'EUR'}).format(incident.value)}
                    </Text>

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