export function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url)

    // https://www.youtube.com/watch?v=ABC123
    if (parsedUrl.hostname === "www.youtube.com" || parsedUrl.hostname === "youtube.com" || parsedUrl.hostname === "m.youtube.com") {
      const videoId = parsedUrl.searchParams.get("v")

      if (videoId) return videoId
    }

    // https://youtu.be/ABC123
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1)

      if (videoId) {
        return videoId
      }
    }

    // https://www.youtube.com/embed/ABC123
    if (parsedUrl.hostname === "www.youtube.com" && parsedUrl.pathname.startsWith("/embed/")) {
      const videoId = parsedUrl.pathname.split("/embed/")[1]

      if (videoId) {
        return videoId
      }
    }

    return null
  } catch {
    return null
  }
}