import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Service } from "@/lib/_types";

export default function PricingCard({
  name,
  description,
  features,
  price,
  button,
}: Service) {
  return (
    <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-purple-800">
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl">{name}</h1>
        </CardTitle>
        <CardDescription className="text-zinc-200">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-lg font-bold">Features</h1>
        <ul className="list-disc list-inside">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-row">
        <h1 className="text-2xl font-bold">
          {price.type == "contactus"
            ? `From ${price.value}/m`
            : `${price.value}/m`}
        </h1>

        {button.visible == true ? (
          <Button className="ml-auto">{button.label}</Button>
        ) : (
          <></>
        )}
      </CardFooter>
    </Card>
  );
}
