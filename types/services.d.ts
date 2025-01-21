export interface IServices {
  id: string;
  name: string;
  image: string;
  description: string;
  passengers: number;
  luggage: number;
  discount: {
    end: string;
    start: string;
    amount: number;
  };
  base_price: string;
  additional_mile_price: string;
  distance_lower_limit: number;
  distance_upper_limit: number;
  is_one_way: boolean;
  rider_fee: string;
  tip: string;
  fuel_surcharge: string;
  hourly_rate_cna: number | null;
  hourly_rate_rn: number | null;
  created_at: string;
  updated_at: string;
}
