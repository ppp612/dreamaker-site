"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  aspect?: string;
  label?: string;
  sublabel?: string;
  className?: string;
  rounded?: string;
}

export default function ImagePlaceholder({
  aspect = "aspect-[4/3]",
  label = "Image",
  sublabel,
  className = "",
  rounded = "rounded-2xl",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden ${rounded} border border-dashed border-border bg-gradient-to-br from-muted via-white to-muted ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(201,169,110,0.06),transparent_70%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-white/80 shadow-sm">
          <ImageIcon size={20} className="text-gray-300" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-300">
            {label}
          </p>
          {sublabel && (
            <p className="mt-1 text-[10px] text-gray-300">{sublabel}</p>
          )}
        </div>
      </div>
    </div>
  );
}
