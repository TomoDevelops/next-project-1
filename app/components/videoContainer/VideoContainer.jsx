"use client";

import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { fetch_youtube_video } from "@/app/route";
import VideoCard from "../videoCard/VideoCard";

function VideoContainer({ pokemon }) {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch_youtube_video(pokemon, 15);
      setVideos(data);
    }
    fetchData();
  }, []);

  if (!videos) {
    return (
      <ReactLoading
        type={"bubbles"}
        color={"#ff3b5c"}
        height={200}
        width={200}
      />
    );
  }

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(184px,_1fr))] gap-y-6 gap-x-4`}
    >
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
}

export default VideoContainer;
