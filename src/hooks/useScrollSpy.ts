import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useScrollSpy = (sectionIds: string[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let isManualScroll = false; // Flag to check if user clicked a link

    const handleHashChange = () => {
      isManualScroll = true;
      setTimeout(() => {
        isManualScroll = false; // Reset after transition
      }, 1000);
    };

    const handleScroll = () => {
      if (isManualScroll) return; // Ignore automatic updates when clicking links

      let newActiveSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
            newActiveSection = id;
            break;
          }
        }
      }

      if (newActiveSection && `#${newActiveSection}` !== location.hash) {
        setActiveSection(newActiveSection);
        navigate(`#${newActiveSection}`, { replace: true }); // Updates without adding to history
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location.hash, navigate, sectionIds]);

  return activeSection;
};

export default useScrollSpy;
