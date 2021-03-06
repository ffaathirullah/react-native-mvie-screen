import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Inputs from "../../components/auth/Inputs";
import Submit from "../../components/auth/Submit";
import Account from "../../components/auth/Account";
import { useNavigation } from "@react-navigation/native";
import { Login_Illsutration } from "../../assets/illustration";
const Login = (props, onpress) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={{ backgroundColor: "#0F0E0E" }}>
      <View style={styles.container}>
        <Login_Illsutration
          width={windowWidth * 0.912}
          height={windowHeight * 0.212}
        />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: windowHeight * 0.0312 }} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{ width: "90%" }}>
          <Text
            style={
              ([styles.textBody], { alignSelf: "flex-end", color: "#fff" })
            }
          >
            Forgot Password?
          </Text>
        </View>
        <Submit
          title="LOG IN"
          color="#0148a4"
          onpress={() => navigation.navigate("SignUp")}
        />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: "row" }}>
          <Account color="#4096FE" icon="facebook" title="Facebook" />
          <Account color="#FF002E" icon="google" title="Google" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account </Text>
          <Text
            style={[styles.textBody, { color: "#4096FE" }]}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "Foundation",
    fontSize: 40,
    marginVertical: 10,
    color: "#fff",
  },
  textBody: {
    fontFamily: "Foundation",
    fontSize: 16,
    color: "#fff",
  },
});

export default Login;
