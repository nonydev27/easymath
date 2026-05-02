import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "accessibility" : "accessibility-outline"}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
