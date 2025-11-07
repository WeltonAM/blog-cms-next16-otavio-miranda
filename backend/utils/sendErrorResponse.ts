type ErrorResponseOptions = {
  mensagem?: string;
  status?: number;
  error?: unknown;
};

export function sendErrorResponse(res: any, options: ErrorResponseOptions) {
  const { mensagem, status, error } = options;

  let finalStatus = status ?? 500;
  let finalMessage = mensagem ?? "Internal server error";

  if (error instanceof Error) {
    const msg = error.message.toLowerCase();

    if (msg.includes("not found") || msg.includes("não encontrado")) {
      finalStatus = 404;
      finalMessage = mensagem ?? error.message;
    } else if (msg.includes("unauthorized") || msg.includes("forbidden")) {
      finalStatus = 403;
      finalMessage = mensagem ?? error.message;
    } else if (msg.includes("invalid") || msg.includes("bad request")) {
      finalStatus = 400;
      finalMessage = mensagem ?? error.message;
    } else {
      finalMessage = mensagem ?? error.message;
    }
  }

  if (res.headersSent) return;

  return res.status(finalStatus).json({
    status: finalStatus,
    mensagem: finalMessage,
  });
}
