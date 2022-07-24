import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box({ material }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 2, 3]} />
      {material}
    </mesh>
  );
}
