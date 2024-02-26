import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from './Example.module.css'


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}
    className={styles.ul}>
    {itemIds.map(i => (
      <MenuItem i={i.id} key={i.id} to={i.title} />
    ))}
  </motion.ul>
);

const itemIds = [{ id: 1, title: 'products' }, { id: 2, title: 'city-toggle' }, { id: 3, title: 'sandwich' }];
