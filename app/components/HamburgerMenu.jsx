/*import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { pressStart2P, sourceCodePro } from "../styles/fonts";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`menu-container ${isOpen ? "open" : ""} m-auto relative z-60`}
    >
      <button
        ref={buttonRef}
        className="px-4 py-2 shadow m-auto rounded-full border-gray-200"
        onClick={toggleMenu}
      >
        <img
          src="/hamburger.svg"
          alt="Hamburger Icon"
          width="24"
          height="24"
          className="w-full"
        />
      </button>
      <nav
        className={`menu ${
          isOpen ? "open" : ""
        } rounded-3xl px-12 py-4 flex flex-col justify-center gap-x-4 shadow z-20`}
      >
        <p className={`text-center ${pressStart2P.className} mb-4`}>Menu</p>
        <ul className="flex flex-row gap-4 uppercase">
         
          <li className="flex flex-col gap-3">
            <a href="/memory">
              <span>
                <div className=" rounded-xl overflow-hidden h-40 w-32 drop-shadow">
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/images/brain.png"
                      alt="robot reading newspaper"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <p
                  className={`text-m font-bold text-gray-200 ${sourceCodePro.className}`}
                >
                  Memory
                </p>
              </span>
            </a>
          </li>
         
         
        
         
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
*/


/*import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { pressStart2P, sourceCodePro } from "../styles/fonts";

const HamburgerMenu = () => {
  const router = useRouter(); // Import and use the useRouter hook from Next.js

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const goToMemoryPage = () => {
    router.push('/memory'); // Redirect to the memory page
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="menu-container m-auto relative z-60"
    >
      <button
        ref={buttonRef}
        className="px-4 py-2 shadow m-auto rounded-full border-gray-200"
        onClick={goToMemoryPage} // Call the goToMemoryPage function when the button is clicked
      >
        <img
          src="/hamburger.svg"
          alt="Hamburger Icon"
          width="24"
          height="24"
          className="w-full"
        />
      </button>
      <nav
        className="menu rounded-3xl px-12 py-4 flex flex-col justify-center gap-x-4 shadow z-20"
      >
        <p className={`text-center ${pressStart2P.className} mb-4`}>Menu</p>
        <ul className="flex flex-row gap-4 uppercase">
          <li className="flex flex-col gap-3">
            <a href="/memory">
              <span>
                <div className="rounded-xl overflow-hidden h-40 w-32 drop-shadow">
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/images/brain.png"
                      alt="robot reading newspaper"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <p
                  className={`text-m font-bold text-gray-200 ${sourceCodePro.className}`}
                >
                  Memory
                </p>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
*/

/*import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { pressStart2P, sourceCodePro } from "../styles/fonts";

const HamburgerMenu = () => {
  const [isClient, setIsClient] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsClient(true); // Set the client flag to true once the component has mounted
  }, []);

  const handleButtonClick = async () => {
    if (isClient) {
      // Dynamically import useRouter only when needed
      const { useRouter } = await import('next/router');
      const router = useRouter();
      router.push('/memory');
    }
  };

  return (
    <div className="menu-container m-auto relative z-60">
      <button
        ref={buttonRef}
        className="px-4 py-2 shadow m-auto rounded-full border-gray-200"
        onClick={handleButtonClick} // Use onClick directly
      >
        <img
          src="/hamburger.svg"
          alt="Hamburger Icon"
          width="24"
          height="24"
          className="w-full"
        />
      </button>
      <nav
        className="menu rounded-3xl px-12 py-4 flex flex-col justify-center gap-x-4 shadow z-20"
      >
        <p className={`text-center ${pressStart2P.className} mb-4`}>Menu</p>
        <ul className="flex flex-row gap-4 uppercase">
          <li className="flex flex-col gap-3">
            <a href="/memory">
              <span>
                <div className="rounded-xl overflow-hidden h-40 w-32 drop-shadow">
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/images/brain.png"
                      alt="robot reading newspaper"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <p
                  className={`text-m font-bold text-gray-200 ${sourceCodePro.className}`}
                >
                  Memory
                </p>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;*/


import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { pressStart2P, sourceCodePro } from "../styles/fonts";

const HamburgerMenu = () => {
  const [isMounted, setIsMounted] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true once the component mounts
  }, []);

  const handleButtonClick = () => {
    if (isMounted) { // Only use the router if the component is mounted
      const router = useRouter();
      router.push('/memory'); // Navigate to the memory page
    }
  };

  return (
    <div className="menu-container m-auto relative z-60">
      <button
        ref={buttonRef}
        className="px-4 py-2 shadow m-auto rounded-full border-gray-200"
        onClick={handleButtonClick}
      >
        <img
          src="/hamburger.svg"
          alt="Hamburger Icon"
          width="24"
          height="24"
          className="w-full"
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
