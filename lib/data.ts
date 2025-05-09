const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
yesterday.setDate(today.getDate() - 1).toString();
tomorrow.setDate(today.getDate() + 1).toString();

// const now = new Date();
// const threePM = new Date(
//   now.getFullYear(),
//   now.getMonth(),
//   now.getDate(),
//   15,
//   0,
//   0
// );

export const allServices = [
  {
    id: "1",
    image: "/images/wheelchair_into_car.png",
    name: "Wheelchair",
    description:
      "ADA Wheelchair accessible vehicles with experienced professional drivers on demand 24/7",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 0,
    hourly_rate_rn: 0,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
  {
    id: "2",
    image: "/images/stretcher.png",
    name: "Stretcher Van",
    description:
      "Our stretcher vans are ADA Compliant with experienced and professional drivers",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 0,
    hourly_rate_rn: 0,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
  {
    id: "3",
    image: "/images/blue-sedan.png",
    name: "Sedan Ambulatory",
    description:
      "We have modern vehicles equipped with safety kits and experienced professional NEMT drivers to transport patient to their destination 24/7",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 0,
    hourly_rate_rn: 0,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
  {
    id: "4",
    image: "/images/ambulance.png",
    name: "Medical Courier",
    description:
      "Dedicated NEMT courier services with reliable and professional couriers ready to meet medical delivery needs 24/7",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 0,
    hourly_rate_rn: 0,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
  {
    id: "5",
    image: "/images/courier_transit.png",
    name: "Delivery",
    description:
      "Our regular delivery option is available if you need to make a delivery, whether it be a single or bulk item(grocery etc.), we can meet the need 24/7",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 0,
    hourly_rate_rn: 0,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
  {
    id: "6",
    image: "/images/book_sitter.png",
    name: "Book Qualified Patient Support (CNA/RN)",
    description:
      "Book a qualified CNA/RN to fill support a patient need on demand. CNA's/RN's are available round the clock 24/7 to fill various shift Scheduled booking is required terms and conditions apply",
    passengers: 1,
    luggage: 1,
    base_price: "62.3",
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },

    is_one_way: true,
    additional_mile_price: "4",
    distance_lower_limit: 0,
    distance_upper_limit: 5,
    rider_fee: "7",
    tip: "5",
    fuel_surcharge: "9",
    hourly_rate_cna: 20,
    hourly_rate_rn: 30,
    created_at: today.toString(),
    updated_at: today.toString(),
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Emily",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: {
      en: "Ebosi Care has been a game-changer for my health routine. Easy to book a ride/service, Their drivers are always on time, courteous, and genuinely compassionate. I feel safe and valued every time I ride with them",
      es: "Ebosi Care ha sido un cambio radical en mi rutina de salud. Es fácil reservar un viaje o servicio. Sus conductores siempre son puntuales, corteses y genuinamente compasivos. Me siento seguro y valorado cada vez que viajo con ellos.",
    },
  },
  {
    id: "2",
    name: "James ",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: {
      en: "I never imagined a transportation service could feel so personal. Ebosi Care's team goes the extra mile. Punctual, professional, and caring. They truly understand the importance of my medical appointments",
      es: "Nunca imaginé que un servicio de transporte pudiera ser tan personal. El equipo de Ebosi Care se esfuerza al máximo. Son puntuales, profesionales y atentos. Realmente comprenden la importancia de mis citas médicas.",
    },
  },
  {
    id: "3",
    name: "Sophie ",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: {
      en: "When I needed reliable, stress-free transport for my treatments, Ebosi Care delivered. Their efficient booking, friendly drivers, and consistent service have made a world of difference in my healthcare journey",
      es: "Cuando necesité transporte confiable y sin estrés para mis tratamientos, Ebosi Care me lo proporcionó. Su eficiente sistema de reservas, la amabilidad de sus conductores y su servicio constante han marcado una gran diferencia en mi experiencia con la atención médica.",
    },
  },
];

export const testRide = {
  pickup_location: "123 Main Street, Downtown",
  dropoff_location: "456 Elm Street, Uptown",
  schedule_type: "scheduled",
  ride_date: "2025-02-01",
  ride_time: "14:30",
  apartment: "Apartment 5B",
  service_id: "1",
  amount: 2000,
  is_self_booking: true,
  passengers: 1,
  luggage: 2,
  user_details: {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile_number: "+1234567890",
  },
};
