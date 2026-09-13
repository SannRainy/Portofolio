"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={20} className="text-foreground" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={20} className="text-foreground" />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiX size={20} className="text-foreground" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram size={20} className="text-foreground" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center gap-1">
      {show &&
        BUTTONS.filter((btn) => Boolean(btn.href)).map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"} size={"icon"} aria-label={button.name}>
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
