
import { buildQueryString } from "../querystring-builder/mod.ts";
import { HttpRequest } from "../types/mod.ts";

export function formatUrl(request: HttpRequest): string {
  const { port, query } = request;
  let { protocol, path, hostname } = request;
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  if (port) {
    hostname += `:${port}`;
  }
  if (path && path.charAt(0) !== "/") {
    path = `/${path}`;
  }
  let queryString = query ? buildQueryString(query) : "";
  if (queryString && queryString[0] !== "?") {
    queryString = `?${queryString}`;
  }
  return `${protocol}//${hostname}${path}${queryString}`;
}
