import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Icons, Theme} from '../shared';
import {Feed} from '../compontens';

const {SIZES, FONT_FAMILY, FONT_SIZES, COLORS} = Theme;

const FEED_LIST = [
  {
    name: 'Michael Scott',
    abbr: '@mscott',
    text: 'Why are we here, where are we going?',
    isPlaying: false,
    isSaved: true,
    isLiked: false,
    hasClock: false,
  },
  {
    name: 'Pam Beesley',
    abbr: '@pamb',
    text: 'I love inside jokes. I hope to be a part of one someday!',
    isPlaying: false,
    isSaved: false,
    isLiked: false,
    hasClock: true,
  },
  {
    name: 'Jim Halpert',
    abbr: '@jhalpert',
    text: '',
    isPlaying: true,
    isSaved: false,
    isLiked: true,
    hasClock: false,
  },
  {
    name: 'Pam Beesley',
    abbr: '@pamb',
    text: 'I love inside jokes. I hope to be a part of one someday! ',
    isPlaying: false,
    isSaved: false,
    isLiked: false,
    hasClock: false,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{paddingHorizontal: SIZES.base * 2}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: SIZES.base * 2,
            alignItems: 'center',
          }}>
          <Icons.Logo />
          <Text
            style={{
              fontSize: FONT_SIZES.regular,
              fontFamily: FONT_FAMILY.Bold,
              color: COLORS.black,
            }}>
            Dwight's Feed
          </Text>
          <Icons.Play />
        </View>
        {FEED_LIST.map(i => {
          return (
            <Feed
              hasClock={i.hasClock}
              isLiked={i.isLiked}
              isPlaying={i.isPlaying}
              isSaved={i.isSaved}
              key={i.text}
              text={i.text}
              abbr={i.abbr}
              name={i.name}
            />
          );
        })}

        <Icons.Mic style={{alignSelf: 'flex-end'}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
