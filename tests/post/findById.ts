import { postRepository } from "@/backend/repositories/json-post-repository";

(async () => {
  const post = await postRepository.findById(
    "99f8add4-7684-4c16-a316-616271db199e"
  );
  console.log(post);
})();
