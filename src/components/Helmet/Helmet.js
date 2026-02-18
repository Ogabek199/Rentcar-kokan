import React from "react";
import { Helmet as ReactHelmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Ziyo Rent Car";
const DEFAULT_TITLE = "Avtomobil ijarasi xizmatlari";
const DEFAULT_DESCRIPTION =
  "Kokand va Farg'ona vodiysida premium avtomobil ijarasi. Arzon narxlar, qulay xizmat va ishonchli avtopark. Bugunoq bron qiling!";
const DEFAULT_IMAGE = "/og-image.jpg";

const normalizeUrl = (origin, path) => {
  if (!path) return origin;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return `${origin}/${path}`;
  return `${origin}${path}`;
};

const Helmet = ({
  title,
  description,
  keywords,
  canonicalPath,
  image,
  type = "website",
  noindex = false,
  children,
}) => {
  const location = useLocation();
  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "https://rentcar-kokand.uz";

  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${DEFAULT_TITLE} | ${SITE_NAME}`;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = normalizeUrl(origin, canonicalPath || location.pathname);
  const imageUrl = normalizeUrl(origin, image || DEFAULT_IMAGE);

  return (
    <div className="w-100">
      <ReactHelmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      </ReactHelmet>
      {children}
    </div>
  );
};

export default Helmet;
