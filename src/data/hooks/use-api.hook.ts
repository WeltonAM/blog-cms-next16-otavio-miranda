import { useCallback } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  // const {token} = useSession();

  const httpGet = useCallback(
    async function (path: string) {
      const uri = path.startsWith("/") ? path : `/${path}`;
      const fullUrl = `${BASE_URL}${uri}`;

      const response = await fetch(fullUrl, {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });

      return response.json();
    },
    [
      // token
    ]
  );

  const httpPost = useCallback(
    async function (path: string, body: any) {
      const uri = path.startsWith("/") ? path : `/${path}`;
      const fullUrl = `${BASE_URL}${uri}`;

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      return response.json();
    },
    [
      // token
    ]
  );

  const httpDelete = useCallback(
    async function (path: string) {
      const uri = path.startsWith("/") ? path : `/${path}`;
      const fullUrl = `${BASE_URL}${uri}`;

      const response = await fetch(fullUrl, {
        method: "DELETE",
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });

      return response.json();
    },
    [
      // token
    ]
  );

  return {
    httpGet,
    httpPost,
    httpDelete,
  };
}
