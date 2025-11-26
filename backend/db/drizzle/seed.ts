import { drizzleDb } from ".";
import { postRepository } from "../../repositories/json-post-repository";
import { postsTable } from "./schemas";

(async () => {
  const posts = await postRepository.findAll();
  try {
    await drizzleDb.insert(postsTable).values(posts);
    console.log("[🌱][SEED]: Posts seeded successfully");
  } catch (error) {
    console.log(error);
  }
})();
