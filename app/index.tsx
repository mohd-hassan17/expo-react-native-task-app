import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const [value, setValue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button Clicked");
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-a5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48da4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-b6-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2aed-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-4d3-a4f8-fbd9aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-14571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed-3ad53bb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91a7f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e9d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91a97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d2",
      title: "Third Item",
    },
  ];

  type Props = {
    title: string;
  };

  const Item = ({ title }: Props) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      {/* {[...Array(60)].map((_, i) => (
        <Text key={i} style={{ fontSize: 24 }}>
          Hello From Home Screen {i + 1}
        </Text>
      ))} */}

      {/* <Button title="Click Me" onPress={pressMe} />
      <Switch value={isEnabled} onValueChange={toggleSwitch} /> */}
      {/* <TextInput
        keyboardType="numbers-and-punctuation"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1 }}
        multiline
        numberOfLines={4}
        placeholder="Enter Your Text..."
      />

      <Pressable onPress={pressMe}>
        <Text>Make Me Pressable</Text>
      </Pressable> */}

      {/* <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          height: 150,
          width: 150,
        }}
      /> */}

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.title} />}
        horizontal
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

// onLongPress
// onPressIn
// onPressOut

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
