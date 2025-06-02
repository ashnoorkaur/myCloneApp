import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function App() {
  const handlePress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <MaterialIcons name="arrow-back-ios" style={styles.topBackArrow} />
        <View style={styles.headerCenter}>
          <Text style={styles.smallText}>POSTS_EVERYDAY</Text>
          <Text style={styles.largeText}>Posts</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Press" onPress={handlePress} />
        </View>
      </View>
      <View style={styles.lineDivider} />

      {/* User Info */}
      <View style={styles.userRow}>
        <Image
          source={{ uri: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.postLargeText}>posts_everyday</Text>
          <Text style={styles.postSmallText}>via frenchie_fry39</Text>
        </View>
        <SimpleLineIcons name="options" size={20} color="black" style={styles.postDots} />
      </View>

      {/* Post Image */}
      <Image source={{ uri: 'https://i.pinimg.com/736x/8a/7c/5c/8a7c5cbb4fd8d234e09b773ae9d75152.jpg', }} style={styles.postImage} />

      {/* Like/comment icons row */}
      <View style={styles.reactionRow}>
        <View style={styles.leftReactionIcons}>
          <FontAwesome name="heart-o" size={24} color="black" style={styles.icon} />
          <FontAwesome name="comment-o" size={24} color="black" style={styles.icon} />
          <FontAwesome name="paper-plane" size={24} color="black" style={styles.icon} />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>

      {/* Like info */}
      <View style={styles.likeInfoRow}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
          }}
          style={styles.avatarsmall}
        />
        <Text style={styles.likeText}>
          &nbsp;Liked by <Text style={{ fontWeight: 'bold' }}>paisley.print.48</Text> and <Text style={{ fontWeight: 'bold' }}>7 others</Text>.
        </Text>
      </View>

      {/* Caption under the post*/}
      <Text style={styles.caption}>
        <Text style={{ fontWeight: 'bold' }}>frenchie_fry39 </Text>
        Fresh shot on a sunny day!
      </Text>

      {/* View all comments section*/}
      <Text style={styles.viewCommentsText}>View all 12 comments</Text>

      {/* Comments */}
      <Text style={styles.comment}>
        <Text style={{ fontWeight: 'bold' }}>lil_wyatt838 </Text>
        Awesome tones
      </Text>
      <Text style={styles.comment}>
        <Text style={{ fontWeight: 'bold' }}>pia.in.a.pod </Text>
        Gorg. Love it!
      </Text>

      {/* Time text*/}
      <Text style={styles.timeText}>1 day ago</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.lineDividerNavbar} />
      <View style={styles.navbar}>
        <FontAwesome name="home" size={27} color="black" />
        <FontAwesome name="search" style={styles.navbarIcon} />
        <MaterialIcons name="video-collection" style={styles.navbarIcon} />
        <FontAwesome name="shopping-bag" style={styles.navbarIcon} />
        <FontAwesome name="user-circle-o" style={styles.navbarIcon} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  // Main container
  container: {
    paddingTop: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flex: 1,
  },

  // Top Header
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 10,
  },
  topBackArrow: {
    color: 'black',
    fontSize: 24,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 12,
    color: 'gray',
  },
  largeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 2,
    marginRight: 0,
  },

  // Divider
  lineDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
  },

  // User Info Row
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 38,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  postLargeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  postSmallText: {
    fontSize: 12,
  },
  postDots: {
    marginTop: 2,
    marginLeft: 180,
  },

  // Post Image
  postImage: {
    width: '100%',
    height: 420,
  },

  // Reaction Row
  reactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
  },
  leftReactionIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 18,
  },

  // Like Info Row
  likeInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avatarsmall: {
    width: 22,
    height: 20,
    borderRadius: 50,
  },
  likeText: {
    marginTop: 5,
  },

  // Caption & Comments section
  caption: {
    marginTop: 5,
  },
  username: {
    fontWeight: 'bold',
  },
  viewCommentsText: {
    marginTop: 3,
    color: 'gray',
    fontSize: 14,
  },
  comment: {
    marginTop: 3,
  },
  timeText: {
    marginTop: 5,
    color: 'gray',
    fontSize: 12,
  },

  // Bottom Navigation
  lineDividerNavbar: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginTop: 12,
    marginBottom: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  navbarIcon: {
    color: "black",
    fontSize: 24,
  },
});
