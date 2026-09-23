export const PLAN_LIMITS = {
  BASIC: {
    photos: 10,
  },
  PRO: {
    photos: 10,
  },
} as const

export function getMaxPhotos(plan: "BASIC" | "PRO") {
  return PLAN_LIMITS[plan].photos
}