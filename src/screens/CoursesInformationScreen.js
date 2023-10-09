import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformation() {
  return (
    <ScrollView>
      <Information
        title="Angular Egitimi"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamli Angular Egitimi"
      />
      <Information
        title="Bootstrap 5 Egitimi"
        imageSource={require("../../assets/bootstrap.jpg")}
        desc="Kapsamli Bootstrap Egitimi"
      />
      <Information
        title="C Programlama Egitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamli C Programlama Egitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
