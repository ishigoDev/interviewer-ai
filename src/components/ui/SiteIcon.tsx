import { BotMessageSquare } from "lucide-react";

type SiteIconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  label?: string | null;
  showLabel?: boolean;
};

export default function SiteIcon({
  size = 40,
  color = "#FF9E3DFF",
  className = "",
  label = "Interviewer AI",
  showLabel = false,
}: SiteIconProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BotMessageSquare size={size} color={color} />
      {showLabel && label ? (
        <div className="flex flex-col">
          <div className={`font-semibold text-lg`} style={{ color }}>
            {label}
          </div>
        </div>
      ) : null}
    </div>
  );
}
