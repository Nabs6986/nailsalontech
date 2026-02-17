import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = true,
}: StarRatingProps) {
  const sizeClass = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }[size];

  const textClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: maxRating }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <Star
              key={i}
              className={`${sizeClass} ${
                filled
                  ? "fill-amber-400 text-amber-400"
                  : partial
                  ? "fill-amber-200 text-amber-400"
                  : "fill-slate-100 text-slate-300"
              }`}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className={`${textClass} font-semibold text-slate-700`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
