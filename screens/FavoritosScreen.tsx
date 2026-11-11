import { View, Text, StyleSheet } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Favoritos</Text>
      <Text>Seus favoritos aparecerão aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
  },
});