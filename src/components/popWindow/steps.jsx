import "./steps.css";
import {motion} from "framer-motion";
import React from 'react';

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 20,

    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ title, subtitle, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="step-card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
  <div className="step-card-splash" style={{ background }} />
      <motion.div className="step-card" variants={cardVariants}>
        <h2>{title}</h2> {/* 大标题 */}
        <p>{subtitle}</p> {/* 小文字 */}
      </motion.div>
    </motion.div>
  );
}

const steps = [
//   ["🍅", 340, 10],
//   ["🍊", 20, 40],
//   ["🍋", 60, 90],
//   ["🍐", 80, 120],
//   ["🍏", 100, 140],
//   ["🫐", 205, 245],
//   ["🍆", 260, 290],
//   ["🍇", 290, 320]

{ title: "Step 1", subtitle: "this is step1 description", },
{ title: "Step 2", subtitle: "this is step2 description",},
{ title: "Step 3", subtitle: "this is step3 description", },
{ title: "Step 4", subtitle: "this is step4 description", },
{ title: "Step 5", subtitle: "this is step5 description", },
];

export default function App() {
  return steps.map(({ title, subtitle, hueA, hueB }) => (
    <Card title={title} subtitle={subtitle} hueA={hueA} hueB={hueB} key={title} />
  ));
}
