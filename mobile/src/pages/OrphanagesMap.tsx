import React from 'react';
import { Feather } from '@expo/vector-icons';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Mapview, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';


import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToCreateOrphanage() {
        navigation.navigate('Or');
    }

    function handleNavigateToOrphanageDetails() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
          <Mapview 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
              latitude: -23.134208,
              longitude: -46.5862656,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
          > 
          <Marker 
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: -23.134208,
              longitude: -46.5862656,
            }}
          > 
            <Callout tooltip onPress={() => { handleNavigateToOrphanageDetails }}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Nome orphanato
    
                </Text>
              </View>
            </Callout>
          </Marker>
          
          </Mapview>
    
          <View style={styles.footer}>
            <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
            <RectButton 
              style={styles.createOrphanageButton} 
              onPress={() => { handleNavigateToCreateOrphanage }}
            >
            <Feather name="plus" size={20} color="#fff" />
    
            </RectButton>
          </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8',
      borderRadius: 16,
      justifyContent:'center',
    },
  
    calloutText: {
      color: '#0089A5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
  
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    }
  });