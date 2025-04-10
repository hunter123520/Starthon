'use client';
import { useState } from 'react';

export default function FallbackImage({ poster, alt, ...props }) {
  const fallback =
    'https://www.univ-eloued.dz/wp-content/uploads/2024/09/logoue.png';

  const [src, setSrc] = useState(poster);

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setSrc(fallback)}
      {...props}
      style={{ width: '350px', height: '250px', objectFit: 'cover' }}
    />
  );
}
