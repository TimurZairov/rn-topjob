import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
//
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../theme/theme';
import CreateVacancy from '../../assets/icons/CreateVacancy';
import GroupIcon from '../../assets/icons/GroupIcon';
import CreateTask from '../../assets/icons/CreateTask';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationParamsProps} from '../../navigation/types/types';
import {AppContext} from '../../context/context';

const CreateButton = () => {
  const navigation = useNavigation<StackNavigationParamsProps>();
  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const {setIsVacancy, setIsService, setIsTask} = useContext(AppContext);

  const handlePress = () => {
    setShowCreateBtn(prev => !prev);
  };
  //create new Vacancy change screen
  const handleCreateVacancy = () => {
    navigation.navigate('Create');
    setShowCreateBtn(false);
    setIsVacancy(true);
    setIsTask(false);
    setIsService(false);
  };

  //create new Task change screen
  const handleCreateService = () => {
    navigation.navigate('Create');
    setShowCreateBtn(false);
    setIsVacancy(false);
    setIsTask(false);
    setIsService(true);
  };

  //create new Task change screen
  const handleCreateTask = () => {
    navigation.navigate('Create');
    setShowCreateBtn(false);
    setIsVacancy(false);
    setIsTask(true);
    setIsService(false);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <LinearGradient
        style={styles.btn}
        colors={[COLORS.darkBlue, COLORS.lightBlue]}>
        <Text style={styles.plus}>+</Text>
      </LinearGradient>
      {/* MODAL TO CREATE JOB */}
      {showCreateBtn ? (
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnPopup}
            onPress={handleCreateVacancy}>
            <CreateVacancy />
            <Text style={styles.text}>Создать вакансию</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCreateService}
            style={styles.btnPopup}>
            <GroupIcon />
            <Text style={styles.text}>Создать услугу</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCreateTask} style={styles.btnPopup}>
            <CreateTask />
            <Text style={styles.text}>Создать задачу</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  btn: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: COLORS.white,
    fontSize: SIZES.xxlg,
  },
  btnWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    padding: 10,
    width: 200,
    borderRadius: 5,
    zIndex: -1,
    top: -120,
    right: 30,
  },
  btnPopup: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});
