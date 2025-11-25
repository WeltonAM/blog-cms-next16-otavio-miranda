import { NextApiRequest, NextApiResponse } from "next";
import { sendErrorResponse } from "../../../../../../backend/utils/sendErrorResponse";
import { postRepository } from "../../../../../../backend/repositories/json-post-repository";

export default async function findPostBySlug(
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

    const slug = req.query.slug as string;

    const post = await postRepository.findBySlug(slug);

    return res.status(200).json({
      status: 200,
      data: post,
      mensagem: "Post found successfully",
    });
  } catch (error) {
    return sendErrorResponse(res, { error });
  }
}
