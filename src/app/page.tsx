import { SpinLoader } from "./components/SpinLoader";
import { Suspense } from "react";
import { PostList } from "./components/PostList";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PostFeatured } from "./components/PostFeatured";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <PostFeatured/>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">Footer</footer>
    </Container>
  );
}
