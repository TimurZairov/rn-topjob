import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
//
import Header from '../../components/Header/Header';
import {COLORS, SIZES} from '../../theme/theme';
import Card from '../../components/Card/Card';
import CreateButton from '../../components/CreateButton/CreateButton';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import {getVacancies} from '../../redux/actions/vacanciesAction';

const VacanciesScreen = () => {
  const {vacancies, loading} = useAppSelector(state => state.vacancies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //GET ALL VACANCIES
    (async () => {
      dispatch(getVacancies());
    })();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={COLORS.mainOrange} size={SIZES.md} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Header />
        </View>
        {/* CARD */}

        <FlatList
          data={vacancies || []}
          renderItem={({item}) => {
            return <Card vacancy={item} />;
          }}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.flatList}
        />
      </SafeAreaView>
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <CreateButton />
      </View>
    </View>
  );
};

export default VacanciesScreen;

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
