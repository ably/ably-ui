// isJsonResponse is useful for environments where hitting an endpoint
// would return an html page (eg. Gatsby local dev)
export const isJsonResponse = (contentType) =>
  contentType && contentType.includes("application/json");
