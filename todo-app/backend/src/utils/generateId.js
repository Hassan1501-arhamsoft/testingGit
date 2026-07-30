export const generateId = (tasks) => {
  if (!tasks.length) {
    return 1;
  }

  const maxId = Math.max(...tasks.map((task) => task.id));

  return maxId + 1;
};