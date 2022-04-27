import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {NAVLINKS} from "../../../constants/index";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const itemIds = [0, 1, 2, 3, 4];

export const Navigation = () => (

    <motion.ul variants={variants}>
        {NAVLINKS.map((link, i) => (
            <MenuItem i={i} link={link} key={i} />
        ))}
    </motion.ul>
);

