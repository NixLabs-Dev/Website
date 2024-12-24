import { ServiceOffering } from "@/lib/_types";
import PricingCard from "./PricingCard";

export default function ProductOffering({
  service,
}: {
  service: ServiceOffering;
}) {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-12">
      {/* Service Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        {service.name}
      </h1>
      <h2 className="text-base sm:text-lg lg:text-xl text-center text-zinc-300 w-full sm:w-3/4 mb-12">
        {service.description}
      </h2>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
        {service.services.map((item) => (
          <PricingCard
            key={item.name}
            name={item.name}
            description={item.description}
            features={item.features}
            price={item.price}
            button={item.button}
          />
        ))}
      </div>
    </div>
  );
}
