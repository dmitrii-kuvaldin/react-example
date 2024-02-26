import * as React from "react";
import { motion } from "framer-motion";
import styles from './Example.module.css'
import { FC } from 'react'


interface MenuToggleProps {
  toggle: () => void;
}


export const MenuToggle: FC<MenuToggleProps> = ({ toggle }) => (
  <button className={styles.button} onClick={toggle}>
    ☰
  </button>
);
