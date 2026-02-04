export function safeJsonParse<T>(value: string | null): T | null {
  return !value ? null : JSON.parse(value) as T
}
