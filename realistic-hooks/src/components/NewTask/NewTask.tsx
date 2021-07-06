import { useState } from "react";
import { FIREBASE_URL } from "../../App";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

export interface ITask {
  id: string;
  text: string;
}

const NewTask = (props: { onAddTask: (task: ITask) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enterTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${FIREBASE_URL}/tasks.json`, {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
