import { useState } from "react";
import Timer from "./Timer";
import "./task.css";

interface Task {
  title: string;
  onTime: boolean;
}
interface TaskProps {
  setIsOpen: (arg: boolean) => void;
  addTask: (newTask: Task) => void;
}

export default function CreateTask({ setIsOpen, addTask }: TaskProps) {
  const [inputTitle, updateInputTitle] = useState("");
  const [isTimerExpired, setTimerExpired] = useState(false);

  function handleCreateTask(event: React.FormEvent) {
    addTask({ title: inputTitle, onTime: isTimerExpired });
    setIsOpen(false);
    updateInputTitle("");
    console.log("Timer Expired", isTimerExpired);
  }

  return (
    <div className="taskWrapper">
      <div className="task">
        <input
          type="text"
          placeholder="Enter the Task"
          value={inputTitle}
          onChange={(event) => updateInputTitle(event.currentTarget.value)}
        />
        <Timer setTimerExpired={() => setTimerExpired(true)} />
        <button type="button" onClick={handleCreateTask}>
          Add Task
        </button>
      </div>
      <button
        style={{ position: "absolute", top: "20px", right: "20px" }}
        type="button"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
    </div>
  );
}
