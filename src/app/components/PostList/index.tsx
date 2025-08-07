import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCovernage";
import { PostSummary } from "../PostSummary";

export async function PostList() {
  const posts = await postRepository.findAllPublic();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
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
            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postHeading="h2"
              postLink={postLink}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
