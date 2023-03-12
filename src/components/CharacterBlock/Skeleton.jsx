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
    <rect x="0" y="8" rx="2" ry="2" width="140" height="20" />
    <circle cx="21" cy="55" r="20" />
    <circle cx="80" cy="55" r="20" />
    <rect x="72" y="100" rx="7" ry="7" width="60" height="16" />
    <rect x="0" y="100" rx="7" ry="7" width="60" height="16" />
  </ContentLoader>
);

export default Skeleton;
