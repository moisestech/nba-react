import { useEffect, useState } from "react";

const API = "https://api.ui.dev/hash-history-basketball-league";

export default function useFetch(path, method, body = "") {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`${API}${path}`, {
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ body }) => (body ? JSON.parse(body) : null))
      .then((data) => {
        if (!signal.aborted) {
          setResponse(data);
          setLoading(false);
        }
      })
      .catch((error) => console.warn("Uh-oh.", error));

    return () => abortController.abort();
  }, [path, method, body]);

  return { response, loading };
}
