import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <View>
      <Text>Welcome to header!</Text>
    </View>
  );
}

export default Header;
