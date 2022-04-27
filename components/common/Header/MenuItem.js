import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const colors = ["#FFD9DA", "#F59EB3", "#F081A0", "#ed7296", "#EA638C"];

export const MenuItem = ({ i, link }) => {
    const style = { border: `2px solid ${colors[i]}`, color: colors[i] };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style} />
            <Link href={link.ref} key={i*17}>
                <a target="_blank" rel="noreferrer" className=" text-placeholder text-center" style={style}>
                    {link.name}
                </a>
            </Link>
        </motion.li>
    );
};
