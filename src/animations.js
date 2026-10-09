export const portfilioItem = {
  hidden: { opacity: 0, },
  visible: {
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .4
    }
  }
}

export const headingAnim = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0px",
    opacity: 1,
    transition: {
      duration: .75,
      delay: 1.5
    }
  },
}

export const navAnim = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: "0px",
    opacity: 1,
    transition: {
      duration: .75,
      delay: 1.5
    }
  },
}

export const textAnim = {
  hidden: {
    y: "50px",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: .85,
      delay: .15
    }
  },
  viewport: {
    margin: "50%",
    // once: true
  }
}

export const headAnim = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: .75,
      delay: .15
    }
  },
  viewport: {
    margin: "50%",
    // once: true
  }
}

export const contactImg = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .75,
      delay: .5
    }
  },
  viewport: {
    margin: "50%",
    // once: true
  }
}

export const cardAnim = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: .75,
      delay: .15
    }
  },
  viewport: {
    margin: "50%",
    // once: true
  }
}
