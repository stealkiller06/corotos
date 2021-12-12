import React, { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
interface CorotosSafeAreaViewProps {
  children: ReactNode;
}
export function CorotosSafeAreaView(props: CorotosSafeAreaViewProps) {
  const { children } = props;
  return (
    <SafeAreaView style={styles.CorotosSafeAreaViewStyle}>
      <View style={styles.viewStyle}>{children}</View>
    </SafeAreaView>
  );
}
