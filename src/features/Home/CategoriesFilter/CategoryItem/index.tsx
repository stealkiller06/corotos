import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface CategoryItemProps {
  title: string;
}

export default function CategoryItem(props: CategoryItemProps) {
  const { title } = props;
  return (
    <View style={styles.categoryItemContainer}>
      <Text style={styles.categoryItemText}>{title}</Text>
    </View>
  );
}
