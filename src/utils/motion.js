export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

// Simple fade-in animation at its own position (opacity only)
export const fadeInOpacity = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Rotate animation
export const rotateIn = (angle, delay, duration) => {
  return {
    hidden: {
      rotate: angle,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
  };
};

// Bounce animation
export const bounceIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: duration,
        delay: delay,
      },
    },
  };
};

// Scale up with opacity
export const scaleUp = (delay, duration) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Horizontal wiggle animation
export const wiggle = (delay, duration) => {
  return {
    hidden: {
      x: 0,
    },
    show: {
      x: [0, -10, 10, -10, 10, 0], // A series of positions for the wiggle
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
  };
};

// Pulsing animation (scaling repeatedly)
export const pulse = (delay, duration) => {
  return {
    hidden: {
      scale: 1,
    },
    show: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

// Flip animation
export const flipIn = (direction, delay, duration) => {
  return {
    hidden: {
      rotateX: direction === "x" ? -90 : 0,
      rotateY: direction === "y" ? -90 : 0,
      opacity: 0,
    },
    show: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
  };
};

// Shake animation
export const shake = (delay, duration) => {
  return {
    hidden: {
      x: 0,
    },
    show: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Slide and fade simultaneously
export const slideAndFade = (direction, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};
