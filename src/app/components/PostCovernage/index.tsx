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
        "w-full h-full overflow-hidden rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx("group-hover:scale-105 transition", imageProps.className)}
      />
    </Link>
  );
}
