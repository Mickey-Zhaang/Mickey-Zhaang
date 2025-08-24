import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import SpinningCube from './components/SpinningCube';

export default function ThreeScene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={1} />
        <SpinningCube />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
