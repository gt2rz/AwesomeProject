import React from 'react';
import {View, FlatList} from 'react-native';

import repositories from '../data/repositories.js';
import RepositoryItem from './RepositoryItem';

import RepositoryProps from '../types/RepositoryProps';

const ItemSeparator = () => {
  const separatorStyle = {height: 20};
  return <View style={separatorStyle} />;
};

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}: {item: RepositoryProps}) => (
        <RepositoryItem {...item} />
      )}
    />
  );
};

export default RepositoryList;
