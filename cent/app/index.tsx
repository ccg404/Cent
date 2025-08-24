import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router";


export default function Index() {
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    
    header:{
      width: "100%",
      padding: 16,
      flexDirection: "column",
      gap: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#e7e4e4ff",
    },

    headerTextContainer: {
      flexDirection: "column",
      gap: 4,
    },

    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333"
    },

    nav:{
      flexDirection: "row",
      justifyContent: "space-around",
      gap: 20,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "#edececff",
      borderColor: "#edececff",
    },

    navBtnContainer:{
      padding: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 30,
    },

    content:{
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center",
    },

    balanceCard:{
      width: 320,
      height: 200,
      borderRadius: 16,
      backgroundColor: "#4a90e2",
      justifyContent: "center",
      alignItems: "flex-start",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
      padding: 20,
    },

    balanceCardText: {
      color: "#fff",
      fontSize: 20,
    },

    balanceCardAmount: {
      color: "#fff",
      fontSize: 32,
    },

    summaryCardsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      padding: 5,
    },

    incomeCard: {
      width: 150,
      backgroundColor: "#ffffffff",
      borderRadius: 8,
      padding: 16,
      marginRight: 8,
      justifyContent: "center",
      alignContent: "center",
      gap: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    incomeCardText: {
      color: "#b5b5b5ff",
      fontSize: 12,
    },

    incomeCardAmount: {
      color: "#0d8d0bff",
      fontSize: 22,
    },

    expenseCard:{
      width: 150,
      backgroundColor: "#ffffffff",
      borderRadius: 8,
      padding: 16,
      marginLeft: 8,
      justifyContent: "center",
      alignContent: "center",
      gap: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    expenseCardText: {
      color: "#b5b5b5ff",
      fontSize: 12,
    },

    expenseCardAmount: {
      color: "#f34646ff",
      fontSize: 22,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Cent</Text>
          <Text>Good morning, Carlo!</Text>
        </View>
        {/* Navigation Section */}
        <View style={styles.nav}>
          <View style={styles.navBtnContainer}>
          <TouchableOpacity>
            <Link href="/">Overview</Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/account">Accounts</Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/activity">Activity</Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/budget">Budget</Link>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceCardText}>Total Balance</Text>
          <Text style={styles.balanceCardAmount}>₱0.00</Text>
        </View>
        <View style={styles.summaryCardsContainer}>
          <View style={styles.incomeCard}>
            <Text style={styles.incomeCardText}>Monthly Income</Text>
            <Text style={styles.incomeCardAmount}>₱0.00</Text>
          </View>
          <View style={styles.expenseCard}>
            <Text style={styles.expenseCardText}>Total Expenses</Text>
            <Text style={styles.expenseCardAmount}>₱0.00</Text>
          </View>
        </View>
      </View>
      {/* Quick Actions Section*/}
      <View>

      </View>
     {/* Rcent Activiy Section */}
    </SafeAreaView>
  );
}

