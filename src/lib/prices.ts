import { ServiceOffering } from "./_types";

export const ManagedServices: ServiceOffering = {
  name: "Managed Offerings",
  description: "Fully managed services so you can stop worrying and get going.",
  services: [
    {
      name: "Managed O365",
      description:
        "Fully managed O365 so good you'd think were microsoft support",
      features: [
        "Tennant setup",
        "Support and Maintenance",
        "ADDS, AzureAD, and Intune",
      ],
      price: {
        type: "contactus",
        value: 60,
        period: "m",
      },
      button: {
        visible: false,
        label: "Contact Us",
        action: "",
      },
    },
    {
      name: "Managed Websites",
      description: "Your presence online, like slicing bread",
      features: [
        "Domain Configuration",
        "Highly-available web servers",
        "Multi-gigabit network",
      ],
      price: {
        type: "contactus",
        value: 40,
        period: "m",
      },
      button: {
        visible: false,
        label: "Contact Us",
        action: "",
      },
    },
    {
      name: "Backup / Revocery",
      description:
        "Had a failure? Lost some data? We'll make it like it never even happened.",
      features: [
        "Offsite backup storage",
        "Instant availability",
        "Monitored and Secured",
      ],
      price: {
        type: "contactus",
        value: 55,
        period: "m",
      },
      button: {
        visible: false,
        label: "Contact Us",
        action: "",
      },
    },
  ],
};

export const VirtualComputeOffering: ServiceOffering = {
  name: "Virtual Compute",
  description:
    "Highly-available cloud compute that can be scaled at a moments notice. Pay for what you use, no more, no less.",
  services: [
    {
      name: "nc.small",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["2 vCPU Cores", "2GB DDR3 RAM", "16GB SSD", "3tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 8,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "nc.medium",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["4 vCPU Cores", "4  GB DDR3 RAM", "32GB SSD", "6tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 16,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "nc.large",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["6 vCPU Cores", "8GB DDR3 RAM", "64GB SSD", "9tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 32,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
  ],
};

export const DedicatedOffering: ServiceOffering = {
  name: "Dedicated Compute",
  description:
    "Bulky servers with dedicated resources ready to meet your high-performance needs.",
  services: [
    {
      name: "nc.small",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["2 vCPU Cores", "2GB DDR3 RAM", "16GB SSD", "3tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 8,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "nc.medium",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["4 vCPU Cores", "4  GB DDR3 RAM", "32GB SSD", "6tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 16,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "nc.large",
      description:
        "A tiny server for small websites, or single, seperated applications",
      features: ["6 vCPU Cores", "8GB DDR3 RAM", "64GB SSD", "9tb Bandwidrh"],
      price: {
        type: "buynow",
        value: 32,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
  ],
};

export const ColocationOffering: ServiceOffering = {
  name: "Colocation Services",
  description:
    "Need more than the above? Contact us, weither you are a startup needing GPUs for AI or a fortune 500 company.",
  services: [
    {
      name: "1/4 Rack Colocation",
      description:
        "1/4 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
      features: [
        "10u Rack Space",
        "5a of 208v (A+B)",
        "N+1 Facility",
        "20tb Bandwidth",
      ],
      price: {
        type: "buynow",
        value: 450,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "1/2 Rack Colocation",
      description:
        "1/2 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
      features: [
        "20u Rack Space",
        "10a of 208v (A+B)",
        "N+1 Facility",
        "40tb Bandwidth",
      ],
      price: {
        type: "buynow",
        value: 750,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
    {
      name: "1/2 Rack Colocation",
      description:
        "1/2 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
      features: [
        "40u Rack Space",
        "20a of 208v (A+B)",
        "N+1 Facility",
        "40tb Bandwidth",
      ],
      price: {
        type: "buynow",
        value: 1500,
        period: "m",
      },
      button: {
        visible: true,
        label: "Buy Now",
        action: "",
      },
    },
  ],
};
