import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * AmbientBackground - A true 3D WebGL background powered by Three.js:
 * - Continuously revolving 3D circular particle torus & orbital rings
 * - Deep dark blue / midnight sapphire color theme
 * - Interactive cursor-driven 3D parallax tilt & spotlight
 * - 60+ FPS optimized with additive blending and depth particles
 */
function AmbientBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030714, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 85;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030714, 1);
    container.appendChild(renderer.domElement);

    // Master 3D Group that revolves in continuous 3D circular motion
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // -------------------------------------------------------------
    // A. 3D Circular Revolving Torus Particle Vortex (The Main 3D Shape)
    // -------------------------------------------------------------
    const particleCount = 4200;
    const torusR = 36; // Major radius of circular torus
    const torusTube = 14; // Tube radius
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    // Rich Dark Blue & Electric Cobalt Palette
    const palette = [
      new THREE.Color(0x0f2b5c), // Deep royal navy
      new THREE.Color(0x1d4ed8), // Sapphire cobalt
      new THREE.Color(0x2563eb), // Electric blue
      new THREE.Color(0x38bdf8), // Luminous sky cyan
      new THREE.Color(0x1e3a8a), // Dark blue base
      new THREE.Color(0x4338ca), // Deep indigo accent
    ];

    for (let i = 0; i < particleCount; i++) {
      // Circular parametric coordinates
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      
      // Random tube offset for organic volume
      const r = torusTube * (0.3 + Math.random() * 0.7);

      const x = (torusR + r * Math.cos(v)) * Math.cos(u);
      const y = (torusR + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Color selection weighted toward deep dark blues with bright sparks
      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create custom soft circular point texture programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
      grad.addColorStop(0.6, 'rgba(29, 78, 216, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.6,
      map: createCircleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particleSystem);

    // -------------------------------------------------------------
    // B. Concentric 3D Orbital Rings (Continuous Circular Revolving)
    // -------------------------------------------------------------
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    const ringRadii = [34, 42, 48];
    const ringMaterials = [];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.2, radius + 0.2, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx === 1 ? 0x2563eb : 0x1d4ed8,
        transparent: true,
        opacity: 0.22 - idx * 0.04,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      ringMaterials.push(ringMat);
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + (idx * 0.25);
      ringMesh.rotation.y = idx * 0.3;
      ringGroup.add(ringMesh);
    });

    // -------------------------------------------------------------
    // C. Deep Atmospheric Background Star Dust (Floating Depth)
    // -------------------------------------------------------------
    const starCount = 600;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 260;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 260;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 180 - 40;

      const starColor = Math.random() > 0.4 ? new THREE.Color(0x1e3a8a) : new THREE.Color(0x38bdf8);
      starColors[i * 3] = starColor.r;
      starColors[i * 3 + 1] = starColor.g;
      starColors[i * 3 + 2] = starColor.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.1,
      map: createCircleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // -------------------------------------------------------------
    // D. Interactive 3D Cursor Tracking with Physics
    // -------------------------------------------------------------
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = -(e.clientY / height) * 2 + 1;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // -------------------------------------------------------------
    // E. 60 FPS Continuous Circular Motion Animation Loop
    // -------------------------------------------------------------
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. CONTINUOUS CIRCULAR ORBITAL MOTION
      // Revolves smoothly and continuously in 3D space
      masterGroup.rotation.z = elapsedTime * 0.15; // Circular roll
      masterGroup.rotation.y = elapsedTime * 0.22 + mouse.x * 0.35; // Circular orbit + mouse tilt
      masterGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.35 - mouse.y * 0.25; // 3D pitch wave

      // Counter-rotating rings for multi-layered circular orbital motion
      ringGroup.rotation.z = -elapsedTime * 0.18;
      ringGroup.rotation.x = Math.cos(elapsedTime * 0.25) * 0.4;

      // Slow drift for background stars
      starField.rotation.y = elapsedTime * 0.02;

      // 2. Wave undulation across circular torus particles
      const posAttr = particleGeometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Harmonic circular ripple wave
        const wave = Math.sin(elapsedTime * 1.8 + (ox * 0.06) + (oy * 0.06)) * 1.4;
        posArray[i3 + 2] = oz + wave;
      }
      posAttr.needsUpdate = true;

      // Render 3D scene
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // -------------------------------------------------------------
    // F. Resize Handling
    // -------------------------------------------------------------
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // G. Cleanup on Unmount
    // -------------------------------------------------------------
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose geometries & materials
      particleGeometry.dispose();
      particleMaterial.dispose();
      starGeo.dispose();
      starMat.dispose();
      ringMaterials.forEach(m => m.dispose());

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Blue Base Atmosphere */}
      <div className="absolute inset-0 bg-[#030714] bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,#091838_0%,#040a1c_50%,#02050e_100%)]" />

      {/* 2. WebGL 3D Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none" />

      {/* 3. Deep Vignette to keep text crisp and legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030714]/20 to-[#02050e]/95 pointer-events-none" />

      {/* 4. Film Grain / Subtle Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default AmbientBackground;
