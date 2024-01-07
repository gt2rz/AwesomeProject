import React from 'react';
import {View} from 'react-native';
import StyledText from './StyledText';

const parseThousands = (num: number) => {
  if (num > 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }

  return num;
};

const RepositoryStats = props => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledText>
        <StyledText align="center">Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.ratingAverage)}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
