import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask, { ITask } from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

export const FIREBASE_URL = process.env.REACT_APP_FIREBASE_BACKEND as string;

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { error, isLoading, sendRequest } = useHttp(
    {
      url: `${FIREBASE_URL}/tasks.json`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: null,
    },
    (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    }
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
    sendRequest();
  }, [sendRequest]);

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
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
