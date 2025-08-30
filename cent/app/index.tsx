import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router";
import { 
  PiggyBank,
  Wallet,
  ChartPie,
  ChartNoAxesCombined,
  WalletCards,
  Landmark,
  TrendingDown,
  TrendingUp
 } from 'lucide-react-native';



export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");

   const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <View style={styles.content}>
        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balanceCardText}>Total Balance</Text>
            <Text style={styles.balanceCardAmount}>₱0.00</Text>
          </View>
          <View>
            <Wallet size={45} color={"white"}/>
          </View>
        </View>
        <View style={styles.summaryCardsContainer}>
          <View style={styles.incomeCard}>
            <View style={styles.incomeCardTextContainer}>
              <Text style={styles.incomeCardText}>Monthly Income</Text>
                <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
                  <Text style={styles.incomeCardAmount}>₱0.00</Text>
                  <View style={{padding: 10, borderRadius: 10, backgroundColor: "#e0f2e0ff"}}>
                    <TrendingUp size={20} color={"green"}/>
                  </View>
                </View>
            </View>
          </View>
          <View style={styles.expenseCard}>
            <View style={styles.expenseCardTextContainer}>
              <Text style={styles.expenseCardText}>Total Expenses</Text>
              <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
                <Text style={styles.expenseCardAmount}>₱0.00</Text>
                <View style={{padding: 10, borderRadius: 10, backgroundColor: "#fce4e4ff"}}>
                  <TrendingDown size={20} color={"red"}/>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
        );
      case "activity":
        return (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              🏦 Activity Section
            </Text>
            <Text>Recent Transactions will go here</Text>
          </View>
        );
      case "budget":
        return (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              💰 Budget Section
            </Text>
            <Text>Budget planning content here</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <PiggyBank size={45}/>
          <View>
           <Text style={styles.headerText}>Cent</Text>
           <Text style={{color: "#767272ff"}}>Good morning, Carlo!</Text>
          </View>
        </View>

 {/* Navigation Section */}
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => setActiveTab("overview")}
            style={{
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: activeTab === "overview" ? "#ffffffff" : "#edececff"
            }}
          >
            <ChartNoAxesCombined size={15} />
            <Text>Overview</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("activity")}
            style={{
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: activeTab === "activity" ? "#ffffffff" : "#edececff"
            }}
          >
            <Landmark size={15} />
            <Text>Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("budget")}
            style={{
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: activeTab === "budget" ? "#ffffffff" : "#edececff"
            }}
          >
            <ChartPie size={15} />
            <Text>Budget</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Section */}
      <View style={{ flex: 1, padding: 20 }}>{renderContent()}</View>
      {/* Quick Actions Section*/}
      
      <View>

      </View>
     {/* Rcent Activiy Section */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    
    header:{
      width: "100%",
      padding: 10,
      flexDirection: "column",
      gap: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#e7e4e4ff",
    },

    headerTextContainer: {
      flexDirection: "row",
      justifyContent:"flex-start",
      alignItems: "center",
      gap: 15,
      padding: 10
    },

    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333"
    },

    nav:{
      flexDirection: "row",
      justifyContent: "space-around",
      gap: 10,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "#edececff",
      borderColor: "#dedcdcff",
      padding: 5,
    },

    navBtnContainer:{
      padding: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 15,
    },

    content:{
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center",
    },

    balanceCard:{
      width: 340,
      height: 150,
      borderRadius: 20,
      backgroundColor: "#4a90e2",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
      padding: 20,
      flexDirection: "row"
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
      width: 160,
      backgroundColor: "#ffffffff",
      borderRadius: 8,
      padding: 15,
      marginRight: 8,
      justifyContent: "flex-start",
      alignContent: "center",
      gap: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: "row",
    },

    incomeCardText: {
      color: "#b5b5b5ff",
      fontSize: 14,
    },

    incomeCardTextContainer:{
      gap: 15,
    },

    incomeCardAmount: {
      color: "#0d8d0bff",
      fontSize: 28,
    },

    expenseCard:{
      width: 160,
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
      fontSize: 14,
    },

    expenseCardAmount: {
      color: "#f34646ff",
      fontSize: 28,
    },

    expenseCardTextContainer:{
      gap: 15,
    }
  });