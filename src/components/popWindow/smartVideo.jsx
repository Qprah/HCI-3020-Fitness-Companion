import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import vd1 from '../../assets/video/e1.mp4';
import './smartVideo.css';
import Steps from './steps';
import Stack from 'react-bootstrap/Stack';

function SmartVideo() {

  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: scrollRef
  });


  const vRef = useRef(null);

  useEffect(() => {
    scrollYProgress.onChange(value => console.log(value));
  }, [scrollYProgress]);


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = vRef.current;
    if (video && Number.isFinite(latest)) {
      const newTime = video.duration * latest;
      if (Number.isFinite(newTime)) {
        video.currentTime = newTime;
      }
    }
  })

  return (
    <Stack direction="horizontal" gap={2}>

        <video className="video-set" ref={vRef} muted controls>
          <source src={vd1} />
        </video>


        <div className="smart-video" ref={scrollRef} style={{ overflow: "scroll" }}>
          <motion.div />
          <Steps ></Steps>
        </div>

    </Stack>
  );
}

export default SmartVideo;
