import { FoodItem } from "@/lib/types/food";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="border-b">
        <CardTitle className="text-lg">{food.name}</CardTitle>
        <CardDescription>Nutritional Information</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Calories:</span>
            <span>{food["cloric value"]}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Protein:</span>
            <span>{food.protein}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Fat:</span>
            <span>{food.fat}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Iron:</span>
            <span>{food.iron}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Calcium:</span>
            <span>{food.calcium}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-slate-700">Thiamine:</span>
            <span>{food.Thiamine}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}