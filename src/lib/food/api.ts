import API from "../api/base";
import { NutritionResponse, FoodResponse } from "../types/food";

export const getNutritionOptions = async () => {
  const response = await API.get<NutritionResponse>("/food/nutrition");
  return response.data;
};

export const getRecommendedFoods = async () => {
  const response = await API.get<FoodResponse>("/food/recommended");
  return response.data;
};

export const getAlternateFoods = async () => {
  const response = await API.get<FoodResponse>("/food/alternate");
  return response.data;
};