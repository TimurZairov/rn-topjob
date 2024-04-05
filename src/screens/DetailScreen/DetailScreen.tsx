import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Task,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
//
import Title from '../../components/Title/Title';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import Button from '../../components/Button/Button';
import ContainerBlock from '../../components/ContainerBlock/ContainerBlock';
import CheckedIcon from '../../assets/icons/CheckedIcon';
import UserReview from '../../components/UserReview/UserReview';
import CardSmall from '../../components/CardSmall/CardSmall';
import {Service, Vacancy} from '../../types/type';
import {BASE_URL} from '../../config/config';
import {formateDate} from '../../helpers/foramteDate';
import {useAppDispatch, useAppSelector} from '../../redux/type';

import {getVacancies} from '../../redux/actions/vacanciesAction';
import {getServices} from '../../redux/actions/servicesAction';
import {getTasks} from '../../redux/actions/taskAction';
import MapView from 'react-native-maps';

interface IRoteParam {
  id: string;
  key: string;
}

const DetailScreen = () => {
  const router = useRoute();
  const {user} = useAppSelector(state => state.user);

  const [item, setItem] = useState<(Vacancy & Service & Task) | null>(null);
  const [loading, setLoading] = useState(false);

  const {id, key} = router.params as IRoteParam;
  const dispatch = useAppDispatch();

  //get item by Id
  const handleFetchVacancy = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BASE_URL}/${key}/${id}`);
      if (!result) {
        return;
      }
      setItem(result.data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка',
        text2: 'Ошибка сервера',
      });
    } finally {
      setLoading(false);
    }
  }, [id, key]);

  //get and update views

  const updateViews = useCallback(async () => {
    if (!user || !user._id || !id || !key) {
      return;
    }

    try {
      const result = await axios.post(`${BASE_URL}/${key}/views`, {
        updateId: id,
        userId: user?._id,
      });
      if (!result) {
        return;
      }
      setItem(result.data);
    } catch (error) {
      console.log('detailsScreen | update views', console.log(error));
    } finally {
      if (key === 'vacancies') {
        dispatch(getVacancies());
      } else if (key === 'service') {
        dispatch(getServices());
      } else {
        dispatch(getTasks());
        console.log('ok');
      }
    }
  }, [dispatch, id, key, user]);

  useEffect(() => {
    handleFetchVacancy();
  }, [handleFetchVacancy, key]);

  useEffect(() => {
    updateViews();
  }, [updateViews]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={COLORS.mainOrange} size={20} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <HeaderLogo isVisible />
        <ScrollView style={styles.scroll}>
          <Title textStyle={styles.textTitle}>{item?.name}</Title>
          <View style={styles.infoContainer}>
            {/* INFO */}
            <View style={styles.info}>
              <Text style={styles.infoText}>{item?.views} просмотров</Text>
              <Text style={styles.infoText}> | </Text>
              <Text style={styles.infoText}>
                {formateDate(item?.createdAt)}
              </Text>
            </View>

            <View style={[styles.info, {marginTop: 10}]}>
              <Text style={styles.infoText}>{item?.category}</Text>
              <Text style={styles.infoText}> | </Text>
              <Text style={styles.infoText}>{item?.userId?.city}</Text>
            </View>

            <Text
              style={[
                styles.salary,
                {marginTop: 10},
              ]}>{`${item?.salaryFrom} - ${item?.salaryTo} сум`}</Text>
          </View>
          {/* DESCRIPTION */}
          <View style={styles.descContainer}>
            <Title textStyle={styles.descTitle}>Описание</Title>
            <Text style={styles.desc}>{item?.description}</Text>
          </View>
          {/* IMAGES IF EXIST */}
          {key === 'service' && (
            <ScrollView
              horizontal
              style={styles.sliderContainer}
              contentContainerStyle={{flexDirection: 'row', gap: 10}}>
              {item?.images &&
                item?.images.length > 0 &&
                item.images.map((image, index) => {
                  return (
                    <Image
                      style={styles.images}
                      key={index}
                      source={{uri: image}}
                      resizeMode="cover"
                    />
                  );
                })}
            </ScrollView>
          )}
          {/* BUTTONS */}
          <View style={styles.btnContainer}>
            <Button
              style={{backgroundColor: COLORS.green, width: width * 0.45}}>
              {item?.userId?.phoneNumber}
            </Button>
            <Button style={{width: width * 0.45}}>Написать</Button>
          </View>
          {/* USer */}
          <ContainerBlock style={styles.block}>
            {item?.userId && item?.userId.image?.length > 0 ? (
              <Image
                source={{
                  uri: item?.userId.image,
                }}
                style={styles.userImage}
              />
            ) : null}
            <View>
              <View style={styles.userInfo}>
                <Title style={{marginRight: 6}} textStyle={styles.descTitle}>
                  {item?.userId?.name}
                </Title>
                <CheckedIcon />
              </View>
              <Text style={styles.infoText}>{item?.userId?.city}</Text>
              <View style={{width: 120, marginTop: 10}}>
                <UserReview
                  likes={item?.userId && item?.userId.likes}
                  dislikes={item?.userId && item?.userId.dislikes}
                />
              </View>
            </View>
          </ContainerBlock>

          {key === 'task' && (
            <ContainerBlock
              style={{
                paddingVertical: 10,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <View style={styles.map}>
                {/* todo */}
                <MapView />
              </View>
            </ContainerBlock>
          )}

          {/* all publish */}
          {key !== 'task' ? (
            <>
              <ContainerBlock
                style={{
                  paddingVertical: 10,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Title textStyle={styles.descTitle}>
                  Все объявления автора
                </Title>
              </ContainerBlock>
              {/* Map */}
              <ContainerBlock
                style={{
                  paddingVertical: 10,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={styles.map} />
              </ContainerBlock>
              {/* JOBS */}
              <Title style={{marginBottom: 5}} textStyle={styles.textTitle}>
                Активные задачи:
              </Title>
              {[...Array(6)].map((_, index) => {
                return (
                  <View key={index}>
                    <CardSmall />
                  </View>
                );
              })}
            </>
          ) : null}

          <LinearGradient
            colors={[COLORS.darkBlue, COLORS.lightBlue]}
            style={styles.gradient}>
            <Text style={styles.advMain}>
              Хотите найти надёжного помощника?
            </Text>
            <Text style={styles.advDesc}>
              TopJob помогает быстро решать любые бытовые и бизнес-задачи.
            </Text>
            <Button style={styles.btn} textStyle={styles.btnText}>
              Создать задание
            </Button>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: SIZES.lg,
    color: COLORS.black,
    fontFamily: FONTS.bold,
  },
  infoContainer: {
    marginTop: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: COLORS.darkGrey,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  salary: {
    color: COLORS.mainOrange,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  descContainer: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
  },
  descTitle: {
    color: COLORS.black,
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
  },
  desc: {
    color: COLORS.black,
    marginTop: 10,
    fontSize: SIZES.md,
  },
  sliderContainer: {
    marginBottom: 10,
  },
  images: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  block: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
  },
  gradient: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  advMain: {
    color: COLORS.white,
    fontSize: SIZES.xlg,
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
  advDesc: {
    color: COLORS.white,
    fontSize: SIZES.default,
    textAlign: 'center',
    fontFamily: FONTS.light,
    marginVertical: 10,
  },
  btn: {
    width: width / 2,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  btnText: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
});
