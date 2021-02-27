import { generateId } from './helpers.js';

// Creates new tasks objects. Makes it easier and keeps objects consistent.
export function taskFactory(name, comment, dueDate, project, gems, isCompleted=false, id=generateId(0, 1000000)) {
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
export function projectFactory(name, id=generateId(0, 1000000)) {
  return {
    id,
    name: name.toLowerCase(),
  };
}
