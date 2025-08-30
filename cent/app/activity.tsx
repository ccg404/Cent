import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
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

const activity = () => {

  const styles = StyleSheet.create({
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
  });

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <SafeAreaView>
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
          <View style={styles.navBtnContainer}>
          <TouchableOpacity onPress={() => setActiveTab("overview")} style={{ padding: 10, borderRadius: 8, flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center", backgroundColor: activeTab === "overview" ? "#ffffffff" : "#edececff" }}>
            <ChartNoAxesCombined size={15}/>
            <Link href="/" style={{fontSize: 14}}>Overview</Link>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("activity")} style={{ padding: 10, borderRadius: 8,flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center", backgroundColor: activeTab === "activity" ? "#ffffffff" : "#edececff" }}>
            <Landmark size={15}/>
            <Link href="/activity" style={{fontSize: 14}}>Activity</Link>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("budget")} style={{ padding: 10, borderRadius: 8,flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center", backgroundColor: activeTab === "budget" ? "#ffffffff" : "#edececff" }}>
            <ChartPie size={15}/>
            <Link href="/budget" style={{fontSize: 14}}>Budget</Link>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Transactions Section*/}
      <View>
        <Text>Recent Transactions</Text>
        {/* Map through transactions and display them */}
      </View>
    </SafeAreaView>
  )
}

export default activity

const styles = StyleSheet.create({})