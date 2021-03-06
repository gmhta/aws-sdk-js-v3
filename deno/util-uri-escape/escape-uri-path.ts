
import { escapeUri } from "./escape-uri.ts";
export function escapeUriPath(uri: string): string {
  const parts: string[] = [];
  for (const sub of uri.split("/")) {
    parts.push(escapeUri(sub));
  }
  return parts.join("/");
}
