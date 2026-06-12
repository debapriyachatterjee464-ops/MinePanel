type ScreenshotFrameProps = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
};

export function ScreenshotFrame({ src, alt, label, priority = false }: ScreenshotFrameProps) {
  return (
    <figure className="screenshot-frame">
      {label ? <figcaption>{label}</figcaption> : null}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} width="1280" height="820" />
    </figure>
  );
}
