import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask, { ITask } from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

export const FIREBASE_URL = process.env.REACT_APP_FIREBASE_BACKEND as string;

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const transformTasks = (data: any) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { error, isLoading, sendRequest: fetchTasks } = useHttp(
    {
      url: `${FIREBASE_URL}/tasks.json`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: null,
    },
    transformTasks
  );

  // const fetchTasks = async (taskText: string = '') => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       `${FIREBASE_URL}/tasks.json`
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
