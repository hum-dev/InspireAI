import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  fallbackSrc?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  fallbackSrc = "/placeholder.svg",
  ...props
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);

  // Calculate aspect ratio for placeholder
  const aspectRatio = width && height ? (height / width) * 100 : 75;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: width && height ? width / height : undefined }}
    >
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onError={() => setError(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          error ? "opacity-50" : "opacity-100"
        )}
        {...props}
      />

      {/* Blur loading effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10 
                   animate-pulse"
        style={{
          aspectRatio: `${width}/${height}`,
          visibility: error ? "hidden" : "visible",
        }}
      />
    </div>
  );
};
