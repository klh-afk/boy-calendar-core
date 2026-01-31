export function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number)
  const total = h * 60 + m + minutes

  const nh = Math.floor(total / 60)
    .toString()
    .padStart(2, "0")

  const nm = (total % 60)
    .toString()
    .padStart(2, "0")

  return `${nh}:${nm}`
}
