import Link from "next/link";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

type PostCovernageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCovernageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "h-48 md:h-56 overflow-hidden rounded-xl group transition-all duration-300",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx(
          "w-full h-full group-hover:scale-110 rounded-xl object-cover transition-transform duration-500 ",
          imageProps.className
        )}
      />
    </Link>
  );
}
