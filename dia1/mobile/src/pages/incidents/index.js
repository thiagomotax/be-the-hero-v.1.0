import React from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png'; //pega a melhor logo, @3x, @2x etc
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
export default function Incident(){
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

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
                data={[1,2,3,4,5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Ong:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,0</Text>

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