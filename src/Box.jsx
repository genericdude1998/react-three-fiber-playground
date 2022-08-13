import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box({ material, geometry }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
    >
      {geometry}
      {material}
    </mesh>
  );
}
