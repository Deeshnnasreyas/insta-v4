import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://logo-logos.com/2016/10/Instagram_logo_wordmark_logotype.png"
            layout="fill"
            className="object-contain"
          /></div>
          <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
        />
        </div>
      </div>
    </div>
  );
}

export default Header;
