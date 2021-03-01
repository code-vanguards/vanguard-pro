export function generateId(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

// Returns the time difference between two date objects in milliseconds.
export function timeDifference(left, right) {
  return left.getTime() - right.getTime();
}

// Accepts a date object.
// Returns a date object with only the month, day and year.
export function toDate(date) {
  return new Date(date.toDateString());
}
