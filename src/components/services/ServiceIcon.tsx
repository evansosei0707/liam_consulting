import {
  Users,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/services";

const iconMap: Record<Service["iconName"], LucideIcon> = {
  Users,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Sparkles,
};

export default function ServiceIcon({
  name,
  size = 22,
  className,
}: {
  name: Service["iconName"];
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon size={size} className={className} strokeWidth={2} />;
}
