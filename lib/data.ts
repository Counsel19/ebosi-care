const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
yesterday.setDate(today.getDate() - 1).toString()
tomorrow.setDate(today.getDate() + 1).toString()

const now = new Date();
const threePM = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  15,
  0,
  0
);

export const allServices = [
  {
    id: "1",
    image: "/images/wheelchair_into_car.png",
    title: "Wheelchair",
    description:
      "ADA Wheelchair accessible vehicles with experienced professional drivers on demand 24/7",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
      start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
  {
    id: "2",
    image: "/images/stretcher.png",
    title: "Stretcher",
    description:
      "Our stretcher vans are ADA Compliant with experienced and professional drivers",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
       start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
  {
    id: "3",
    image: "/images/blue-sedan.png",
    title: "Sedan Ambulatory",
    description:
      "We have modern vehicles equipped with safety kits and experienced professional NEMT drivers to transport patient to their destination 24/7",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
       start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
  {
    id: "4",
    image: "/images/ambulance.png",
    title: "Medical Courier",
    description:
      "Dedicated NEMT courier services with reliable and professional couriers ready to meet medical delivery needs 24/7",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
       start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
  {
    id: "5",
    image: "/images/courier_transit.png",
    title: "Regular Delivery",
    description:
      "Our regular delivery option is available if you need to make a delivery, whether it be a single or bulk item(grocery etc.), we can meet the need 24/7",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
       start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
  {
    id: "6",
    image: "/images/book_sitter.png",
    title: "Book a sitter",
    description:
      "Book a qualified CNA/RN to fill support a patient need on demand. CNA's/RN's are available round the clock 24/7 to fill various shift Scheduled booking is required terms and conditions apply",
    numOfPassangers: 1,
    numOfLuggages: 1,
    price: 62.3,
    discount: {
      amount: 6.8,
       start: yesterday.toString(),
      end: tomorrow.toString(),
    },
    dropOffTime: threePM.toString(),
    isOneWayFare: true,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "John Doe",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "2",
    name: "John Doe",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "3",
    name: "John Doe",
    subname: "REGULAR CLIENT",
    image: "/images/avatar_.png",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
