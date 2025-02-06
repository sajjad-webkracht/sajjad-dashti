import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Character = () => {
    const fbx = useLoader(FBXLoader, '/static/happy.fbx');
    const ref = useRef();

    useEffect(() => {
        if (fbx.animations.length) {
            const mixer = new THREE.AnimationMixer(fbx);
            mixer.clipAction(fbx.animations[0]).play();
            ref.current.mixer = mixer;
        }
    }, [fbx]);

    useFrame((state, delta) => {
        if (ref.current.mixer) {
            ref.current.mixer.update(delta);
        }
    });

    return (
        <primitive ref={ref} object={fbx} scale={[6.6, 6.6, 6.6]} position={[0.3, -10, 0]}/>
    );
};

const App = () => {
    return (
        <div className='absolute bottom-0 left-0 w-full z-10'>
            <Canvas className='!h-[400px] md:!h-[600px] !w-full'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-8, 2, -5]} intensity={800.5} color="#1ABCFE" />
                <pointLight position={[8, 0, -3]} intensity={1200.5} color="#FBBF24" />
                <Character />
            </Canvas>
        </div>
    );
};

export default App;