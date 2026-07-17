'use client';

import ReactDOM from 'react-dom';

export default function PreloadResources() {
  // Spline scenes are fetched cross-origin; open the connection early so the
  // scene download doesn't wait on DNS + TLS after hydration.
  ReactDOM.preconnect('https://prod.spline.design', { crossOrigin: 'anonymous' });

  return null;
}
