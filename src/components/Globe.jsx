import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MyGlobe = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(30, width / height, .4, 1000);
    camera.position.z = 4.5;

    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('https://unpkg.com/three-globe@2.27.0/example/img/earth-blue-marble.jpg'),
      transparent: true,
    });

    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    const rotateSpeed = 0.002;
    let currentRotation = 0;

    // Animate the globe
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      currentRotation += rotateSpeed;
      globeMesh.rotation.y = currentRotation;

      renderer.render(scene, camera);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height]);

  // center globe in canvas
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    onHover={{
      cursor: 'not-allowed'
    }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
};

export default MyGlobe;
