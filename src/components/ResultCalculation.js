import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function ResultCalculation({
  errorMessage,
  capital,
  interest,
  months,
  total,
}) {
  return (
    <View style={styles.content}>
      <View style={styles.scrollContent}>
        <ScrollView>
          {total && (
            <View style={styles.boxResult}>
              <Text style={styles.title}>RESUMEN</Text>
              <DataResult title="Cantidad Solicitada:" value={`${capital} $`} />
              <DataResult title="Interes %:" value={`${interest} %`} />
              <DataResult title="Plazos:" value={`${months} meses`} />
              <DataResult
                title="Pago mensual:"
                value={`${total.monthlyFee} $`}
              />
              <DataResult
                title="Total a pagar:"
                value={`${total.totalPayable} $`}
              />
            </View>
          )}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult({title, value}) {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: -120,
    width: '100%',
  },
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    overflow: 'scroll',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  scrollContent: {
    height: '57%',
    marginTop: 5,
  },
});
