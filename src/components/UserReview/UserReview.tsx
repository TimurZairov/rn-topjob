import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import LikeIcon from '../../assets/icons/LikeIcon';
import DislikeIcon from '../../assets/icons/DislikeIcon';

interface IUser {
  likes: number | undefined;
  dislikes: number | undefined;
}

const UserReview = ({likes, dislikes}: IUser) => {
  return (
    <View>
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
  );
};

export default UserReview;

const styles = StyleSheet.create({
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
});
