import { Stack } from "expo-router";
import { setBackgroundColorAsync} from "expo-system-ui";
import { Colors } from "react-native/Libraries/NewAppScreen";

setBackgroundColorAsync(Colors.black);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="game" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="profile" options={{ headerShown: false, animation: 'none' }} />
    </Stack>
  );
}
