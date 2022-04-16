import React from 'react';
import {Text, View, Image} from 'react-native';
import {Images, Icons, Theme} from '../shared';
import QuickText from './QuickText';

const {SIZES, FONT_FAMILY, FONT_SIZES, COLORS} = Theme;

const Feed = ({isPlaying, isSaved, isLiked, hasClock, name, abbr, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#F1F1F1',
        borderBottomWidth: 1,
        paddingBottom: SIZES.base,
        marginBottom: SIZES.base * 2,
      }}>
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginRight: SIZES.base,
        }}
        source={Images.person}
      />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                fontSize: FONT_SIZES.regular,
                fontFamily: FONT_FAMILY.SemiBold,
                color: COLORS.black,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZES.small,
                fontFamily: FONT_FAMILY.Regular,
                color: COLORS.black,
              }}>
              {abbr}
            </Text>
          </View>
          <Text
            style={{
              fontSize: FONT_SIZES.small,
              fontFamily: FONT_FAMILY.SemiBold,
              color: COLORS.gray,
            }}>
            Just Now
          </Text>
        </View>

        {text.length > 0 && (
          <Text
            style={{
              fontSize: FONT_SIZES.regular,
              fontFamily: FONT_FAMILY.Regular,
              color: COLORS.black,
              lineHeight: FONT_SIZES.regular * 1.5,
              marginTop: SIZES.base,
            }}>
            {text}
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          {isPlaying ? <Icons.Pause /> : <Icons.VideoPlay />}
          <View
            style={{
              height: 8,
              borderRadius: 4,
              backgroundColor: COLORS.lightGray,
              flex: 1,
              overflow: 'hidden',
              marginHorizontal: SIZES.base,
            }}>
            {isPlaying && (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: COLORS.secondary,
                  height: '100%',
                  width: '30%',
                }}
              />
            )}
          </View>
          <Text
            style={{
              fontSize: FONT_SIZES.small,
              fontFamily: FONT_FAMILY.SemiBold,
              color: COLORS.black,
            }}>
            00:54
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base * 2,
            justifyContent: 'flex-end',
          }}>
          {hasClock && <QuickText icon={Icons.Timer} value="0:33" />}
          <QuickText icon={Icons.Comment} value="999k" />
          <QuickText
            icon={isLiked ? Icons.LikesSec : Icons.Likes}
            value="999k"
            active={isLiked ? true : false}
          />
          <QuickText
            icon={isSaved ? Icons.SaveSec : Icons.Save}
            hasMarginRight={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Feed;
