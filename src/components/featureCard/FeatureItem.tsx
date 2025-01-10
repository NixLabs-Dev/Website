import { LucideProps } from "lucide-react";
import React from "react";

// Define props for the FeatureCard component
interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>; // Icon component with an optional size prop
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="border-2 border-neutral-600 p-2 rounded-xl">
        <Icon size={48} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
