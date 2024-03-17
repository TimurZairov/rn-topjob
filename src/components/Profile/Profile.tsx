import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Title from '../Title/Title';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import ContainerBlock from '../ContainerBlock/ContainerBlock';
import DefaultAvatar from '../DefaultAvatar/DefaultAvatar';
import LikeIcon from '../../assets/icons/LikeIcon';
import DislikeIcon from '../../assets/icons/DislikeIcon';
import Button from '../Button/Button';
import {User} from '../../types/type';

interface IProfile {
  user: User;
}

const Profile = ({user}: IProfile) => {
  const {dislikes, likes, phoneNumber, createdAt, name, email, city, image} =
    user;

  //transform date to format
  const handleDate = () => {
    if (user) {
      const registerDay = new Date(createdAt);
      //date UTC
      const day = registerDay.getUTCDate(); // get day
      const month = registerDay.getUTCMonth(); // get month
      const year = registerDay.getUTCFullYear(); // get year

      return `${day < 10 ? '0' + day : day} / ${
        month < 10 ? '0' + (month + 1) : month
      } / ${year}`;
    }
  };

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
              {image.length > 0 ? (
                <View
                  style={{
                    width: 90,
                    aspectRatio: 1,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: image}}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              ) : (
                <View style={styles.avatar}>
                  <DefaultAvatar />
                </View>
              )}

              <Text style={styles.userName}>{name}</Text>
            </View>
            {/* Reviews */}
            <View style={styles.reviewsContainer}>
              <View style={styles.likesContainer}>
                <View style={styles.like}>
                  <LikeIcon />
                  <Text style={styles.likeNum}>{likes}</Text>
                </View>
                <View style={styles.like}>
                  <DislikeIcon />
                  <Text style={styles.likeNum}>{dislikes}</Text>
                </View>
              </View>
            </View>
          </ContainerBlock>
          {/* USER */}
          <View style={styles.user}>
            {/* PHONE NUMBER */}
            <View>
              <Text style={styles.userDatTitle}>Номер телефона:</Text>
              <Text style={styles.userDataInfo}>{phoneNumber}</Text>
            </View>
            {/* EMAIL */}
            <View>
              <Text style={styles.userDatTitle}>E-mail:</Text>
              <Text style={styles.userDataInfo}>{email}</Text>
            </View>
            {/* Date */}
            <View>
              <Text style={styles.userDatTitle}>Дата регистрации:</Text>
              <Text style={styles.userDataInfo}>{handleDate()}</Text>
            </View>
            {/* CITY  */}
            <View>
              <Text style={styles.userDatTitle}>Город</Text>
              <Text style={styles.userDataInfo}>{city}</Text>
            </View>
          </View>
          <Button>Изменить профиль</Button>
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
    height: 90,
  },
  avatar: {
    backgroundColor: COLORS.greyMedium,
    alignSelf: 'baseline',
    padding: 27,
    aspectRatio: 1,
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
    width: 120,
    backgroundColor: COLORS.grey,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 10,
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
