import { postRepository } from "@/backend/repositories/json-post-repository";

(async () => {
  const posts = await postRepository.findAll();
  console.log(posts);
})();
