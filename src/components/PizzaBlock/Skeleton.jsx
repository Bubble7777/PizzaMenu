import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={490}
    viewBox="0 0 270 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="129" r="129" />
    <rect x="1" y="268" rx="24" ry="24" width="260" height="20" />
    <rect x="1" y="300" rx="16" ry="16" width="260" height="82" />
    <rect x="2" y="411" rx="16" ry="16" width="115" height="39" />
    <rect x="131" y="394" rx="25" ry="25" width="126" height="73" />
  </ContentLoader>
);

export default Skeleton;
