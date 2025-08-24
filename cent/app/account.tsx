import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

const account = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },

    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },

    button: {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 5,
      marginTop: 20
    },

    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Accounts</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default account

const styles = StyleSheet.create({})