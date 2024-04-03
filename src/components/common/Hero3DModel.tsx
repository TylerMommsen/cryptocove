"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Hero3DModel = ({ modelPath, texturePath }: { modelPath: string; texturePath: string }) => {
	const modelRef = useRef<THREE.Mesh>(null!); // Assuming the primary object is a mesh
	const { scene } = useGLTF(modelPath);
	const texture = useTexture(texturePath);

	useEffect(() => {
		scene.traverse((child: any) => {
			if ((child as THREE.Mesh).isMesh) {
				const material = new THREE.MeshStandardMaterial({
					map: texture, // Applying the loaded texture
					color: new THREE.Color("#9485fe"), // Base color
					metalness: 0.1, // Higher metalness for more reflectivity
					roughness: 0.1, // Lower roughness for smoother surface
				});

				(child as THREE.Mesh).material = material;
			}
		});
	}, [scene, texture]);

	useFrame((_, delta) => {
		if (modelRef.current) {
			modelRef.current.rotation.y += delta * 0.5; // Adjust rotation speed if necessary
		}
	});

	return <primitive object={scene} ref={modelRef} />;
};

export default Hero3DModel;
