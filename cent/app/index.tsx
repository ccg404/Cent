import { Text, View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 5,
      color: "#fff",
      
    },
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderBlockColor: "black",
        backgroundColor: "#dcdcdcff",
        gap: 10,
        padding: 10,
    },
    navigation:{
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
    },
    heading:{
      borderColor: "gray",
      borderBottomWidth: 1,
      padding: 20,
      marginBottom: 10,
      width: "100%",
    },
    content: {
      padding: 20,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  });

  const DATA =[ 
    {
      id: '1',
      title: 'TotalBalance',
      value: '200'
    },
    {
      id: '2',
      title: 'Monthly Income',
      value: '300'
    },
    
    {
      id: '3',
      title: 'Total Expenses',
      value: '100'
    }
    
  ]
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
        <FlatList
          data={DATA}
          renderItem={({item}) => (
          <View>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.value}</Text>
          </View>
        )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
