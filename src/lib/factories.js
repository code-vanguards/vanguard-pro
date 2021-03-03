import { generateId } from './helpers.js';

// Creates new tasks objects. Makes it easier and keeps objects consistent.
export function taskFactory(name, dueDate, comment='', project={}, gems=1, isCompleted=false, id=generateId(0, 1000000)) {
  return {
    id,
    name,
    comment,
    dueDate,
    project,
    isCompleted,
    gems,
  };
}

// Creates new project objects. Makes it easier and keeps objects consistent.
export function projectFactory(name, imageDefault="blue-dot.png", imageClicked="red-dot.png", isSelected=false, showOptions=true, id=generateId(100, 1000000)) {
  return {
    id,
    isSelected,
    showOptions,
    imageDefault,
    imageClicked,
    name: name.toLowerCase(),
  };
}
