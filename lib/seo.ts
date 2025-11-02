export function withPhone(description: string): string {
  const phoneSuffix = " ☎️ 668 83 84 15";
  if (!description) return phoneSuffix.trim();
  if (description.includes("668 83 84 15")) return description;
  const maxLength = 160;
  const targetLength = description.length + phoneSuffix.length;
  if (targetLength <= maxLength) {
    return description + phoneSuffix;
  }
  const allowedBase = maxLength - phoneSuffix.length;
  const ellipsis = "...";
  const truncateTo = Math.max(0, allowedBase - ellipsis.length);
  const truncated = description.slice(0, truncateTo).trimEnd();
  return truncated + ellipsis + phoneSuffix;
}