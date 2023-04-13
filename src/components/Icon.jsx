import React from "react";
import { motion } from "framer-motion";

const Icon = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0,0,0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255,255,255, 1)",
    },
  };
  return (
    <>
      <svg
        width="482"
        height="93"
        viewBox="0 0 482 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="frame-path"
      >
        <motion.path
          d="M22.824 2.144V92H0.936V2.144H22.824ZM119.07 92H97.182L60.574 36.576V92H38.686V2.144H60.574L97.182 57.824V2.144H119.07V92ZM131.224 46.944C131.224 38.0693 133.144 30.176 136.984 23.264C140.824 16.2667 146.157 10.848 152.984 7.008C159.896 3.08266 167.704 1.12 176.408 1.12C187.075 1.12 196.205 3.93599 203.8 9.56799C211.395 15.2 216.472 22.88 219.032 32.608H194.968C193.176 28.8533 190.616 25.9947 187.288 24.032C184.045 22.0693 180.333 21.088 176.152 21.088C169.411 21.088 163.949 23.4347 159.768 28.128C155.587 32.8213 153.496 39.0933 153.496 46.944C153.496 54.7947 155.587 61.0667 159.768 65.76C163.949 70.4533 169.411 72.8 176.152 72.8C180.333 72.8 184.045 71.8187 187.288 69.856C190.616 67.8933 193.176 65.0347 194.968 61.28H219.032C216.472 71.008 211.395 78.688 203.8 84.32C196.205 89.8667 187.075 92.64 176.408 92.64C167.704 92.64 159.896 90.72 152.984 86.88C146.157 82.9547 140.824 77.536 136.984 70.624C133.144 63.712 131.224 55.8187 131.224 46.944ZM274.932 92.896C266.484 92.896 258.719 90.9333 251.636 87.008C244.639 83.0827 239.049 77.6213 234.868 70.624C230.772 63.5413 228.724 55.6053 228.724 46.816C228.724 38.0267 230.772 30.1333 234.868 23.136C239.049 16.1387 244.639 10.6773 251.636 6.752C258.719 2.82667 266.484 0.863998 274.932 0.863998C283.38 0.863998 291.103 2.82667 298.1 6.752C305.183 10.6773 310.729 16.1387 314.74 23.136C318.836 30.1333 320.884 38.0267 320.884 46.816C320.884 55.6053 318.836 63.5413 314.74 70.624C310.644 77.6213 305.097 83.0827 298.1 87.008C291.103 90.9333 283.38 92.896 274.932 92.896ZM274.932 72.928C282.1 72.928 287.817 70.5387 292.084 65.76C296.436 60.9813 298.612 54.6667 298.612 46.816C298.612 38.88 296.436 32.5653 292.084 27.872C287.817 23.0933 282.1 20.704 274.932 20.704C267.679 20.704 261.876 23.0507 257.524 27.744C253.257 32.4373 251.124 38.7947 251.124 46.816C251.124 54.752 253.257 61.1093 257.524 65.888C261.876 70.5813 267.679 72.928 274.932 72.928ZM366.725 2.144C376.197 2.144 384.474 4.02133 391.557 7.77599C398.64 11.5307 404.101 16.8213 407.941 23.648C411.866 30.3893 413.829 38.1973 413.829 47.072C413.829 55.8613 411.866 63.6693 407.941 70.496C404.101 77.3227 398.597 82.6133 391.429 86.368C384.346 90.1227 376.112 92 366.725 92H333.061V2.144H366.725ZM365.317 73.056C373.594 73.056 380.037 70.7947 384.645 66.272C389.253 61.7493 391.557 55.3493 391.557 47.072C391.557 38.7947 389.253 32.352 384.645 27.744C380.037 23.136 373.594 20.832 365.317 20.832H354.949V73.056H365.317ZM447.949 19.68V37.856H477.261V54.752H447.949V74.464H481.101V92H426.061V2.144H481.101V19.68H447.949Z"
          fill="white"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 5, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
      </svg>
    </>
  );
};

export default Icon;