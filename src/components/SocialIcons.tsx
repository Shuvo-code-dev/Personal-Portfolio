import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { SiFiverr, SiUpwork } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      // পজিশন ক্যালকুলেশন ভেরিয়েবল
      let rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // ফিক্স: এখানে হার্ডকোড নাম্বারের বদলে rect.width ব্যবহার করা হয়েছে
        if (x < rect.width && x > 0 && y < rect.height && y > 0) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      // উইন্ডো রিসাইজ বা স্ক্রল হলে পজিশন আবার মাপা হবে
      const onResize = () => {
        rect = elem.getBoundingClientRect();
      };

      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);
      window.addEventListener("scroll", onResize);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onResize);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {/* Facebook */}
        <span>
          <a href="https://www.facebook.com/S.I.Shuvo2011/" target="_blank">
            <FaFacebook />
          </a>
        </span>

        {/* Instagram */}
        <span>
          <a href="https://www.instagram.com/s.i.shuvo_/" target="_blank">
            <FaInstagram />
          </a>
        </span>

        {/* TikTok */}
        <span>
          <a href="https://www.tiktok.com/" target="_blank">
            <FaTiktok />
          </a>
        </span>

        {/* YouTube */}
        <span>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube />
          </a>
        </span>

        {/* GitHub */}
        <span>
          <a href="https://github.com/Shuvo-code-dev/" target="_blank">
            <FaGithub />
          </a>
        </span>

        {/* Upwork */}
        <span>
          <a href="https://www.upwork.com/freelancers/sulaiman/" target="_blank">
            <SiUpwork />
          </a>
        </span>
        {/* Fiverr */}
        <span>
          <a href="https://www.fiverr.com/sellers/i_shvuo_i/" target="_blank">
            <SiFiverr />
          </a>
        </span>
      </div>

      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;