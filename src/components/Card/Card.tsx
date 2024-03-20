import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import ViewIcon from '../../assets/icons/ViewIcon';
import {Service, Vacancy} from '../../types/type';
import Photo from '../../assets/icons/Photo';
import CheckedIcon from '../../assets/icons/CheckedIcon';
import {useNavigation} from '@react-navigation/native';

interface ICard {
  cardItem: Vacancy & Service;
  isTask?: boolean;
  id?: string;
}

const Card = ({cardItem}: ICard) => {
  const {
    salary,
    companyName,
    createdAt,
    views,
    description,
    location,
    img,
    name,
    salaryFrom,
    salaryTo,
    images,
    city,
    address,
    userName,
    isContract,
    isTask,
    _id,
  } = cardItem;

  const navigation = useNavigation();

  //formate date
  const formateDate = () => {
    if (createdAt) {
      const created = new Date(createdAt);

      const day = created.getUTCDate(); // get day
      const month = created.getUTCMonth(); // get month
      const year = created.getUTCFullYear(); //year

      return `${day < 10 ? '0' + day : day}.${
        month < 10 ? '0' + (month + 1) : month
      }.${year}`;
    }
  };

  const handleDetailScreen = () => {
    navigation.navigate('Detail', {id: _id, key: 'vacancy'});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleDetailScreen}>
      {/* CardHeader */}
      <View style={styles.cardHeader}>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{companyName || userName}</Text>
          <CheckedIcon />
        </View>

        <View style={styles.data}>
          <CalendarIcon color={COLORS.darkGrey} />
          <Text style={styles.dataText}>{formateDate()}</Text>
          <Text style={{marginHorizontal: 6, color: COLORS.darkGrey}}>|</Text>
          <ViewIcon color={COLORS.darkGrey} />
          <Text style={styles.dataText}>{views}</Text>
        </View>
      </View>
      {/* CARD MAIN */}
      <View style={styles.cardMain}>
        {img || (images && images.length > 0) ? (
          <Image
            source={{
              uri: img || (images?.[0] && images[0]), // check for images or img | otherwise default
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : <View style={styles.defaultImg}>
            <Photo />
          </View> ? (
          isTask
        ) : null}
        <View style={styles.cardName}>
          <Text style={styles.vacancyName}>{name}</Text>
          {salary && <Text style={styles.salary}>{salary} сум</Text>}

          {!isContract ? (
            <Text style={styles.salary}>
              {`${salaryFrom} - ${salaryTo}`} сум
            </Text>
          ) : (
            <Text style={styles.salary}>Договорная</Text>
          )}
        </View>
      </View>
      {/* CARD DESCRIPTION */}
      <View style={styles.desc}>
        <Text style={styles.descText}>{description}</Text>
      </View>
      <Text style={styles.descText}>{location || address}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLORS.grey,
    borderRadius: 8,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: COLORS.textGrey,
    fontSize: SIZES.default,
    marginRight: 4,
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    color: COLORS.darkGrey,
    fontSize: SIZES.default,
    marginLeft: 6,
  },
  cardMain: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  cardName: {
    height: 50,
    justifyContent: 'space-between',
  },
  defaultImg: {
    width: 80,
    height: 80,

    borderRadius: 10,
    marginRight: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.darkGrey,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  vacancyName: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  salary: {
    color: COLORS.mainOrange,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  desc: {marginBottom: 20},
  descText: {
    color: COLORS.textGrey,
    fontSize: SIZES.md,
  },
});
