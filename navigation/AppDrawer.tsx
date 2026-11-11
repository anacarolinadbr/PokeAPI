import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AppTabs from './AppTabs';
import FavoritosScreen from '../screens/FavoritosScreen';
import ConfiguracoesScreen from '../screens/Configuracoes';
import type { AppDrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false}}
    >
      <Drawer.Screen
        name="Inicio"
        component={AppTabs}
        options={{
          title: 'Pokemons',
        }}
      />

      <Drawer.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          title: 'Favoritos',
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{
          title: 'Configurações',
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}
