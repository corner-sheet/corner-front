import React from 'react';
import {Image} from 'react-native';

export const CommentProfile = ({src}) => {
  return (
    <Image
      source={require('../../utils/images/profile.jpg')}
      style={{
        resizeMode: 'cover',
        width: 36,
        height: 36,
        borderRadius: 100,
      }}
    />
  );
};
