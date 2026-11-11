import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import PokemonScreen from '../screens/PokemonScreen';
import DetalhesScreen from '../screens/DetalheSreen';
import type { InicioStackParamList  } from '../types/navigation';

const Stack = createNativeStackNavigator<InicioStackParamList >();

export default function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Pokemons',
          headerLeft: () => <DrawerToggleButton />,
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: 'Detalhes do Pokémon',
        }}
      />
    </Stack.Navigator>
  );
}