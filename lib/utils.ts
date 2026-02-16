import readingTime from "reading-time"

export function calculateReadingTime(content: string) {
  return readingTime(content).text
  }