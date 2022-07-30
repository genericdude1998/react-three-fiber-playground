import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box({ material }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      {material}
    </mesh>
  );
}
