"use client";

import React, { useEffect, useState } from "react";

import { fetch_youtube_video } from "@/app/route";
import Image from "next/image";

function VideoCard({ pokemon }) {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch_youtube_video(pokemon, 10);
      setVideos(data);
    }
    fetchData();
  }, []);

  if (!videos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={`h-72 rounded-[4px] bg-white`}></div>
      <h1>Success</h1>
      {videos.map((video) => (
        <div>
          <h1>{video.snippet.title}</h1>
          <Image
            src={video.snippet.thumbnails.high.url}
            width={video.snippet.thumbnails.high.width}
            height={video.snippet.thumbnails.high.height}
            alt={video.snippet.title}
          />
        </div>
      ))}
    </div>
  );
}

export default VideoCard;
