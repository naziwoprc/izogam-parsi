"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

function IzogamRoll() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group>
      {/* Main roll - cylinder */}
      <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 12]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.2} />
        {/* Inner hole */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2.6, 32]} />
          <meshStandardMaterial color="#333" roughness={0.8} />
        </mesh>
        {/* End caps ring detail */}
        <mesh position={[0, 1.25, 0]}>
          <torusGeometry args={[0.52, 0.03, 8, 32]} />
          <meshStandardMaterial
            color="#0A3D62"
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
        <mesh position={[0, -1.25, 0]}>
          <torusGeometry args={[0.52, 0.03, 8, 32]} />
          <meshStandardMaterial
            color="#0A3D62"
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
        {/* Blue label band */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.82, 0.82, 0.8, 64]} />
          <meshStandardMaterial
            color="#1B6CA8"
            roughness={0.4}
            metalness={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>
      </mesh>

      {/* Subtle ground reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial color="#0A3D62" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export default function IzogamScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <hemisphereLight args={["#ffffff", "#0A3D62", 0.6]} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <directionalLight
            position={[-3, 3, -3]}
            intensity={0.8}
            color="#1B6CA8"
          />
          <pointLight position={[0, 3, 0]} intensity={0.8} color="#ffffff" />
          <IzogamRoll />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
