import {
  ActivityIndicator,
  FlatList,
  Platform,
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

import {RefreshControl} from 'react-native-gesture-handler';
import {getTasks} from '../../redux/actions/taskAction';

const TasksScreen = () => {
  const dispatch = useAppDispatch();
  const {tasks, loading} = useAppSelector(state => state.tasks);

  const handleRefresh = async () => {
    dispatch(getTasks());
  };

  useEffect(() => {
    //GET ALL TASKS
    (async () => {
      dispatch(getTasks());
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

        {tasks && tasks.length > 0 ? (
          <FlatList
            data={tasks || []}
            renderItem={({item}) => {
              return <Card cardItem={item} isTask />;
            }}
            contentContainerStyle={styles.flatList}
            refreshControl={
              <RefreshControl
                tintColor={COLORS.mainOrange}
                onRefresh={handleRefresh}
                refreshing={loading}
                size={Platform.OS === 'ios' ? SIZES.default : undefined}
                progressViewOffset={Platform.OS === 'ios' ? 10 : undefined}
              />
            }
          />
        ) : (
          <View style={styles.indicator}>
            <ActivityIndicator color={COLORS.mainOrange} />
          </View>
        )}
      </SafeAreaView>
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <CreateButton />
      </View>
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
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
  indicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
