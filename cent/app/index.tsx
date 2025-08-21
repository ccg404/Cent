import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";


export default function Index() {
  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
      borderColor: "black",
      padding: 10,
      textAlign: "center",
    },

    btn: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 5,
      color: "color",
      textAlign: "center",
    },

    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderBlockColor: "black",
        backgroundColor: "#ffffffff",
        gap: 10,
        padding: 10,
    },

    navigation:{
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      marginBottom: 20,
    },

    heading:{
      borderColor: "gray",
      borderBottomWidth: 1,
      padding: 20,
      marginBottom: 20,
      width: "100%",
    },

    content: {
      width: "100%",
      marginBottom: 30,
    },

    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },

    display:{
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
    },

    transactionArea: {
      width: "100%",
      padding: 10,
    },

    optionsContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      marginBottom: 20,
    },

    buttonsWrapper:{
      width: "50%",
      borderRadius: 5,
      overflow: "hidden",
      color: "black",
      borderWidth: 1,
      borderColor: "black",
    },

    card1:{
      backgroundColor: "#f0f0f0",
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      elevation: 5,
    },

    card2:{
      backgroundColor: "#b9fabbff",
      borderColor: "green",
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      elevation: 5,
    },

    card3:{
      backgroundColor: "#feaaaaff",
      borderColor: "red",
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      elevation: 5,
    },
  });

  const DATA =[ 
    {
      id: '1',
      title: 'Total Balance',
      value: '₱200'
    },
    {
      id: '2',
      title: 'Monthly Income',
      value: '+ ₱300'
    },
    
    {
      id: '3',
      title: 'Total Expenses',
      value: '- ₱100'
    }
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>Cent</Text>
      </View>
      <View style={styles.navigation}>
          <Text>Overview</Text>
          <Text>Accounts</Text>
          <Text>Transactions</Text>
          <Text>Budgets</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card1}>
          <Text>Total Balance</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", marginTop: 10 }}>₱0</Text>
        </View>
        <View style={styles.card2}>
          <Text>Monthly Income</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", marginTop: 10 }}>₱0</Text>
        </View>
        <View style={styles.card3}>
          <Text>Total Expenses</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", marginTop: 10 }}>₱0</Text>
        </View>
      </View>
      <View style={styles.transactionArea}>
        <View style={styles.optionsContainer}>
          <Text style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
          }}>Recent Activity</Text>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity>
              <Text style={styles.btn}>+ Add Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
