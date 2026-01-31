export function generateSlots(open, close, interval) {
  const slots = []
  let current = open
  while (current < close) {
    slots.push(current)
    current = addMinutes(current, interval)
  }
  return slots
}
