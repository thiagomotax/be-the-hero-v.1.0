import React, {useEffect, useState } from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png'; //pega a melhor logo, @3x, @2x etc
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

export default function Incident(){
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    async function loadIncidents(){
        const response = await api.get('incidents');

        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>
                        0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
            <FlatList 
                style={styles.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item:incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Ong:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={17} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}