import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
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
          name="lessons"
          options={{
            headerTitle: "Lessons",
            tabBarLabel: "Lessons",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? "book" : "book-outline"} size={20} />
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

      <StatusBar style="dark" />
    </>
  );
}
