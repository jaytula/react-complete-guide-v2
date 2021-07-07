import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask, { ITask } from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";
import { useMemo } from "react";

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

  const requestConfig = useMemo(
    () => ({
      url: `${FIREBASE_URL}/tasks.json`,
    }),
    []
  );

  const { error, isLoading, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(requestConfig, transformTasks);
  }, [fetchTasks, requestConfig]);

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
        onFetch={() => fetchTasks(requestConfig, transformTasks)}
      />
    </React.Fragment>
  );
}

export default App;
