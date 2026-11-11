import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';

import PokemonStack from './InicioStack';
import FavoritosScreen from '../screens/FavoritosScreen';
import ConfiguracoesScreen from '../screens/Configuracoes';
import type { AppTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={PokemonStack}
        options={{ title: 'Início' }}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{ title: 'Favoritos' }}
      />

      <Tab.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{ title: 'Configurações' }}
      />
    </Tab.Navigator>
  );
}