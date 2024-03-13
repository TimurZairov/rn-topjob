import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Title from '../Title/Title';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import ContainerBlock from '../ContainerBlock/ContainerBlock';
import DefaultAvatar from '../DefaultAvatar/DefaultAvatar';
import LikeIcon from '../../assets/icons/LikeIcon';
import DislikeIcon from '../../assets/icons/DislikeIcon';

const Profile = () => {
  return (
    <>
      <HeaderLogo />

      <ScrollView style={{flex: 1}}>
        <View style={styles.profileContainer}>
          <Title style={styles.titleContainer} textStyle={styles.title}>
            Мой профиль
          </Title>
          {/* HEADER */}
          <ContainerBlock>
            <View style={styles.userData}>
              <View style={styles.avatar}>
                <DefaultAvatar />
              </View>
              <Text style={styles.userName}>Name</Text>
            </View>
            {/* Reviews */}
            <View style={styles.reviewsContainer}>
              <View style={styles.reviews}>
                <Text style={styles.reviewTitle}>отзывы</Text>
                <Text style={styles.review}>284</Text>
              </View>
              <View style={styles.likesContainer}>
                <View style={styles.like}>
                  <LikeIcon />
                  <Text style={styles.likeNum}>285</Text>
                </View>
                <View style={styles.like}>
                  <DislikeIcon />
                  <Text style={styles.likeNum}>285</Text>
                </View>
              </View>
            </View>
          </ContainerBlock>
          {/* USER */}
          <View style={styles.user}>
            {/* PHONE NUMBER */}
            <View>
              <Text style={styles.userDatTitle}>Номер телефона:</Text>
              <Text style={styles.userDataInfo}>+998 90 438 40 41</Text>
            </View>
            {/* EMAIL */}
            <View>
              <Text style={styles.userDatTitle}>E-mail:</Text>
              <Text style={styles.userDataInfo}>sample@outlook.com</Text>
            </View>
            {/* Date */}
            <View>
              <Text style={styles.userDatTitle}>Дата рождения:</Text>
              <Text style={styles.userDataInfo}>22/05/1998</Text>
            </View>
            {/* Category */}
            <View>
              <Text style={styles.userDatTitle}>Категории</Text>
              <Text style={styles.userDataInfo}>
                Офис, работа, стройка, на дому, программирование, сантехника
              </Text>
            </View>
            {/* DESCRIPTION */}
            <View>
              <Text style={styles.userDatTitle}>Описание</Text>
              <Text style={styles.userDataInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Text>
            </View>
            {/* CITY  */}
            <View>
              <Text style={styles.userDatTitle}>Город</Text>
              <Text style={styles.userDataInfo}>
                Ташкент, Шайхонтохурский район
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: SIZES.lg,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  titleContainer: {
    marginVertical: 16,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: COLORS.greyMedium,
    alignSelf: 'baseline',
    padding: 27,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginLeft: 20,
  },
  reviewsContainer: {
    flexDirection: 'row',
    height: 58,
    width: 208,
    backgroundColor: COLORS.grey,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 16,
  },
  reviews: {
    backgroundColor: COLORS.mainOrange,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewTitle: {
    color: COLORS.white,
    fontSize: SIZES.default,
    fontFamily: FONTS.bold,
  },
  review: {
    color: COLORS.white,
    fontSize: SIZES.lg,
    fontFamily: FONTS.bold,
  },
  likesContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeNum: {
    color: COLORS.darkGrey,
    fontSize: SIZES.md,
    marginLeft: 4,
  },
  user: {
    paddingVertical: 20,
  },
  userDatTitle: {
    color: COLORS.darkGrey,
    marginVertical: 6,
    fontFamily: FONTS.medium,
    fontSize: SIZES.default,
  },
  userDataInfo: {
    color: COLORS.black,
    marginVertical: 6,
    fontFamily: FONTS.light,
    fontSize: SIZES.md,
  },
});
