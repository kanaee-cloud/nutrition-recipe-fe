export interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
  }
  
  export interface FoodItem {
    name: string;
    fat: string;
    "cloric value": string;
    protein: string;
    iron: string;
    calcium: string;
    Thiamine: string;
  }
  
  export type NutritionResponse = ApiResponse<string[]>;
  export type FoodResponse = ApiResponse<FoodItem[]>;