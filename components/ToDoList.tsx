import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const ToDoList = ({ tasks }: any) => {
  return (
    <ScrollView>
      {tasks.map((task: string) => (
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList