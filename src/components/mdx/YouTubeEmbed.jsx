import React from "react";

const YouTubeEmbed = ({ videoId, alt = "YouTube video", width = 600 }) => (
  <div style={{ textAlign: "center" }}>
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={alt}
        width={width}
      />
    </a>
  </div>
);

export default YouTubeEmbed;
