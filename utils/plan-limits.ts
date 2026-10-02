export const PLAN_LIMITS = {
  BASIC: {
    photos: 5,
  },
  PRO: {
    photos: 8,
  },
} as const

export function getMaxPhotos(plan: "BASIC" | "PRO") {
  return PLAN_LIMITS[plan].photos
}