import React from 'react';

export default function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 [background-size:30px_30px] md:[background-size:45px_45px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"></div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:linear-gradient(to_bottom,transparent,black_100%)] dark:bg-black"></div>
    </>
  );
}