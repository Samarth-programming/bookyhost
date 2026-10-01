export function clampProgress(progress?: number) {
  if (progress == null || Number.isNaN(progress)) return 0
  return Math.min(100, Math.max(0, progress))
}
