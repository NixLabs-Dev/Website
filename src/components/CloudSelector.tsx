import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

type Region = {
  id: string;
  name: string;
  flag: string;
  isAvailable: boolean;
  packages: InstancePlan[];
};

type InstancePlan = {
  name: string;
  vCPUCores: number;
  memory: string;
  storage: string;
  bandwidth: string;
  deploymentTime: string;
  price: string;
  soldOut: boolean;
};

interface CloudInstanceSelectorProps {
  regions: Region[];
}

const CloudInstanceSelector: React.FC<CloudInstanceSelectorProps> = ({
  regions,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(
    regions.find((region) => region.isAvailable) || null,
  );

  return (
    <div className="space-y-6 p-6 border-neutral-800 border text-neutral-100 rounded-lg shadow-md">
      {/* Region Selector */}
      <div>
        <h2 className="text-lg font-semibold">Compute Region</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {regions.map((region) => (
            <button
              key={region.id}
              disabled={!region.isAvailable}
              onClick={() => setSelectedRegion(region)}
              className={`flex items-center space-x-2 px-4 py-2 border  rounded-lg ${
                selectedRegion?.id === region.id
                  ? "border-blue-500  text-white"
                  : region.isAvailable
                    ? " text-neutral-300"
                    : "bg-neutral-800 text-neutral-500 cursor-not-allowed border-neutral-800"
              }`}
            >
              <span>{region.flag}</span>
              <span>{region.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Instance Plans */}
      <div>
        <h2 className="text-lg font-semibold">
          Instance Plans for {selectedRegion?.name || "Select a Region"}
        </h2>
        {selectedRegion?.packages.length ? (
          <Table>
            <TableCaption>
              Please see above for a list of services available in{" "}
              {selectedRegion.name}.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>vCPU Cores</TableHead>
                <TableHead>Memory</TableHead>
                <TableHead>Storage</TableHead>
                <TableHead>Bandwidth</TableHead>
                <TableHead>Deployment Time</TableHead>
                <TableHead>Price</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedRegion.packages.map((plan) => {
                if (plan.soldOut) {
                  return (
                    <TableRow key={plan.name}>
                      <TableCell>{plan.name}</TableCell>
                      <TableCell>{plan.vCPUCores}</TableCell>
                      <TableCell>{plan.memory}</TableCell>
                      <TableCell>{plan.storage}</TableCell>
                      <TableCell>{plan.bandwidth}</TableCell>
                      <TableCell>{plan.deploymentTime}</TableCell>
                      <TableCell>{plan.price}</TableCell>
                      <TableCell>
                        <p className="text-red-500 font-semibold inline-flex items-center">
                          Sold Out
                        </p>
                      </TableCell>
                    </TableRow>
                  );
                } else {
                  return (
                    <TableRow key={plan.name}>
                      <TableCell>{plan.name}</TableCell>
                      <TableCell>{plan.vCPUCores}</TableCell>
                      <TableCell>{plan.memory}</TableCell>
                      <TableCell>{plan.storage}</TableCell>
                      <TableCell>{plan.bandwidth}</TableCell>
                      <TableCell>{plan.deploymentTime}</TableCell>
                      <TableCell>{plan.price}</TableCell>
                      <TableCell>
                        <a
                          href="https://panel.nixlabs.dev"
                          className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer inline-flex items-center"
                        >
                          Deploy Now
                          <ArrowRight className="ml-1 inline-block" />
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        ) : (
          <p className="mt-4 text-neutral-400">
            No plans available for this region.
          </p>
        )}
      </div>
    </div>
  );
};

export default CloudInstanceSelector;
