import { FoodItem } from "@/lib/types/food";
import { FoodCard } from "./FoodCard";

interface FoodGridProps {
  foods: FoodItem[];
  emptyMessage?: string;
}

export function FoodGrid({ foods, emptyMessage = "No foods available" }: FoodGridProps) {
  if (foods.length === 0) {
    return <p className="text-slate-500 italic">{emptyMessage}</p>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foods.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </div>
  );
}