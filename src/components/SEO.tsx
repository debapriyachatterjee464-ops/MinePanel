import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
};

export function SEO({ title, description, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | MinePanel Local`;
    setMeta("description", description);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("twitter:card", "summary_large_image");

    const id = "minepanel-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => document.getElementById(id)?.remove();
  }, [title, description, jsonLd]);
  return null;
}

function setMeta(name: string, content: string) {
  let node = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.name = name;
    document.head.appendChild(node);
  }
  node.content = content;
}

function setProperty(property: string, content: string) {
  let node = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("property", property);
    document.head.appendChild(node);
  }
  node.content = content;
}
