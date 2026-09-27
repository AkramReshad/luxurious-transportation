import { headers } from "next/headers";

export async function getSiteOrigin(): Promise<URL> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");

  if (!host) {
    throw new Error("The request host is required to build site URLs.");
  }

  const protocol = requestHeaders.get("x-forwarded-proto") === "http" ? "http" : "https";
  return new URL(`${protocol}://${host}`);
}
