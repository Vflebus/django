gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const makeAnimations = () => {
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  const textShadow = isTouchDevice()
    ? "0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000"
    : "-1px -1px 0 rgba(255,255,255, 0.4), 1px -1px 0 rgba(255,255,255, 0.4), -1px 1px 0 rgba(255,255,255, 0.4), 1px 1px 0 rgba(255,255,255, 0.4), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000";
  const panels = gsap.utils.toArray(".panel");
  console.log(panels);

  const animation = gsap.timeline();
  animation.to("header .upperHeader", {
    yPercent: -100,
  });
  animation.to(
    "header .lowerHeader",
    {
      yPercent: 100,
    },
    "<"
  );
  if (isTouchDevice()) {
    animation.to(
      ".allLightballs",
      {
        opacity: 0,
      },
      "<"
    );
  }
  animation.to(
    ".aboutTitle",
    {
      color: "#ffcc00",
      textShadow: textShadow,
    },
    "<"
  );
  animation.to(".textContainer", {
    xPercent: -100,
  });
  const intro = gsap.utils.toArray(".textContainer .intro");
  const follow = gsap.utils.toArray(".textContainer .follow");
  animation.to(
    intro,
    {
      opacity: 0,
    },
    "<"
  );
  animation.to(
    follow,
    {
      opacity: 1,
    },
    "<"
  );
  if (isTouchDevice()) {
    animation.to(".about .left", {
      xPercent: -100,
      z: 0.1,
    });
    animation.to(
      ".about .right",
      {
        yPercent: -100,
        z: 0.1,
      },
      "<"
    );
    animation.to(
      ".about",
      {
        pointerEvents: "none",
      },
      "<"
    );
    animation.to(
      "#projectsTitle",
      {
        color: "#ffcc00",
        textShadow: textShadow,
      },
      "<"
    );
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -1,
      z: 0.1,
    });
    animation.to(
      ".projectsContact",
      {
        backgroundColor: "#191919",
      },
      "<"
    );
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -2,
      z: 0.1,
    });
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -3,
      z: 0.1,
    });
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -4,
      z: 0.1,
    });
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -5,
      z: 0.1,
    });
    animation.to(".projectsContact", {
      y: () => document.querySelector(".animator").offsetHeight * -6,
      z: 0.1,
    });
    animation.to(
      ".contact",
      {
        backgroundColor: "#2a2c2e",
      },
      "<"
    );
    animation.to(
      ".allLightballs",
      {
        opacity: 1,
      },
      "<"
    );
  } else {
    animation.to(".about .left", {
      xPercent: -100,
    });
    animation.to(
      ".about .right",
      {
        xPercent: 100,
      },
      "<"
    );
    animation.to(
      ".about",
      {
        pointerEvents: "none",
      },
      "<"
    );
    animation.to(
      "#projectsTitle",
      {
        color: "#ffcc00",
        textShadow: textShadow,
      },
      "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -1,
    });
    animation.to(
      ".projectsContact",
      {
        backgroundColor: "#191919",
      },
      "<"
    );
    animation.to("body", {
      "--scrollerColor": "#a87e54",
  
    },
    "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -2,
    });
    animation.to("body", {
      "--scrollerColor": "#0abda2",
  
    },
    "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -3,
    });
    animation.to("body", {
      "--scrollerColor": "#226ef2",
  
    },
    "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -4,
    });
    animation.to("body", {
      "--scrollerColor": "#FD5E53",
  
    },
    "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -5,
    });
    animation.to("body", {
      "--scrollerColor": "#00FFFF",
  
    },
    "<"
    );
    animation.to(".projectsContact", {
      x: () => document.querySelector(".animator").offsetWidth * -6,
    });
    animation.to("body", {
      "--scrollerColor": "#ffcc00",
  
    },
    "<"
    );
    animation.to(
      ".contact",
      {
        backgroundColor: "#2a2c2e",
      },
      "<"
    );
  }

  let isMouseOnProjectImage = false;
  let snap = ScrollTrigger.snapDirectional(1 / panels.length);
  ScrollTrigger.create({
    animation: animation,
    trigger: ".animator",
    pin: true,
    start: "top top",
    end: () => document.querySelector(".animator").offsetHeight * panels.length,
    scrub: 1,
    onUpdate: (self) => (this.direction = self.direction),
    snap: (value) => snap(value + 0.015 * this.direction),
    onSnapComplete: () => {
      if (isMouseOnProjectImage) {
        gsap.to("#cursor", {
          duration: 0,
          display: "block",
        });
      }
    },
    invalidateOnRefresh: true,
    // markers: true
  });

  const flicker = gsap.timeline();
  flicker.to("header h1", {
    duration: 0.2,
    textShadow: "unset",
    color: "rgba(45,45,45,1)",
  });
  flicker.to(
    "header h1",
    {
      duration: 0.2,
      textShadow: textShadow,
      color: "#ffcc00",
    },
    ">"
  );
  flicker.to(
    "header h1",
    {
      duration: 0.2,
      textShadow: "unset",
      color: "rgba(45,45,45,1)",
    },
    ">"
  );
  flicker.to(
    "header h1",
    {
      duration: 0.2,
      textShadow: textShadow,
      color: "#ffcc00",
    },
    ">"
  );
  flicker.to(
    "header h1",
    {
      duration: 0.2,
      textShadow: "unset",
      color: "rgba(45,45,45,1)",
    },
    ">"
  );

  ScrollTrigger.create({
    animation: flicker,
    trigger: ".upperHeader",
    start: "bottom 49%",
    // scrub: true,
    toggleActions: "play none none reverse",
  });

  gsap.to(".lightball_orange", {
    duration: 70,
    motionPath: {
      path: "#path_orange",
      align: "#path_orange",
      alignOrigin: [0.5, 0.5],
    },
    repeat: -1,
    ease: Power0.easeNone,
  });
  gsap.to(".lightball_yellow", {
    duration: 70,
    motionPath: {
      path: "#path_yellow",
      align: "#path_yellow",
      alignOrigin: [0.5, 0.5],
    },
    repeat: -1,
    ease: Power0.easeNone,
  });
  gsap.to(".lightball_blue", {
    duration: 70,
    motionPath: {
      path: "#path_blue",
      align: "#path_blue",
      alignOrigin: [0.5, 0.5],
    },
    repeat: -1,
    ease: Power0.easeNone,
  });

  goToSection = (sectionNumber) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: () =>
        document.querySelector(".animator").offsetHeight * sectionNumber,
      onComplete: () => {
        gsap.to("#cursor", {
          display: "none",
        });
      },
    });
  };

  scrollToLeftSection = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: () => "+=" + window.innerHeight * -1,
    });
  };
  scrollToRightSection = () => {
    gsap.to(window, { duration: 1, scrollTo: () => "+=" + window.innerHeight });
  };

  if (!isTouchDevice()) {
    const makeCursor = (e) => {
      gsap.to("#cursor", {
        top: e.pageY,
        left: e.pageX,
        duration: 0,
      });
    };
    gsap.to("#cursor", {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: Power0.easeNone,
    });
    Array.from(document.querySelectorAll(".image")).forEach((image) => {
      image.addEventListener("mouseenter", () => {
        isMouseOnProjectImage = true;
        document.addEventListener("mousemove", makeCursor);
        gsap.to("#cursor", {
          display: "block",
        });
      });
      image.addEventListener("mouseleave", () => {
        isMouseOnProjectImage = false;
        document.removeEventListener("mousemove", makeCursor);
        gsap.to("#cursor", {
          duration: 0,
          display: "none",
        });
      });
      document.addEventListener("scroll", (e) => {
        gsap.to("#cursor", {
          duration: 0,
          display: "none",
        });
      });
    });
  } else {
    console.log("touch device");
  }
};
window.addEventListener("DOMContentLoaded", () => {
  if (window.screen.width >= 1024 - 1024) {
    makeAnimations();
  }
});
