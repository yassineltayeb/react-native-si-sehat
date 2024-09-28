// src/navigation/RootNavigation.ts
import { createNavigationContainerRef } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export function navigate<RouteName extends keyof ParamListBase>(
  name: RouteName,
  params?: ParamListBase[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
