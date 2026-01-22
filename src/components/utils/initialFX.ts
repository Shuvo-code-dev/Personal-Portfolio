import gsap from "gsap";

// SplitText বাদ দেওয়া হয়েছে কারণ এটি প্রিমিয়াম প্লাগিন

export function initialFX() {
  document.body.style.overflowY = "auto";
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }

  // বডি কালার চেঞ্জ
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // হেডিং অ্যানিমেশন (SplitText এর বদলে সাধারণ অ্যানিমেশন)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  // সেকেন্ডারি টেক্সট অ্যানিমেশন
  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // লুপিং টেক্সট (সিম্পল ভার্সন)
  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

// লুপ টেক্সট ফাংশন (SplitText ছাড়া)
function LoopText(selectorOne: string, selectorTwo: string) {
  const el1 = document.querySelector(selectorOne);
  const el2 = document.querySelector(selectorTwo);

  if (!el1 || !el2) return;

  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  // প্রাথমিক অবস্থা সেট করা
  gsap.set(el2, { opacity: 0, y: 50 });

  tl.to(el1, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      delay: delay,
    }, 0)
    .to(el2, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      delay: delay,
    }, 0)
    .to(el2, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      delay: delay, // Wait before hiding second text
    }, ">")
    .to(el1, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
    }, "<");
}