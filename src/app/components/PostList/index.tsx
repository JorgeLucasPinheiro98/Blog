import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCovernage";
import { PostHeading } from "../PostHeading";

export async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const postLink = `/post/${post.slug}`
          return (
            <div className="flex flex-col group gap-4" key={post.id}>
              <PostCoverImage
                linkProps={{
                  href: postLink,
                }}
                imageProps={{
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title,
                }}
              />
              <div className="flex flex-col gap-3">
                        <time
                          className="text-slate-600 text-sm/text-2xl/tight"
                          dateTime={post.createdAt}
                        >
                          {post.createdAt}
                        </time>
                        <PostHeading as="h2" url={postLink}>
                        {post.title}
                        </PostHeading>
                        <p>{post.excerpt}</p>
                      </div>
            </div>
          );
        })}
    </div>
  );
}
