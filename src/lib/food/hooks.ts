// hooks/nutrition.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FoodItem } from "../types/food";
import { 
  getNutritionOptions, 
  getRecommendedFoods, 
  getAlternateFoods 
} from "./api";

export function useNutritionOptions() {
  const [nutritionOptions, setNutritionOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNutritionOptions = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getNutritionOptions();
      if (response.status === "success") {
        setNutritionOptions(response.data);
      } else {
        setError("Failed to load nutrition options");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch nutrition options");
      } else {
        setError("Something went wrong");
      }
      console.error("Error fetching nutrition options:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNutritionOptions();
  }, [fetchNutritionOptions]);

  return {
    nutritionOptions,
    loading,
    error,
    refetch: fetchNutritionOptions
  };
}

export function useFoodRecommendations(selectedNutrition: string) {
  const [recommendedFoods, setRecommendedFoods] = useState<FoodItem[]>([]);
  const [alternateFoods, setAlternateFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFoods = useCallback(async () => {
    if (!selectedNutrition) return;
    
    setLoading(true);
    setError(null);

    try {
      const [recommendedResponse, alternateResponse] = await Promise.all([
        getRecommendedFoods(),
        getAlternateFoods()
      ]);

      if (recommendedResponse.status === "success") {
        setRecommendedFoods(recommendedResponse.data);
      }

      if (alternateResponse.status === "success") {
        setAlternateFoods(alternateResponse.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch food recommendations");
      } else {
        setError("Something went wrong");
      }
      console.error("Error fetching food recommendations:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedNutrition]);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return {
    recommendedFoods,
    alternateFoods,
    loading,
    error,
    refetch: fetchFoods
  };
}