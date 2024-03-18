import {
  FlatList,
  Platform,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/type';
//
import {COLORS, SIZES} from '../../theme/theme';
import CreateButton from '../../components/CreateButton/CreateButton';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import {getServices} from '../../redux/actions/servicesAction';

const ServicesScreen = () => {
  const dispatch = useAppDispatch();
  const {services, loading} = useAppSelector(state => state.services);

  const handleGetServices = async () => {
    await dispatch(getServices());
  };

  useEffect(() => {
    (async () => {
      dispatch(getServices());
    })();
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Header />
        </View>
        {/* CARD */}

        <FlatList
          data={services || []}
          renderItem={({item}) => {
            return <Card cardItem={item} />;
          }}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.flatList}
          refreshControl={
            <RefreshControl
              tintColor={COLORS.mainOrange}
              onRefresh={handleGetServices}
              refreshing={loading}
              size={Platform.OS === 'ios' ? SIZES.default : undefined}
              progressViewOffset={Platform.OS === 'ios' ? 10 : undefined}
            />
          }
        />
      </SafeAreaView>
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <CreateButton />
      </View>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    marginBottom: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  flatList: {paddingHorizontal: 10},
});
