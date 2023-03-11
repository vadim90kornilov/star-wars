import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="character-block"
    speed={5}
    width={352}
    height={136}
    backgroundColor="#f3f3f3"
    foregroundColor="#afacac"
  >
    <rect x="295" y="80" rx="0" ry="0" width="1" height="0" />
    <rect x="11" y="8" rx="0" ry="0" width="112" height="20" />
    <circle cx="41" cy="65" r="30" />
    <circle cx="108" cy="65" r="30" />
    <rect x="82" y="100" rx="7" ry="7" width="60" height="16" />
    <rect x="12" y="100" rx="7" ry="7" width="60" height="14" />
  </ContentLoader>
);

export default Skeleton;
