"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const PARTICLE_COUNT = 110;

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: Array<{ x: number; y: number }> = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.push({
        x: (Math.random() - 0.5) * 0.018,
        y: (Math.random() - 0.5) * 0.018,
      });
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const dotMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.45,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
    });

    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xcbd5e1,
      transparent: true,
      opacity: 0.22,
    });

    let linesMesh: THREE.LineSegments | null = null;

    const buildLines = () => {
      const linePos: number[] = [];
      const pos = dotGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          if (dx * dx + dy * dy < 150) {
            linePos.push(
              pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
              pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
            );
          }
        }
      }

      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(linePos), 3)
      );
      linesMesh = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(linesMesh);
    };

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const pos = dotGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        if (pos[i * 3] > 45) pos[i * 3] = -45;
        if (pos[i * 3] < -45) pos[i * 3] = 45;
        if (pos[i * 3 + 1] > 35) pos[i * 3 + 1] = -35;
        if (pos[i * 3 + 1] < -35) pos[i * 3 + 1] = 35;
      }
      dotGeo.attributes.position.needsUpdate = true;

      buildLines();

      dots.rotation.y += (mouseX - dots.rotation.y) * 0.008;
      dots.rotation.x += (mouseY - dots.rotation.x) * 0.008;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      dotGeo.dispose();
      dotMat.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeBackground;
