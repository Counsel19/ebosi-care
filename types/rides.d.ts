export interface IRide {
  pickup_location: string;
  dropoff_location: string;
  schedule_type: string;
  ride_date: string;
  ride_time: string;
  apartment: string;
  service_id: string;
  is_self_booking: boolean;
  amount: number;
  passengers: number;
  luggage: number;
  notes?: string;
  user_details: {
    name: string;
    email: string;
    mobile_number: string;
  };
}

export interface IRideRetrieved  {
  id: number;
  reservation_number: string;
  pickup_location: string;
  dropoff_location: string;
  schedule_type: string;
  ride_date: string;
  ride_time: string;
  status: string;
  service_id: number;
  passengers: number;
  luggage: number;
  is_self_booking?: boolean;
  notes?: string;
}

export interface ISingleRide {
  ride: IRideRetrieved ;
  user: {
    first_name: string;
    last_name: string;
  };
}
