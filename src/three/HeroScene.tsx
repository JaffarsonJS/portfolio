import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Float, Line, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/lib/theme";

const points: [number, number, number][] = [
  [0, 1.7, 0],
  [1.15, 0.85, 0.2],
  [-1.05, 0.7, -0.15],
  [0.15, 0.05, 0.35],
  [-0.2, -0.95, 0],
  [0.95, -1.55, 0.1],
];

function System() {
  const group = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const accent = theme === "light" ? "#0f7a66" : "#7ee0c8";
  const accent2 = theme === "light" ? "#3d4db8" : "#9aa6ff";
  const gold = theme === "light" ? "#8a6a32" : "#d4af7a";

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.35;
    const y = state.pointer.y * 0.2;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.04);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
  });

  const connections = useMemo(
    () => [
      [points[0], points[1]],
      [points[0], points[2]],
      [points[1], points[3]],
      [points[2], points[3]],
      [points[3], points[4]],
      [points[4], points[5]],
    ],
    [],
  );

  return (
    <group ref={group}>
      {connections.map((pair, index) => (
        <Line
          key={index}
          points={pair}
          color={accent}
          lineWidth={1.1}
          transparent
          opacity={0.45}
        />
      ))}

      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.4}>
        <mesh position={points[0]}>
          <icosahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color={accent2} emissive={accent2} emissiveIntensity={0.35} metalness={0.55} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={points[1]}>
          <boxGeometry args={[0.38, 0.38, 0.38]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.2} metalness={0.45} roughness={0.28} />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh position={points[2]}>
          <octahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.22} metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.45}>
        <mesh position={points[3]}>
          <torusGeometry args={[0.28, 0.06, 16, 48]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.28} metalness={0.6} roughness={0.18} />
        </mesh>
      </Float>

      <Float speed={1.05} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={points[4]}>
          <cylinderGeometry args={[0.18, 0.18, 0.42, 24]} />
          <meshStandardMaterial color={accent2} emissive={accent2} emissiveIntensity={0.18} metalness={0.4} roughness={0.32} />
        </mesh>
      </Float>

      <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.4}>
        <mesh position={points[5]}>
          <boxGeometry args={[0.5, 0.08, 0.34]} />
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.16} metalness={0.35} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  return <Sparkles count={48} scale={[6.5, 4.2, 4]} size={2} speed={0.28} opacity={0.45} color="#7ee0c8" />;
}

export function HeroScene() {
  const { theme } = useTheme();

  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} className="h-full w-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5.4]} fov={42} />
      <ambientLight intensity={theme === "light" ? 0.7 : 0.35} />
      <pointLight position={[3, 3, 4]} intensity={18} color={theme === "light" ? "#0f7a66" : "#7ee0c8"} distance={12} />
      <pointLight position={[-4, -1, 2]} intensity={10} color={theme === "light" ? "#3d4db8" : "#9aa6ff"} distance={12} />
      <Particles />
      <System />
    </Canvas>
  );
}

export default HeroScene;

