import * as React from "react";
import { motion } from "framer-motion";
import styles from './Example.module.css'
import { FC } from 'react'
import { NavLink } from 'react-router-dom';


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface MenuItemProps {
  i: number;
  to: string;
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem: FC<MenuItemProps> = ({ i, to }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder} style={style} />
      <div className={styles.textPlaceholder} style={style}>
        <NavLink to={to}>{to}</NavLink>
      </div>
    </motion.li>
  );
};
