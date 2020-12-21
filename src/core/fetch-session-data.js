// Fetches current users session data
// Assumes an authenticated session

const SESSION_ENDPOINT = "/api/me";
const NOT_FOUND_ERROR_CODE = "not-found";

const fetchSessionData = async (callback) => {
  try {
    const res = await fetch(SESSION_ENDPOINT, { cache: "no-cache" });
    const contentType = res.headers.get("content-type");

    // isJsonResponse is for environments where hitting the above endpoint
    // would return an html page (eg. Gatsby local dev)
    const isJsonResponse =
      contentType && contentType.includes("application/json");
    const data = isJsonResponse ? await res.json() : {};

    if (data.error === NOT_FOUND_ERROR_CODE || !isJsonResponse) {
      callback({});
    } else {
      callback(data);
    }
  } catch (e) {
    callback({});
    console.warn("Could not fetch session data due to error:", e);
  }
};

export default fetchSessionData;
