import { getRuntimeConfig } from "./runtime-config";

export function generatePageTitle(title: string) {
  const appName =
    getRuntimeConfig("VITE_SEO_SITE_NAME") ||
    getRuntimeConfig("VITE_APP_NAME") ||
    getRuntimeConfig("VITE_ORDERLY_BROKER_NAME");

  return `${title} | ${appName}`;
}

export function formatSymbol(symbol: string, format = "base-type") {
  const arr = symbol.split("_");
  const type = arr[0];
  const base = arr[1];
  const quote = arr[2];

  return format
    .replace("type", type)
    .replace("base", base)
    .replace("quote", quote);
}
