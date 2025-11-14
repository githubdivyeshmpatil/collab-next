import React, { useEffect, useRef } from "react";
import "../index.css";
import * as THREE from "three";
import mapImg from "../assets/images/map.png";

const ContactCenterLayout = () => {
  const threeRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      threeRef.current.clientWidth / threeRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      threeRef.current.clientWidth,
      threeRef.current.clientHeight
    );
    threeRef.current.appendChild(renderer.domElement);

    // Floating Spheres
    const spheres = [];
    const geometry = new THREE.SphereGeometry(0.4, 32, 32);

    for (let i = 0; i < 6; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x888888),
        transparent: true,
        opacity: 0.6,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        Math.random() * 3 - 1.5,
        Math.random() * 3 - 1.5,
        Math.random() * -2
      );

      scene.add(sphere);
      spheres.push(sphere);
    }

    // Torus Ring
    const ringGeometry = new THREE.TorusGeometry(1.6, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x003333 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(3, 3, 3);
    scene.add(light);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);

      spheres.forEach((sphere, index) => {
        sphere.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        sphere.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = threeRef.current.clientWidth;
      const height = threeRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (threeRef.current && renderer.domElement.parentNode) {
        threeRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-stretch justify-center p-6 gap-6">

      {/* LEFT CARD */}
      <div className="flex-1 bg-gray-800 mt-4 p-10 rounded-2xl text-white flex flex-col justify-end shadow-lg relative overflow-hidden">

        {/* 3D CANVAS BACKGROUND */}
        <div ref={threeRef} className="absolute inset-0 opacity-60"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="mb-6">
            <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">◎</span>
            </div>
          </div>

          <div className="text-4xl md:text-5xl font-semibold leading-tight mb-6 space-y-2">
            <p className="animated-text">Smarter contact center software.</p>
            <p className="animated-text delay-1">Designed for people.</p>
            <p className="animated-text delay-2">Powered by AI.</p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Unify voice, chat, WhatsApp, and social in one platform. Deploy in the cloud, on-prem, or hybrid.
          </p>

          <div className="relative inline-flex">
            <div className="absolute inline-flex w-full h-full rounded-full bg-white opacity-30 animate-ping"></div>
            <button className="relative bg-transparent border border-white text-white px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition">
              SCHEDULE A CALL
            </button>
          </div>

          <style>{`
            .animated-text {
              opacity: 0;
              transform: translateY(10px);
              animation: fadeUp 0.7s forwards;
            }
            .delay-1 { animation-delay: 0.7s; }
            .delay-2 { animation-delay: 1.4s; }

            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div
        className="flex-1 md:flex-none md:w-[45%] h-[70vh] rounded-2xl text-gray-900 p-10 flex flex-col justify-between shadow-lg relative overflow-hidden bg-cover bg-center animate-slow-zoom"
        style={{ backgroundImage: `url(${mapImg})` }}
      ></div>

    </div>
  );
};

export default ContactCenterLayout;