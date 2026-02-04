export function generateId() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}