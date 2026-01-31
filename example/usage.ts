import { generateSlots } from "../engine/slot"
import { isAvailable } from "../engine/availability"
import { calcEnd } from "../engine/duration"
import { DEFAULT_CALENDAR_CONFIG } from "../config/default"

// ตัวอย่างการสร้าง slot สำหรับ 1 ร้าน
const slots = generateSlots(
  DEFAULT_CALENDAR_CONFIG.openTime,
  DEFAULT_CALENDAR_CONFIG.closeTime,
  DEFAULT_CALENDAR_CONFIG.intervalMin
)

// สมมุติ booking ที่มีอยู่แล้ว
const bookings = [
  { start_time: "10:00", end_time: "11:00" },
  { start_time: "13:00", end_time: "14:00" },
]

// filter เวลาว่าง
const availableSlots = slots.filter(slot =>
  isAvailable(slot, bookings)
)

console.log("AVAILABLE:", availableSlots)
