import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import MapView, {
  MapPressEvent,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import BackArrow from '../../assets/icons/BackArrow';
import {COLORS} from '../../theme/theme';
import {AppContext} from '../../context/context';

const MapScreen = () => {
  const {setMapLocation, mapLocation} = useContext(AppContext);

  const handleMapLocation = (event: MapPressEvent) => {
    setMapLocation(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 20,
          left: 10,
          backgroundColor: COLORS.white,
          padding: 8,
          borderRadius: 100,
        }}>
        <BackArrow />
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={handleMapLocation}>
        {mapLocation !== null &&
        mapLocation?.latitude &&
        mapLocation?.longitude ? (
          <Marker
            coordinate={{
              latitude: mapLocation?.latitude,
              longitude: mapLocation?.longitude,
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
