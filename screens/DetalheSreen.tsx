import { View, Text, Image, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useEffect, useState } from 'react';
import type { InicioStackParamList  } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList , 'Detalhes'>;
type Pokemon = { name: string; height: number; weight: number; image: string; type: string;};

export default function DetalhesScreen({ route }: Props) {
  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    buscarPokemon();
  }, [pokemonId]);

  async function buscarPokemon() {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      const dados = await resposta.json();
 const tipo = dados.types[0].type.name;

      setPokemon({
        name: dados.name,
        height: dados.height,
        weight: dados.weight,
        image: dados.sprites.front_default,
        type: tipo,
      });

    } catch (error) {
      console.log('Erro ao buscar Pokémon ', error);
    }
  }

  if (pokemon === null) {
    return (
      <View style={styles.container}>
        <Text>Carregando Pokémon</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        {pokemon.name.toUpperCase()}
      </Text>

      <Image
        source={{ uri: pokemon.image }}
        style={styles.imagem}
      />

      <Text style={styles.informacao}>
        Tipo: {pokemon.type}</Text>

      <Text style={styles.informacao}>
        Altura: {pokemon.height / 10} m</Text>

      <Text style={styles.informacao}>
        Peso: {pokemon.weight / 10} kg</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 45,
    marginBottom: 15,
  },

  imagem: {
    width: 150,
    height: 150,
  },

  informacao: {
    fontSize: 18,
    marginTop: 15,
  },
});