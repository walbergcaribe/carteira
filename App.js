import React, { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const App = () => {

  const [saldo, setSaldo] = useState(0);
  const [valorUsuario, setValorUsuario] = useState('');
  const [saldoVisisvel, setSaldoVisisvel] = useState(true);

  const creditar = () => {
    if (valorUsuario) {
      const temp = parseFloat(valorUsuario);
      setSaldo(saldo + temp);
      setValorUsuario('');
    } else {
      alert('Digite um valor!');
    }
  }

  const debitar = () => {
    if (valorUsuario) {
      const temp = parseFloat(valorUsuario);
      setSaldo(saldo - temp);
      setValorUsuario('');
    } else {
      alert('Digite um valor!');
    }
  }

  return (

    <View style={{ padding: 10 }}>

      <Text style={{ marginBottom: 20 }}>Carteira Digital</Text>

      <View style={{ backgroundColor: '#32338C', padding: 10, borderRadius: 10 }}>
        <View style={styles.saldoTitle}>
          <Text style={{ color: 'white' }}>Seu Saldo</Text>
          <Switch value={saldoVisisvel} onValueChange={() => setSaldoVisisvel(!saldoVisisvel)} />
        </View>

        {
          saldoVisisvel ? (<Text style={styles.saldoValue}>R$ {saldo}</Text>) : (<Text style={styles.saldoValue}>R$ --</Text>)
        }


        <TextInput value={valorUsuario} onChangeText={(value) => setValorUsuario(value)} style={styles.valorCreditoDebito} />

        <View style={styles.viewButtons}>
          <TouchableOpacity onPress={creditar} style={styles.botoesCreditoDebito}>
            <Text style={styles.textoBotoesCreditoDebito}>Creditar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={debitar} style={styles.botoesCreditoDebito}>
            <Text style={styles.textoBotoesCreditoDebito}>Debitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  saldoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saldoValue: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  valorCreditoDebito: {
    backgroundColor: 'white',
    marginVertical: 10
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  botoesCreditoDebito: {
    height: 40,
    justifyContent: 'center',
    marginVertical: 10
  },
  textoBotoesCreditoDebito: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default App;
