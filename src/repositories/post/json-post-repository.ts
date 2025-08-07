import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-reposytory";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILEPATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

const SIMULATE_DELAY = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_DELAY <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_DELAY));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILEPATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();

    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Id não encontrado");
    return post;
  }
}

export const postRepository = new JsonPostRepository();
