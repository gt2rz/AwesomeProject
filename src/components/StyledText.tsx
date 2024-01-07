import React from 'react';
import {Text, StyleSheet} from 'react-native';
import theme from '../theme';

type StyleTextProps = {
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  align?: string;
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restOfProps
}: StyleTextProps & React.ComponentProps<typeof Text>) {
  const textStyle = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
