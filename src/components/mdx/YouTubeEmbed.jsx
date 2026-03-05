import React from "react";

const YouTubeEmbed = ({ videoId, alt = "YouTube video" }) => (
  <div className="text-center my-5">
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={alt}
        className="w-75"
      />
    </a>
  </div>
);

export default YouTubeEmbed;
