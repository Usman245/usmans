'use client'
import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import Three.js

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Initialize Three.js here
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create dust particle system using BufferGeometry
      const particlesCount = 1000;
      const particlePositions = new Float32Array(particlesCount * 3); // 3 components per particle (x, y, z)

      // Initialize particle positions with random values
      for (let i = 0; i < particlesCount; i++) {
        particlePositions[i * 3] = Math.random() * 2 - 1; // Random x position
        particlePositions[i * 3 + 1] = Math.random() * 2 - 1; // Random y position
        particlePositions[i * 3 + 2] = Math.random() * 2 - 1; // Random z position
      }

      // Create a BufferGeometry object
      const particleGeometry = new THREE.BufferGeometry();
      // Set the position attribute of the geometry
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

      // Material for the particles
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa, // Dust color
        size: 0.5, // Size of particles
        transparent: true,
        opacity: 0.6
      });

      // Create the particle system using BufferGeometry and PointsMaterial
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      camera.position.z = 5;

      // Animation function to move particles and render the scene
      const animate = function () {
        requestAnimationFrame(animate);

        // Rotate the particle system to create some movement
        particleSystem.rotation.x += 0.002;
        particleSystem.rotation.y += 0.002;

        // Move particles (dust effect)
        const positions = particleGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
          positions[i * 3] += Math.random() * 0.01 - 0.005; // x movement
          positions[i * 3 + 1] += Math.random() * 0.01 - 0.005; // y movement
          positions[i * 3 + 2] += Math.random() * 0.01 - 0.005; // z movement
        }

        // Mark the position attribute as needing an update
        particleGeometry.attributes.position.needsUpdate = true;

        // Render the scene
        renderer.render(scene, camera);
      };

      animate();
    }
  }, []);

  return (
    <div className="md:px-28 px-8 max-w-screen-lg">
      <section id="hero" className="py-24 md:py-32 flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0">
        {/* Intro Text */}
        <p className="font-mono text-sm md:text-base text-accent">Hi, my name is</p>

        {/* Hero Header */}
        <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
          <h1 className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]">Muhammad Usman</h1>
          <h1 className="leading-[1.2]">Full Stack Developer</h1>
        </div>

        {/* Hero Description */}
        <p className="max-w-xl text-base md:text-lg">
          Transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in Software Fields.
        </p>

        {/* Collaboration Tagline */}
        <p className="font-mono text-xs md:text-sm text-accent">Available for Collaboration to build products</p>

        {/* Resume Link */}
        <span>
          <a className="text-sm p-4 px-6 border-2 block w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-5 xs:mt-8 md:mt-10 md:hidden" target="_blank" rel="noopener noreferrer" href="/Arbab-Mustafa_resume.pdf">
            See My Resume
          </a>
        </span>
      </section>

      {/* Canvas Background (placed below content) */}
      <div className="absolute inset-0 z-[-1] h-auto w-full top-[100%]">
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ width: "100%", height: "100%" }}>
            <canvas
              ref={canvasRef}
              width="882"
              height="679"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


