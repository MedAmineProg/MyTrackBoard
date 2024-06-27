// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {StyleSheet,View, Text, SafeAreaView, Image, ImageBackground, TextInput} from 'react-native';
import { colors, fonts } from '../../styles';
import DocumentScreen from '../DocumentScreen';

// const chartIcon = require('../../assets/images/pages/chart.png');
// const calendarIcon = require('../../assets/images/pages/calendar.png');
// const chatIcon = require('../../assets/images/pages/chat.png');
// const galleryIcon = require('../../assets/images/pages/gallery.png');
// const profileIcon = require('../../assets/images/pages/profile.png');
// const loginIcon = require('../../assets/images/pages/login.png');
// const blogIcon = require('../../assets/images/pages/blog.png');

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
    source={require("../../images/back.jpg")}
    style={{ width: "100%", height: "100%" }}
  >
    <View
      style={{
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        paddingHorizontal: 40,
      }}
    >
    </View>

    <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
      <Text
        style={{
          fontSize: 40,
          color: "#522289",
          fontFamily: "RobotoBold",
        }}
      >
        Welcome
      </Text>

      <Text
        style={{
          fontSize: 15,
          paddingVertical: 10,
          paddingRight: 80,
          lineHeight: 22,
          fontFamily: "RobotoRegular",
          color: "#a2a2db",
        }}
      >
        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
      </Text>



      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: -40, marginTop: 200 }}
      >
        <TouchableOpacity
          name="Auth"
          onPress={() => navigation.navigate("RequestScreen")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
          }}
        >
          <Icon name="folder" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
            marginHorizontal: 22,
          }}
        >
          <Icon name="file" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
          }}
        >
          <Icon name="chat" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
            marginLeft: 22,
          }}
        >
          <Icon name="calendar" color="white" size={32} />
        </TouchableOpacity>
        
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: -40, marginTop: 30 }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Detail")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
          }}
        >
          <Icon name="cog" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
            marginHorizontal: 22,
          }}
        >
          <Icon name="office-building" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
          }}
        >
          <Icon name="account" color="white" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#9eddee",
            marginLeft: 22,
          }}
        >
          <Icon name="dots-horizontal" color="white" size={32} />
        </TouchableOpacity>
        
      </ScrollView>
    </View>
    
  </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
    fontFamily:'Roboto',
    fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  blogItem: {
    width: '31%',
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});