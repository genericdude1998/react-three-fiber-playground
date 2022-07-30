import { useThree } from '@react-three/fiber';

export default function Camera() {
  useThree(({ camera }) => {
    camera.position.set(0, 0, 40);
  });
  return null;
}
