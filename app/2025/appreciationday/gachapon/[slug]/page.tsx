"use client"

import { useState } from "react"

export default function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const [videoError, setVideoError] = useState(false)
  const mappedSlug = slug.toLowerCase()
  const url = `https://banpuheart.s3.ap-southeast-2.amazonaws.com/${mappedSlug}.mp4`

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      {videoError ? (
        <div style={{ color: "white" }}>Video not found.</div>
      ) : (
        <video
          className="fullscreen-video"
          controls
          onError={() => setVideoError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
