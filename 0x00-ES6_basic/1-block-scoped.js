export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let updatedTask = true;
    let updatedTask2 = false;
    return [updatedTask, updatedTask2];
  }

  return [task, task2];
}
