import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#dc2626"
          wireframe
          distort={0.3}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.5;
      ref.current.rotation.z = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.8, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ff3333" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff6666" />
        <AnimatedSphere />
        <FloatingRing position={[2.5, 1, -1]} color="#ff2222" />
        <FloatingRing position={[-2.5, -1, -1]} color="#ff4444" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
