// app/nutrition/page.tsx
"use client";

import { useState } from "react";
import { useNutritionOptions, useFoodRecommendations } from "@/lib/food/hooks";
import { FoodGrid } from "@/components/custom/FoodGrid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

export default function NutritionPage() {
  const [selectedNutrition, setSelectedNutrition] = useState<string>("");
  const { 
    nutritionOptions, 
    loading: loadingOptions, 
    error: optionsError 
  } = useNutritionOptions();
  
  const { 
    recommendedFoods, 
    alternateFoods, 
    loading: loadingFoods, 
    error: foodsError 
  } = useFoodRecommendations(selectedNutrition);

  const handleNutritionSelect = (value: string) => {
    setSelectedNutrition(value);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isLoading = loadingOptions || loadingFoods;
  const error = optionsError || foodsError;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Food Nutrition Recommendations</h1>
        <p className="text-slate-600 mb-4">
          Select a nutrition type from the dropdown below to see recommended foods.
        </p>
        
        <div className="max-w-xs">
          <Select onValueChange={handleNutritionSelect} value={selectedNutrition}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a nutrition" />
            </SelectTrigger>
            <SelectContent>
              {nutritionOptions.map((nutrition, index) => (
                <SelectItem key={index} value={nutrition}>
                  {capitalizeFirstLetter(nutrition)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center space-x-2 text-slate-500">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p>Loading data...</p>
        </div>
      )}
      
      {error && <p className="text-red-500">{error}</p>}

      {selectedNutrition && !isLoading && !error && (
        <Tabs defaultValue="recommended" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">Recommended Foods</TabsTrigger>
            <TabsTrigger value="alternate">Alternate Foods</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommended">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Recommended Foods for {capitalizeFirstLetter(selectedNutrition)}
              </h2>
              <p className="text-slate-600 mb-4">
                These foods are particularly rich in {selectedNutrition} and recommended for daily consumption.
              </p>
            </div>
            <FoodGrid foods={recommendedFoods} emptyMessage={`No recommended foods for ${selectedNutrition} available.`} />
          </TabsContent>
          
          <TabsContent value="alternate">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Alternate Foods for {capitalizeFirstLetter(selectedNutrition)}
              </h2>
              <p className="text-slate-600 mb-4">
                These alternative food options also contain good amounts of {selectedNutrition}.
              </p>
            </div>
            <FoodGrid foods={alternateFoods} emptyMessage={`No alternate foods for ${selectedNutrition} available.`} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}