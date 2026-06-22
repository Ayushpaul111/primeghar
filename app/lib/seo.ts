import type { Metadata } from "next";

/** Canonical production origin. Non-www redirects here. */
export const SITE_URL = "https://www.primeghar.com";
export const SITE_NAME = "PrimeGhar";

/** Default share image. Ideal dimensions are 1200×630. */
export const OG_IMAGE = "/primeghar-logo.png";

type PageMetaInput = {
  title: string;
  description: string;
  /** Absolute path beginning with "/", used for the canonical + OG url. */
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Builds a consistent, production-ready Metadata object for a page.
 * `metadataBase` is set once in the root layout, so `path` resolves to an
 * absolute canonical URL automatically.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  ogTitle,
  ogDescription,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [OG_IMAGE],
    },
  };
}
