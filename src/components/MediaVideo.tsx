import { isMediaReady } from "../data/media";

interface MediaVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** clases del placeholder cuando el asset aún no está en Cloudinary */
  placeholderClassName?: string;
  label?: string;
}

/**
 * <video> nativo de Cloudinary (f_auto,q_auto). Si el public ID todavía no
 * está configurado, muestra un placeholder estilizado en su lugar.
 */
const MediaVideo = ({
  src,
  poster,
  className = "",
  placeholderClassName = "bg-gradient-to-br from-[#2a0a14] via-surface to-bg",
  label,
}: MediaVideoProps) => {
  if (!isMediaReady(src)) {
    return (
      <div className={`${className} ${placeholderClassName} flex items-center justify-center`}>
        {label && (
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted/60 select-none">
            {label}
          </span>
        )}
      </div>
    );
  }
  return (
    <video
      src={src}
      poster={poster && isMediaReady(poster) ? poster : undefined}
      className={className}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default MediaVideo;
