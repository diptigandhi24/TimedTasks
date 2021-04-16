import { useState } from "react";
import CreateTask from "./CreateTask";
import "./task.css";

interface Task {
  title: string;
  onTime: boolean;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, updateTaskList] = useState<Array<Task>>([]);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {taskList.length !== 0 ? (
        <ul>
          {taskList.map((task) => {
            if (task.onTime) {
              return (
                <li key={task.title} className="redTask">
                  {task.title}
                </li>
              );
            } else {
              return (
                <li key={task.title} className="greenTask">
                  {task.title}
                </li>
              );
            }
          })}
        </ul>
      ) : (
        "No Task created yet "
      )}

      <button onClick={() => setIsOpen(true)}>Create</button>
      {isOpen && (
        <CreateTask
          setIsOpen={setIsOpen}
          addTask={(newTask) =>
            updateTaskList((prev) => prev.concat([newTask]))
          }
        />
      )}
    </div>
  );
}
