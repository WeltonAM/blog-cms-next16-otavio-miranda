import { NextApiRequest, NextApiResponse } from "next";
import { sendErrorResponse } from "../../../../backend/utils/sendErrorResponse";
import { postRepository } from "../../../../backend/repositories/json-post-repository";

export default async function findAllPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return sendErrorResponse(res, {
        status: 405,
        mensagem: "Method not allowed",
      });
    }

    const posts = await postRepository.findAll();

    return res.status(200).json({
      status: 200,
      data: posts,
      mensagem: "Posts found successfully",
    });
  } catch (error) {
    console.error("[DEGUB][FIND_ALL_POSTS]: ", error);
    return sendErrorResponse(res, { error });
  }
}
