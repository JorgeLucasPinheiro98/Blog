import { PostCoverImage } from "../PostCovernage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
    const slug = 'qualquer'
    const postLink = `/post/${slug}`
    return (
        <section className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/sdsd",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-3">
          <time
            className="text-slate-600 text-sm/text-2xl/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>
          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit amet.
          </PostHeading>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          unde ut nostrum soluta a consequuntur voluptate dicta facilis, odit
          nulla libero voluptas aliquam expedita obcaecati! Id illum distinctio
          nulla doloribus.
        </div>
      </section>
    )
}