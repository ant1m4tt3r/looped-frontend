const API_URL = "https://looped-api.herokuapp.com/participants";

const cache = new Map();

export async function useParticipants(query) {
  const url = `${API_URL}${query ? "?query=" + encodeURIComponent(query) : ""}`;

  if (cache.has(url)) {
    return cache.get(url);
  }

  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });
  const json = response.json();

  cache.set(url, json);

  return json;
}
