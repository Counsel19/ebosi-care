export interface IServices {
  id: string;
  image: string;
  title: string;
  description: string;
  numOfPassangers: number;
  numOfLuggages: number;
  price: number;
  discount: {
    amount: number;
    start: string;
    end: string;
  };
  dropOffTime: string;
  isOneWayFare: boolean;
}
