"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrbCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0, 0.02, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.background = "transparent";
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const baseGeometry = new THREE.SphereGeometry(1.65, 96, 96);
    const baseMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#312e81"),
      transparent: true,
      opacity: 0.16,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    orbGroup.add(base);

    const hemiGlowTexture = (() => {
      const size = 512;
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const cctx = c.getContext("2d");
      if (!cctx) return null;
      const g = cctx.createRadialGradient(size * 0.67, size * 0.42, size * 24 / 512, size * 0.67, size * 0.42, size * 0.44);
      g.addColorStop(0, "rgba(198,120,255,0.58)");
      g.addColorStop(0.45, "rgba(170,106,255,0.3)");
      g.addColorStop(1, "rgba(120,80,255,0)");
      cctx.fillStyle = g;
      cctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    })();

    const hemiGlowMat = new THREE.SpriteMaterial({
      map: hemiGlowTexture ?? undefined,
      color: new THREE.Color("#8b5cf6"),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const hemiGlow = new THREE.Sprite(hemiGlowMat);
    hemiGlow.position.set(0.42, 0.06, 1.05);
    hemiGlow.scale.set(2.75, 2.75, 1);
    orbGroup.add(hemiGlow);

    const strandLines: THREE.Line[] = [];
    const strandDefs: Array<{ phi: number; amp: number; phase: number; speed: number; color: THREE.Color }> = [];
    const strandPointCount = 120;

    for (let i = 0; i < 16; i += 1) {
      const t = i / 15;
      const phi = -Math.PI * 0.92 + t * Math.PI * 1.84;
      const amp = 0.06 + t * 0.08;
      const phase = t * Math.PI * 2.3;
      const speed = 0.12 + t * 0.12;
      const isRight = t > 0.5;
      const color = new THREE.Color(isRight ? "#a78bfa" : "#818cf8");
      strandDefs.push({ phi, amp, phase, speed, color });

      const pos = new Float32Array(strandPointCount * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: isRight ? 0.32 : 0.28,
      });
      const line = new THREE.Line(geo, mat);
      strandLines.push(line);
      orbGroup.add(line);
    }

    const waveLines: THREE.Line[] = [];
    const waveDefs: Array<{ y: number; amp: number; speed: number; phase: number; color: THREE.Color }> = [];
    const wavePointCount = 120;
    // Set to 0 to safely remove wave lines and dramatically declutter the orb
    for (let i = 0; i < 0; i += 1) {
      const t = i / 17;
      waveDefs.push({
        y: -1.2 + t * 2.4,
        amp: 0.08 + t * 0.04,
        speed: 0.45 + t * 0.2,
        phase: i * 0.32,
        color: new THREE.Color(i > 9 ? "#c984ff" : "#6edfff"),
      });
      const pos = new Float32Array(wavePointCount * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({
        color: waveDefs[i].color,
        transparent: true,
        opacity: 0.28,
      });
      const line = new THREE.Line(geo, mat);
      waveLines.push(line);
      orbGroup.add(line);
    }

    const latitudeLines: THREE.Line[] = [];
    const latitudeDefs: Array<{ yNorm: number; speed: number; phase: number; color: THREE.Color }> = [];
    const latitudePointCount = 160;
    for (let i = 0; i < 6; i += 1) {
      const t = i / 5;
      const yNorm = -0.7 + t * 1.4;
      latitudeDefs.push({
        yNorm,
        speed: 0.12 + t * 0.16,
        phase: i * 0.52,
        color: new THREE.Color(i > 3 ? "#a78bfa" : "#818cf8"),
      });
      const pos = new Float32Array(latitudePointCount * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({
        color: latitudeDefs[i].color,
        transparent: true,
        opacity: 0.15,
      });
      const line = new THREE.Line(geo, mat);
      latitudeLines.push(line);
      orbGroup.add(line);
    }

    const starCount = 400;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const rr = 1.57 + (Math.random() - 0.5) * 0.12;
      starPositions[i * 3] = rr * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = rr * Math.cos(phi);
      starPositions[i * 3 + 2] = rr * Math.sin(phi) * Math.sin(theta);
    }

    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({
      color: new THREE.Color("#c7d2fe"),
      size: 0.011, // ultra-fine diamond dust
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    orbGroup.add(stars);

    const glowGeo = new THREE.SphereGeometry(1.8, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4338ca"),
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    orbGroup.add(glowMesh);

    const coreGlowGeo = new THREE.SphereGeometry(1.52, 64, 64);
    const coreGlowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#5b21b6"),
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    orbGroup.add(coreGlow);

    // --- Dotted World Map Globe & Detailed Mexico ---
    const mapCanvas = document.createElement("canvas");
    mapCanvas.width = 512;
    mapCanvas.height = 256;
    const mctx = mapCanvas.getContext("2d");

    // Coordinates for high-fidelity Mexico polygon in [px, py] (range 0-360, 0-180)
    const mexicoPoly = [
      [63.0, 57.5], [65.0, 61.5], [70.1, 67.1], [69.7, 65.9], [66.5, 61.0], [65.2, 58.2],
      [69.0, 58.7], [73.6, 58.3], [77.0, 60.5], [79.5, 61.3], [82.9, 64.1], [82.1, 67.7],
      [83.9, 70.8], [85.5, 71.9], [88.2, 71.4], [89.5, 70.2], [89.6, 68.9], [93.1, 68.5],
      [92.6, 69.8], [91.7, 71.5], [89.2, 72.2], [87.8, 75.5], [84.8, 73.8], [80.1, 73.2],
      [75.7, 70.9], [74.7, 69.4], [73.6, 66.8], [69.1, 62.1]
    ];

    const cdmxPx = 80.8668;
    const cdmxPy = 70.5674;
    const mexicoScale = 2.6; // Ultra-premium scaling factor to make Mexico magnificent and clearly visible

    const scaledMexicoPoly = mexicoPoly.map(([px, py]) => [
      cdmxPx + (px - cdmxPx) * mexicoScale,
      cdmxPy + (py - cdmxPy) * mexicoScale
    ]);

    if (mctx) {
      mctx.fillStyle = "#000000";
      mctx.fillRect(0, 0, 512, 256);
      
      // Draw world continents in white
      mctx.fillStyle = "#ffffff";
      const continentPolys = [
        [[110, 10], [135, 12], [130, 22], [115, 22]],
        [[40, 25], [105, 20], [125, 45], [95, 75], [82, 95], [68, 90], [55, 60], [38, 45]],
        [[82, 95], [105, 100], [115, 118], [102, 148], [92, 168], [85, 155], [78, 125], [78, 105]],
        [[155, 82], [178, 78], [195, 92], [215, 105], [205, 128], [192, 150], [182, 155], [172, 130], [162, 105]],
        [[145, 30], [210, 20], [280, 20], [330, 30], [335, 65], [305, 85], [268, 90], [238, 80], [212, 80], [195, 92], [178, 78], [155, 82], [155, 50], [140, 45]],
        [[285, 120], [315, 120], [320, 135], [300, 145], [285, 135]]
      ];

      continentPolys.forEach((poly) => {
        mctx.beginPath();
        poly.forEach(([px, py], i) => {
          const sx = (px / 360) * 512;
          const sy = (py / 180) * 256;
          if (i === 0) mctx.moveTo(sx, sy);
          else mctx.lineTo(sx, sy);
        });
        mctx.closePath();
        mctx.fill();
      });

      // Draw detailed Mexico polygon on top in RED
      mctx.fillStyle = "#ff0000";
      mctx.beginPath();
      scaledMexicoPoly.forEach(([px, py], i) => {
        const sx = (px / 360) * 512;
        const sy = (py / 180) * 256;
        if (i === 0) mctx.moveTo(sx, sy);
        else mctx.lineTo(sx, sy);
      });
      mctx.closePath();
      mctx.fill();
    }

    const globePoints: THREE.Vector3[] = [];
    const mexicoPoints: THREE.Vector3[] = [];
    const mctx2 = mapCanvas.getContext("2d");
    if (mctx2) {
      const imgData = mctx2.getImageData(0, 0, 512, 256);
      const data = imgData.data;
      const stepX = 3;
      const stepY = 3;
      const globeRadius = 1.55;

      for (let y = 0; y < 256; y += stepY) {
        for (let x = 0; x < 512; x += stepX) {
          const idx = (y * 512 + x) * 4;
          if (data[idx] > 128) {
            const u = x / 512;
            const v = y / 256;
            const theta = u * Math.PI * 2 - Math.PI;
            const phi = v * Math.PI;

            const sx = globeRadius * Math.sin(phi) * Math.cos(theta);
            const sy = globeRadius * Math.cos(phi);
            const sz = globeRadius * Math.sin(phi) * Math.sin(theta);
            
            // Check if it is Mexico (Red high, Green and Blue channels low)
            if (data[idx + 1] < 100 && data[idx + 2] < 100) {
              mexicoPoints.push(new THREE.Vector3(sx, sy, sz));
            } else {
              globePoints.push(new THREE.Vector3(sx, sy, sz));
            }
          }
        }
      }
    }

    const globeGeo = new THREE.BufferGeometry().setFromPoints(globePoints);
    const globeMat = new THREE.PointsMaterial({
      color: new THREE.Color("#3730a3"),
      size: 0.024,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const globe = new THREE.Points(globeGeo, globeMat);
    orbGroup.add(globe);

    // --- Mexico Glowing Particles ---
    const mexicoGeo = new THREE.BufferGeometry().setFromPoints(mexicoPoints);
    const mexicoMat = new THREE.PointsMaterial({
      color: new THREE.Color("#f3e8ff"), // glowing lavender-white
      size: 0.032, // slightly larger dots
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mexico = new THREE.Points(mexicoGeo, mexicoMat);
    orbGroup.add(mexico);

    // --- Mexico Glowing Neon Outline ---
    const mexicoOutlinePoints: THREE.Vector3[] = [];
    const outlineRadius = 1.56;
    scaledMexicoPoly.forEach(([px, py]) => {
      const u = px / 360;
      const v = py / 180;
      const theta = u * Math.PI * 2 - Math.PI;
      const phi = v * Math.PI;

      const sx = outlineRadius * Math.sin(phi) * Math.cos(theta);
      const sy = outlineRadius * Math.cos(phi);
      const sz = outlineRadius * Math.sin(phi) * Math.sin(theta);
      mexicoOutlinePoints.push(new THREE.Vector3(sx, sy, sz));
    });

    const mexicoOutlineGeo = new THREE.BufferGeometry().setFromPoints(mexicoOutlinePoints);
    const mexicoOutlineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#c084fc"), // bright glowing lavender
      transparent: true,
      opacity: 0.85,
    });
    const mexicoOutline = new THREE.LineLoop(mexicoOutlineGeo, mexicoOutlineMat);
    orbGroup.add(mexicoOutline);

    // --- CDMX Pulsing Connectivity Beacon ---
    const cdmxU = cdmxPx / 360;
    const cdmxV = cdmxPy / 180;
    const cdmxTheta = cdmxU * Math.PI * 2 - Math.PI;
    const cdmxPhi = cdmxV * Math.PI;
    const beaconRadius = 1.57;

    const cdmxPos = new THREE.Vector3(
      beaconRadius * Math.sin(cdmxPhi) * Math.cos(cdmxTheta),
      beaconRadius * Math.cos(cdmxPhi),
      beaconRadius * Math.sin(cdmxPhi) * Math.sin(cdmxTheta)
    );

    const beaconGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#c084fc"), // glowing lavender
      transparent: true,
      opacity: 0.95,
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.copy(cdmxPos);
    orbGroup.add(beacon);

    // 3 expanding rings around CDMX
    const ringGeo = new THREE.RingGeometry(0.01, 0.15, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#a855f7"), // glowing violet/purple
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    
    const rings: THREE.Mesh[] = [];
    const ringCount = 3;
    for (let i = 0; i < ringCount; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat.clone());
      ring.position.copy(cdmxPos);
      const normal = cdmxPos.clone().normalize();
      ring.lookAt(cdmxPos.clone().add(normal));
      orbGroup.add(ring);
      rings.push(ring);
    }

    // --- Interconnected Pulsing Nodes & Energy Transmission Network ---
    const nodeCount = 18;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const x = 1.63 * Math.sin(phi) * Math.cos(theta);
      const y = 1.63 * Math.cos(phi);
      const z = 1.63 * Math.sin(phi) * Math.sin(theta);
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const nodesGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const nodesMat = new THREE.PointsMaterial({
      color: new THREE.Color("#818cf8"),
      size: 0.085,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nodesPoints = new THREE.Points(nodesGeo, nodesMat);
    orbGroup.add(nodesPoints);

    const pinkNodes: THREE.Vector3[] = [];
    for (let i = 0; i < 10; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / 10);
      const theta = Math.sqrt(10 * Math.PI) * phi + Math.PI / 4;
      const x = 1.63 * Math.sin(phi) * Math.cos(theta);
      const y = 1.63 * Math.cos(phi);
      const z = 1.63 * Math.sin(phi) * Math.sin(theta);
      pinkNodes.push(new THREE.Vector3(x, y, z));
    }

    const pinkNodesGeo = new THREE.BufferGeometry().setFromPoints(pinkNodes);
    const pinkNodesMat = new THREE.PointsMaterial({
      color: new THREE.Color("#c084fc"),
      size: 0.075,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pinkNodesPoints = new THREE.Points(pinkNodesGeo, pinkNodesMat);
    orbGroup.add(pinkNodesPoints);

    // Build connections
    const connectionPairs: Array<[THREE.Vector3, THREE.Vector3]> = [];
    const allNodes = [...nodes, ...pinkNodes];
    for (let i = 0; i < allNodes.length; i++) {
      const n1 = allNodes[i];
      const dists = allNodes
        .map((n2, idx) => ({ idx, dist: n1.distanceTo(n2) }))
        .filter((d) => d.idx !== i)
        .sort((a, b) => a.dist - b.dist);

      for (let k = 0; k < Math.min(2, dists.length); k++) {
        if (dists[k].idx > i) {
          connectionPairs.push([n1, allNodes[dists[k].idx]]);
        }
      }
    }

    const linePositions: number[] = [];
    connectionPairs.forEach(([n1, n2]) => {
      linePositions.push(n1.x, n1.y, n1.z, n2.x, n2.y, n2.z);
    });

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#4f46e5"),
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const networkLines = new THREE.LineSegments(linesGeo, linesMat);
    orbGroup.add(networkLines);

    // Energy packet pulses
    const packets = connectionPairs.map(([n1, n2], idx) => ({
      n1,
      n2,
      progress: Math.random(),
      speed: 0.38 + Math.random() * 0.45,
      color: idx % 2 === 0 ? new THREE.Color("#818cf8") : new THREE.Color("#c084fc"),
    }));

    // Multi-point data trails (comets) configuration
    const TRAIL_LENGTH = 5;
    const packetPositions = new Float32Array(packets.length * TRAIL_LENGTH * 3);
    const packetColors = new Float32Array(packets.length * TRAIL_LENGTH * 3);

    packets.forEach((p, idx) => {
      for (let s = 0; s < TRAIL_LENGTH; s++) {
        const pointIdx = idx * TRAIL_LENGTH + s;
        // Exponential brightness decay of the trailing nodes
        const decay = Math.pow(0.55, s);
        packetColors[pointIdx * 3] = p.color.r * decay;
        packetColors[pointIdx * 3 + 1] = p.color.g * decay;
        packetColors[pointIdx * 3 + 2] = p.color.b * decay;
      }
    });

    const packetsGeo = new THREE.BufferGeometry();
    packetsGeo.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));
    packetsGeo.setAttribute("color", new THREE.BufferAttribute(packetColors, 3));

    const packetsMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.0, // controlled dynamically by the cinematic intro
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const packetPoints = new THREE.Points(packetsGeo, packetsMat);
    orbGroup.add(packetPoints);

    // --- Fiber Optic 3D Arcs from CDMX to Global Nodes ---
    const arcLines: THREE.Line[] = [];
    const arcCurves: THREE.QuadraticBezierCurve3[] = [];
    
    // Select well-distributed global nodes to connect with CDMX
    const allGlobalNodes = [...nodes, ...pinkNodes];
    const targetNodeIndices = [1, 5, 10, 15, 22]; // Select 5 diverse nodes on the sphere
    const targetNodes: THREE.Vector3[] = [];
    targetNodeIndices.forEach((idx) => {
      if (allGlobalNodes[idx]) {
        targetNodes.push(allGlobalNodes[idx]);
      }
    });

    targetNodes.forEach((node) => {
      const midPoint = new THREE.Vector3().addVectors(cdmxPos, node).multiplyScalar(0.5);
      const dist = cdmxPos.distanceTo(node);
      const normal = midPoint.clone().normalize();
      // Height of arc proportional to distance
      const controlPoint = midPoint.clone().add(normal.multiplyScalar(dist * 0.28));
      const curve = new THREE.QuadraticBezierCurve3(cdmxPos, controlPoint, node);
      arcCurves.push(curve);

      const pts = curve.getPoints(40);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#a78bfa"), // glowing purple/lavender
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geo, mat);
      orbGroup.add(line);
      arcLines.push(line);
    });

    // --- Curved Arc Laser Packets ---
    const arcPackets = targetNodes.map((node, idx) => ({
      curveIndex: idx,
      progress: Math.random(),
      speed: 0.35 + Math.random() * 0.4,
      color: new THREE.Color("#c084fc"), // glowing lavender
    }));

    const arcPacketsGeo = new THREE.BufferGeometry();
    const arcPacketsPos = new Float32Array(arcPackets.length * 3);
    arcPacketsGeo.setAttribute("position", new THREE.BufferAttribute(arcPacketsPos, 3));
    const arcPacketsMat = new THREE.PointsMaterial({
      color: new THREE.Color("#c084fc"),
      size: 0.085,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const arcPacketsPoints = new THREE.Points(arcPacketsGeo, arcPacketsMat);
    orbGroup.add(arcPacketsPoints);

    let lastT = 0;
    let rafId = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };

    const radius = 1.62;
    const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

    const animate = () => {
      const t = clock.getElapsedTime();
      const dt = lastT === 0 ? 0.016 : t - lastT;
      lastT = t;

      // Cinematic Intro timing configurations
      const introProgress = Math.min(1, t / 3.0);
      const introFactor = easeOutExpo(introProgress); // Base scale/brightness intro factor (0s - 3s)
      
      const globeProgress = Math.min(1, Math.max(0, (t - 0.5) / 1.5));
      const globeFactor = easeOutExpo(globeProgress); // Dotted map sweep intro factor (0.5s - 2s)

      const strandsProgress = Math.min(1, Math.max(0, (t - 1.0) / 1.5));
      const strandsFactor = easeOutExpo(strandsProgress); // Connection lines / energy network intro (1s - 2.5s)

      // Update energy packet positions with comet trails
      const packetAttr = packetsGeo.getAttribute("position") as THREE.BufferAttribute;
      packets.forEach((p, idx) => {
        if (t > 1.2) { // start moving once intro has initialized
          p.progress += dt * p.speed;
          if (p.progress > 1) {
            p.progress = 0;
            if (Math.random() > 0.5) {
              const temp = p.n1;
              p.n1 = p.n2;
              p.n2 = temp;
            }
          }
        }

        for (let s = 0; s < TRAIL_LENGTH; s++) {
          const pointIdx = idx * TRAIL_LENGTH + s;
          // Progress offset for trailing points
          const trailProgress = Math.max(0, p.progress - s * 0.018);
          const currentPos = new THREE.Vector3().lerpVectors(p.n1, p.n2, trailProgress);
          currentPos.normalize().multiplyScalar(1.635);
          packetAttr.setXYZ(pointIdx, currentPos.x, currentPos.y, currentPos.z);
        }
      });
      packetAttr.needsUpdate = true;

      // Pulse node sizes and material opacities dynamically
      nodesMat.size = (0.07 + Math.sin(t * 5) * 0.02) * (0.3 + 0.7 * strandsFactor);
      pinkNodesMat.size = (0.06 + Math.cos(t * 4) * 0.018) * (0.3 + 0.7 * strandsFactor);
      packetsMat.size = (0.065 + Math.sin(t * 7) * 0.015) * (0.3 + 0.7 * strandsFactor);

      nodesMat.opacity = 0.75 * strandsFactor;
      pinkNodesMat.opacity = 0.75 * strandsFactor;
      linesMat.opacity = 0.16 * strandsFactor;
      packetsMat.opacity = strandsFactor;

      for (let i = 0; i < strandLines.length; i += 1) {
        const line = strandLines[i];
        const def = strandDefs[i];
        const attr = line.geometry.getAttribute("position") as THREE.BufferAttribute;
        
        // Fade in strand opacities
        const isRight = def.phi > 0;
        (line.material as THREE.LineBasicMaterial).opacity = (isRight ? 0.5 : 0.45) * strandsFactor;

        for (let j = 0; j < strandPointCount; j += 1) {
          const v = j / (strandPointCount - 1);
          const theta = -Math.PI * 0.98 + v * Math.PI * 1.96;
          
          // Double harmonic wave for organic liquid-plasma motion
          const drift = Math.sin(theta * 2.15 + t * def.speed + def.phase) * def.amp * 0.82 +
                        Math.cos(theta * 4.3 - t * def.speed * 1.4 + def.phase * 2) * def.amp * 0.22;
          
          // Multi-frequency radial resonance
          const localR = radius + 
                         Math.sin(theta * 1.7 + t * 0.35 + def.phase) * 0.016 +
                         Math.cos(theta * 3.4 - t * 0.7 + def.phase) * 0.006;

          const x = localR * Math.sin(theta) * Math.cos(def.phi + drift);
          const y = localR * Math.cos(theta);
          const z = localR * Math.sin(theta) * Math.sin(def.phi + drift);
          attr.setXYZ(j, x, y, z);
        }
        attr.needsUpdate = true;
      }

      for (let i = 0; i < waveLines.length; i += 1) {
        const line = waveLines[i];
        const def = waveDefs[i];
        const attr = line.geometry.getAttribute("position") as THREE.BufferAttribute;
        
        (line.material as THREE.LineBasicMaterial).opacity = 0.28 * strandsFactor;

        for (let j = 0; j < wavePointCount; j += 1) {
          const u = -1 + (j / (wavePointCount - 1)) * 2;
          const yy = def.y * 0.86;
          
          // Double harmonic drift horizontal offset
          const zOffset = Math.sin(u * 3.1 + t * def.speed + def.phase) * def.amp * 0.78 +
                          Math.cos(u * 6.2 - t * def.speed * 1.3) * def.amp * 0.22;

          const x = u * 1.65;
          const y = yy + zOffset * 0.35;
          const inside = radius * radius - y * y - x * x;
          
          // Dynamic dual wave ripples
          const ripple = Math.sin(u * 1.1 + t * 0.25) * 0.75 + 
                         Math.cos(u * 2.2 - t * 0.53) * 0.25;
          const z = inside > 0 ? Math.sqrt(inside) * ripple * 0.35 : 0;
          attr.setXYZ(j, x, y, z);
        }
        attr.needsUpdate = true;
      }

      for (let i = 0; i < latitudeLines.length; i += 1) {
        const line = latitudeLines[i];
        const def = latitudeDefs[i];
        const attr = line.geometry.getAttribute("position") as THREE.BufferAttribute;
        
        (line.material as THREE.LineBasicMaterial).opacity = 0.26 * strandsFactor;

        const y = def.yNorm * radius;
        const rrBase = Math.sqrt(Math.max(0, radius * radius - y * y));
        for (let j = 0; j < latitudePointCount; j += 1) {
          const u = j / (latitudePointCount - 1);
          const a = u * Math.PI * 2;
          
          // Double harmonic ring warp
          const wave = Math.sin(a * 3.4 + t * def.speed + def.phase) * 0.024 +
                       Math.cos(a * 6.8 - t * def.speed * 1.2) * 0.008;

          const rr = rrBase + wave;
          const x = rr * Math.cos(a);
          const z = rr * Math.sin(a);
          attr.setXYZ(j, x, y + wave * 0.25, z);
        }
        attr.needsUpdate = true;
      }

      // Group rotation (slower, majestic constant auto-rotation)
      orbGroup.rotation.y = t * 0.082;
      orbGroup.rotation.z = Math.sin(t * 0.12) * 0.015;
      orbGroup.rotation.x = Math.sin(t * 0.08) * 0.015;

      stars.rotation.y = -t * 0.08;
      stars.rotation.z = Math.sin(t * 0.22) * 0.05;
      stars.rotation.x = Math.sin(t * 0.1) * 0.02;

      // Animate CDMX beacon rings expanding and fading
      rings.forEach((ring, i) => {
        const phase = (t * 0.7 + i / ringCount) % 1.0;
        const scale = 0.05 + phase * 3.5;
        ring.scale.set(scale, scale, 1);
        (ring.material as THREE.MeshBasicMaterial).opacity = (1.0 - phase) * 0.75 * strandsFactor;
      });

      // Pulse CDMX beacon core
      const beaconScale = 1.0 + Math.sin(t * 8) * 0.25;
      beacon.scale.setScalar(beaconScale * introFactor);

      // Update fiber optic arc laser packets
      const arcPacketAttr = arcPacketsGeo.getAttribute("position") as THREE.BufferAttribute;
      arcPackets.forEach((p, idx) => {
        p.progress += dt * p.speed;
        if (p.progress > 1.0) {
          p.progress = 0;
          p.speed = 0.35 + Math.random() * 0.4;
        }
        const curve = arcCurves[p.curveIndex];
        if (curve) {
          const currentPos = curve.getPointAt(p.progress);
          arcPacketAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z);
        }
      });
      arcPacketAttr.needsUpdate = true;
      arcPacketsMat.opacity = strandsFactor * 0.9;

      // Pulse Mexico points
      mexicoMat.size = (0.03 + Math.sin(t * 6) * 0.008) * (0.3 + 0.7 * globeFactor);
      mexicoMat.opacity = (0.75 + Math.sin(t * 6) * 0.15) * globeFactor;

      // Pulse Mexico outline
      mexicoOutlineMat.opacity = (0.65 + Math.sin(t * 6) * 0.2) * strandsFactor;

      // Dynamic breathing and pulsing of globe elements
      globeMat.opacity = (0.42 + Math.sin(t * 1.5) * 0.08) * globeFactor;
      
      const colBase = new THREE.Color("#312e81").lerp(new THREE.Color("#4f46e5"), 0.5 + 0.5 * Math.sin(t * 0.8));
      baseMaterial.color.copy(colBase);

      linesMat.opacity = (0.12 + Math.sin(t * 1.5) * 0.04) * strandsFactor;

      // Scaled elements according to introductory factor
      starsMat.opacity = (0.52 + Math.sin(t * 1.4) * 0.06) * introFactor;
      hemiGlowMat.opacity = (0.58 + Math.sin(t * 0.7) * 0.05) * introFactor;
      glowMat.opacity = (0.14 + Math.sin(t * 0.65) * 0.025) * introFactor;
      coreGlowMat.opacity = (0.1 + Math.sin(t * 0.95) * 0.035) * introFactor;
      coreGlow.scale.setScalar((1 + Math.sin(t * 0.6) * 0.018) * introFactor);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    resize();
    rafId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      baseGeometry.dispose();
      baseMaterial.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      coreGlowGeo.dispose();
      coreGlowMat.dispose();
      starsGeo.dispose();
      starsMat.dispose();
      globeGeo.dispose();
      globeMat.dispose();

      // Clean up Mexico specific resources
      mexicoGeo.dispose();
      mexicoMat.dispose();
      mexicoOutlineGeo.dispose();
      mexicoOutlineMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      rings.forEach((ring) => {
        (ring.material as THREE.Material).dispose();
      });
      arcLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      arcPacketsGeo.dispose();
      arcPacketsMat.dispose();

      // Clean up network nodes and lines
      nodesGeo.dispose();
      nodesMat.dispose();
      pinkNodesGeo.dispose();
      pinkNodesMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      packetsGeo.dispose();
      packetsMat.dispose();

      if (hemiGlowMat.map) hemiGlowMat.map.dispose();
      hemiGlowMat.dispose();
      strandLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      waveLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      latitudeLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
