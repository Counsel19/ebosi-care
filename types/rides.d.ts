export interface IRide {
  pickup_location: string;
  dropoff_location: string;
  schedule_type: string;
  ride_date: string;
  ride_time: string;
  apartment: string;
  service_id: string;
  is_self_booking: boolean;
  passengers: number;
  luggage: number;
  notes?: string;
  user_details: {
    name: string;
    email: string;
    mobile_number: string;
  };
}
