import React, { useRef, useEffect, memo, useMemo } from 'react'

const Canvas = props => {
  
    const canvasRef = useRef(null)

    const drawSolid = (ctx, radius, x, y) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(x, y, radius*200, 0, 2 * Math.PI)
    ctx.fill()
    }

    useEffect(() => {

    const canvas = canvasRef.current
    canvas.width = 400;
    canvas.height = 600;
    const context = canvas.getContext('2d')

    let offset_counter = 0;
    for (let i=0; i<=300; i+=80) {
        for (let j=10; j<=350; j+=50) {
            const offset = Math.random() * (120 - 50) + 70;
            if (offset_counter%2 == 0) {
                drawSolid(context, props.radius, i+offset, j+offset)
            } else {
                drawSolid(context, props.radius, i+offset, j+offset)
            }
        }
        offset_counter++;
    }

    }, [drawSolid])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas
