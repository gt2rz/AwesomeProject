import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import RepositoryProps from '../types/RepositoryProps';
import StyledText from './StyledText';

import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHandler = props => (
  <View style={{flexDirection: 'row', paddingBottom: 2}}>
    <View style={{paddingRight: 10}}>
      <Image style={styles.image} source={{uri: props.ownerAvatarUrl}} />
    </View>
    <View style={{flex: 1}}>
      <StyledText fontSize="bold" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText color="secondary">{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props: RepositoryProps) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHandler {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});

export default RepositoryItem;
