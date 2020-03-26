import React, { useEffect, useState} from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native'


import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {

    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation= useNavigation()

    function navigateToDetails(incident) {
        navigation.navigate('Detail', {incident})
    }

    async function loadIncidents() {
        if(loading) {
            return
        }

        if (total > 0 && incidents.length === total) {
            return
        }

        setLoading(true)

        const response = await api.get('incidents', {
            params: {page}
        })

        setPage(page + 1)

        setIncidents([...incidents,...response.data])
        setTotal(response.headers['x-total-count'])
        setLoading(false)
    }
        
        
    useEffect(() => {
        loadIncidents()
        
    }, [])

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.headerText}>
                    Total <Text style={styles.headerTextBold}>{total} of incidents.</Text>  
                </Text>
            </View>
            
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>Choose one of the cases below and save the day</Text>

            <FlatList 
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item:incident}) =>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>
                   
                    <Text style={styles.incidentProperty}>Incident</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                   
                    <Text style={styles.incidentProperty}>Value:</Text>
                    <Text 
                        style={styles.incidentValue}>
                            {Intl.NumberFormat('de-DE', { style: 'currency', currency : 'EUR'}).format(incident.value)}
                    </Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetails(incident)}>
                        <Text style={styles.detailsButtonText}>View more detail</Text>
                        <Feather name="arrow-right" size={16}  color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    )
}