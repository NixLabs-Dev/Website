import { ServiceOffering } from "@/lib/_types";
import PricingCard from "./PricingCard";

export default function ProductOffering({
  service,
}: {
  service: ServiceOffering;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold">{service.name}</h1>
      <h1 className="text-md lg:text-lg text-center w-3/4 mb-12">
        {service.description}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
