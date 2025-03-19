import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>Victor Govedice</Text>
          <Text style={styles.month}>Julho</Text>
        </View>

        {/* Botão Voltar */}
        <Button title="Voltar" onPress={() => navigation.navigate('Login')} />

      </View>

      {/* Saldos */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceBox}>
          <Text style={styles.balanceLabel}>Saldo atual</Text>
          <Text style={styles.balanceValue}>R$ 204,00</Text>
        </View>
        <View style={styles.balanceBox}>
          <Text style={styles.balanceLabel}>Saldo previsto</Text>
          <Text style={styles.balanceValue}>R$ 124,00</Text>
        </View>
      </View>

      {/* Despesas e Receitas */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📉 Despesas</Text>
          <Text style={styles.cardValueRed}>R$ 543,50</Text>
          <Text style={styles.cardItem}>R$ 52,30 Mercado</Text>
          <Text style={styles.cardItem}>R$ 11,00 Janta</Text>
          <Text style={styles.cardItem}>...</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📈 Receitas</Text>
          <Text style={styles.cardValueGreen}>R$ 1020,50</Text>
          <Text style={styles.cardItem}>R$ 20,50 Rocha</Text>
          <Text style={styles.cardItem}>R$ 300,00 Pais</Text>
          <Text style={styles.cardItem}>...</Text>
        </View>
      </View>

      {/* Planejamento */}
      <View style={styles.planningContainer}>
        <Text style={styles.planningTitle}>Planejamento</Text>

        <View style={styles.planningItem}>
          <Text style={styles.planningLabel}>Hotel</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBar, { width: '80%', backgroundColor: '#FF7043' }]} />
          </View>
          <Text style={styles.planningRest}>Restam R$850,00</Text>
        </View>

        <View style={styles.planningItem}>
          <Text style={styles.planningLabel}>Transporte</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBar, { width: '75%', backgroundColor: '#F44336' }]} />
          </View>
          <Text style={styles.planningRest}>Restam R$758,60</Text>
        </View>

        <View style={styles.planningItem}>
          <Text style={styles.planningLabel}>Alimentação</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBar, { width: '90%', backgroundColor: '#42A5F5' }]} />
          </View>
          <Text style={styles.planningRest}>Restam R$105,50</Text>
        </View>
      </View>

      {/* Botão Flutuante */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#ff3399', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff' },
  headerInfo: { flex: 1, marginLeft: 10 },
  name: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  month: { color: '#fff' },
  settings: { color: '#fff', fontSize: 18 },
  balanceContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  balanceBox: { alignItems: 'center' },
  balanceLabel: { color: '#888' },
  balanceValue: { fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  cardContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 12, width: '45%', shadowColor: '#000', shadowOpacity: 0.1, elevation: 5 },
  cardTitle: { fontWeight: 'bold', marginBottom: 10 },
  cardValueRed: { color: '#F44336', fontSize: 18, marginBottom: 5 },
  cardValueGreen: { color: '#4CAF50', fontSize: 18, marginBottom: 5 },
  cardItem: { color: '#888' },
  planningContainer: { marginTop: 20, backgroundColor: '#fff', padding: 15, marginHorizontal: 10, borderRadius: 12, elevation: 5 },
  planningTitle: { fontWeight: 'bold', marginBottom: 10 },
  planningItem: { marginBottom: 15 },
  planningLabel: { marginBottom: 5 },
  progressBarBackground: { height: 10, backgroundColor: '#ddd', borderRadius: 5, overflow: 'hidden' },
  progressBar: { height: 10, borderRadius: 5 },
  planningRest: { color: '#888', marginTop: 5 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#ff3399', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  fabText: { color: '#fff', fontSize: 30 },
});
