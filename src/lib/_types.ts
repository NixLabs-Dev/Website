export type Service = {
  name: string;
  description: string;
  features: string[];
  price: {
    type: "contactus" | "buynow";
    value: number;
    period: "m" | "d" | "y" | "q";
  };
  button: {
    action: string;
    label?: string;
    visible?: boolean;
  };
};

export type ServiceOffering = {
  name: string;
  description: string;
  services: Service[];
};
