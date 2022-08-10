import { reactive } from "vue";
import Economist from "./Economist.jpg";
import Bitcoin from "./Bitcoin Sale.jpg";
import expert from "./Bitcoin Expert.jpg";
import seller from "./Good Seller.jpg";
import Pyramid from "./Pyramid God.jpg";
import Waves from "./Blue Waves.jpg";
import graphicCard from "./graphicCard.jpg";
import holdingCoin from "./holdingCoin.jpg";

export const Sellers = reactive([
  {
    id: 0,
    name: "Jane Cooper",
    img: Bitcoin,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 1,
    name: "Ariene McCoy",
    img: seller,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 2,
    name: "Teresa Webb",
    img: Pyramid,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    img: Waves,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 4,
    name: "Jane Cooper",
    img: expert,
    price: "23,198.11",
    clicked: false
  },
  {
    id: 5,
    name: "Amen Verma",
    img: Economist,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 6,
    name: "Pallavi Roy",
    img: graphicCard,
    price: "23,198.11",
    clicked: false,
  },
  {
    id: 7,
    name: "Rajesh Menon",
    img: holdingCoin,
    price: "23,198.11",
    clicked: false,
  },
]);
