import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Animation(props) {
    const mesh = useRef()
    return(
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )    
}
