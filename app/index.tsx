import { Text, View } from "react-native";
import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";
import { useState } from "react";

export default function Index() {

  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
  }

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}
