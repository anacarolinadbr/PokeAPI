import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, FlatList, Image, Pressable,StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import type { InicioStackParamList  } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList , 'Pokemon'>;
type Pokemon = { id: number; name: string; image: string;};

export default function PokemonScreen({ navigation }: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
useEffect(() => {buscarPokemons();}, []);

  async function buscarPokemons() {
    try {
      const resposta = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=3'
      );

      const dados = await resposta.json();
      const lista = [];

      for (const pokemon of dados.results) {
        const respostaPokemon = await fetch(pokemon.url);
        const dadosPokemon = await respostaPokemon.json();

        lista.push({
          id: dadosPokemon.id,
          name: dadosPokemon.name,
        image: dadosPokemon.sprites.front_default,
        });
      }
      setPokemons(lista);
    } catch (error) {
      console.log('Erro ao buscar Pokmon', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Pokemons </Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('Detalhes', {
                pokemonId: item.id,})
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.imagem}
            />
            <Text style={styles.nome}>
              {item.name.toUpperCase()}</Text>

            <Text>Ver detalhes</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  imagem: {
    width: 120,
    height: 120,
  },

  nome: {
    fontSize: 20,
    marginBottom: 5,
  },
});
