import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
        <p>
          © {year} {config.author}. All rights reserved.
        </p>
        <span className="hidden sm:inline opacity-40">•</span>
        <p className="text-[11px] opacity-75">
          Template based on{" "}
          <a
            href="https://github.com/Naresh-Khatri/3d-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Naresh Khatri&apos;s 3D Portfolio
          </a>
        </p>
      </div>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Button variant={"link"} asChild key={`l_${index}`}>
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href={href}
              >
                {title}
              </Link>
            </Button>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
