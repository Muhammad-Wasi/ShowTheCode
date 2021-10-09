import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, SIZES, Theme} from '../../constants';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface EmptyComponentProps {
  text: string;
  icon: string;
}

const EmptyComponent = (props: EmptyComponentProps) => {
  const {text, icon} = props;
  return (
    <View style={styles.container} testID="empty-container">
      <AntIcon name={icon} size={50} color={COLORS.lightGray2} />
      <Text style={styles.text} testID="empty-text_label">
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Theme.spacing(2),
  },
  text: {
    fontSize: SIZES.body4,
    paddingTop: Theme.spacing(2),
    color: COLORS.lightGray2,
  },
});

export default EmptyComponent;
