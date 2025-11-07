import { resolve } from "path";
import { readFile } from "fs/promises";
import { PostRepository } from "@/core/post/provider/post-provider";
import { PostModel } from "@/core/post/models/post-model";

const ROOT_DIR = process.cwd();
const POSTS_FILE = resolve(ROOT_DIR, "backend", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const posts = await readFile(POSTS_FILE, "utf-8");
    return JSON.parse(posts).posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();

    if (!posts.find((post) => post.id === id)) {
      throw new Error(`Post with id ${id} not found`);
    }

    return posts.find((post) => post.id === id) as PostModel;
  }
}

export const postRepository = new JsonPostRepository();
