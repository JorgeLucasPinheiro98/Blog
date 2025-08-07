import { SpinLoader } from "./components/SpinLoader";
import { Suspense } from "react";
import { PostList } from "./components/PostList";
import { PostFeatured } from "./components/PostFeatured";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
