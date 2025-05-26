import { useEffect, useState } from "react";
import "./logo.css";
import { motion, useAnimation } from "framer-motion";
import LogoSvg from "./logo_pic";

export default function Logo() {
  const [indexColor, setIndexColor] = useState(0);

  // useEffect(() => {
  //   console.log(`debug ${indexColor}`);
  //   const interval = setInterval(() => {
  //     setIndexColor((prevIndex) => {
  //       const newIndex = prevIndex + 1 > 7 ? 1 : prevIndex + 1;
  //       console.log(`get go ${newIndex}`);
  //       return newIndex;
  //     });
  //   }, 200);

  //   // Clear interval when component unmounts
  //   return () => clearInterval(interval);
  // }, []);
  const controls = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        width: 520,
        height: 580,
        transition: { duration: 1 },
      });
      controls.start({
        rotate: 360,
        transition: { duration: 1 },
      });
      await controls.start({
        width: 330,
        height: 400,
        transition: { duration: 1 },
      });
    };

    sequence();
  }, [controls]);
  return (
    <motion.div
      className="LogoWrap"
      animate={controls}
      initial={{ width: 100, rotate: 0 }}
    >
      <LogoSvg />
      <div className="LogoWrap-Line1">ALÔ</div>
      <div className="LogoWrap-line2"></div>
      <div className="LogoWrap-line3">Mobile</div>
    </motion.div>
  );
}
