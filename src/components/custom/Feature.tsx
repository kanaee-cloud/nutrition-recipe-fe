import { Card, CardContent } from "@/components/ui/card";
import { Infinity } from "lucide-react";

export default function Feature() {
  const features = [
    {
      id: 1,
      name: "Unlimited Access",
      description:
        "Lorem ipsum dolor sit amet amet belalang kupu kupu siapa makan nasi kalau malam minum susu",
      icon: Infinity,
    },
    {
      id: 2,
      name: "Unlimited Access",
      description:
        "Lorem ipsum dolor sit amet amet belalang kupu kupu siapa makan nasi kalau malam minum susu",
      icon: Infinity,
    },
    {
      id: 3,
      name: "Unlimited Access",
      description:
        "Lorem ipsum dolor sit amet amet belalang kupu kupu siapa makan nasi kalau malam minum susu",
      icon: Infinity,
    },
    {
      id: 4,
      name: "Unlimited Access",
      description:
        "Lorem ipsum dolor sit amet amet belalang kupu kupu siapa makan nasi kalau malam minum susu",
      icon: Infinity,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6">
      {features.map((feature) => (
        <Card
          key={feature.id}
          className="flex flex-row items-center gap-4 p-6 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <div className="p-4 bg-gray-900 rounded-full">
            <feature.icon size={32} className="text-white" />
          </div>
          <CardContent className="flex flex-col">
            <h3 className="text-lg font-semibold">{feature.name}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
