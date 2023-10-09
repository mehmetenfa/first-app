import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarim"
        onPress={() => navigation.navigate("Kurslarim")}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        title="Sayac Uygulamasi"
        onPress={() => navigation.navigate("Sayac")}
      />
      <Button
        title="Kutu Uygulamasi"
        onPress={() => navigation.navigate("Kutu Uygulamasi")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
