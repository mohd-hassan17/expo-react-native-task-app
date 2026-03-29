import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TASKS } from "@/constants/tasks";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const STATUS_COLOR = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To-do": Colors.statusTodo,
  Completed: Colors.statusDone,
};

const TaskDetails = () => {
  const { id } = useLocalSearchParams();

  const task = TASKS.find((t) => t.id === id);

  if (!task) {
    return <Text style={styles.notFound}>Task not found</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{task.title}</Text>

      {/* Category */}
      <Text style={styles.category}>{task.category}</Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Time */}
        <View style={styles.row}>
          <Ionicons name="time-outline" size={18} color={Colors.primary} />
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{task.time}</Text>
        </View>

        {/* Status */}
        <View style={styles.row}>
          <Ionicons name="checkmark-done-outline" size={18} color={Colors.primary} />
          <Text style={styles.label}>Status</Text>
          <Text
            style={[
              styles.value,
              { color: STATUS_COLOR[task.status] },
            ]}
          >
            {task.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 8,
    // marginTop: 50,
  },

  category: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20,
  },

  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  label: {
    fontSize: 14,
    color: Colors.textSecondary,
    width: 60,
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.textPrimary,
  },

  notFound: {
    color: Colors.textPrimary,
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});