export function isAvailable(slot, bookings) {
  return !bookings.some(b =>
    slot.start < b.end_time && slot.end > b.start_time
  )
}
