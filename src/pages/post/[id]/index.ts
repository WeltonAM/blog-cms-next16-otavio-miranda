import { NextApiRequest, NextApiResponse } from "next";
import { sendErrorResponse } from "../../../../backend/utils/sendErrorResponse";
import { postRepository } from "../../../../backend/repositories/json-post-repository";

export default async function findPostById(
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

    const post = await postRepository.findById(req.query.id as string);

    return res.status(200).json({
      status: 200,
      data: post,
      mensagem: "Post found successfully",
    });
  } catch (error) {
    return sendErrorResponse(res, { error });
  }
}
