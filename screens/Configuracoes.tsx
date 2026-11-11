import { useState } from 'react';

import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <View style={[
      styles.container,
      { backgroundColor: temaEscuro ? '#040303' : '#F2F2F2' }
    ]}>

      <Text style={[
        styles.titulo,
        { color: temaEscuro ? 'white' : 'black' }
      ]}>
        Configurações
      </Text>

      <Text style={{ color: temaEscuro ? 'white' : 'black' }}>
        Tema: {temaEscuro ? 'Escuro' : 'Claro'}
      </Text>

      <Switch
        value={temaEscuro}
        onValueChange={setTemaEscuro}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  titulo: {
    fontSize: 26,
  },
});

