import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={typeof window !== 'undefined' && window.innerWidth < 768 ? 1.8 : 2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} intensity={2} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
