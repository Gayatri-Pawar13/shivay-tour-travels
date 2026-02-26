import "server-only";

import { headers } from "next/headers";

function firstHeaderValue(value: string | null) {
  if (!value) return null;
  return value.split(",")[0]?.trim() ?? null;
}

export async function getBaseUrl() {
  const headerList = await headers();
  const forwardedHost = firstHeaderValue(headerList.get("x-forwarded-host"));
  const host = forwardedHost ?? firstHeaderValue(headerList.get("host"));

  if (!host) return "http://localhost:3000";

  const isLocalhost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]");

  const proto =
    firstHeaderValue(headerList.get("x-forwarded-proto")) ??
    (isLocalhost ? "http" : "https");

  return `${proto}://${host}`;
}
