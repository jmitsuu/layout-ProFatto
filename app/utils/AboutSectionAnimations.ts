import { inView, animate } from "motion";

const companyCardAnimation = () => {
 const companyCard = document.querySelectorAll(".whoAmICard");
 inView(companyCard, () => {
  animate(
   companyCard,
   {
    opacity: [0, 0.2, 0.8, 1],
    transform: ["translateX(100px) ", "none"],
   },
   { duration: 0.5, delay: 0.1 }
  );
 });
};
const ImageAnimation = () => {
 const verticalImage = document.querySelectorAll(".verticalImage");

 inView(verticalImage, () => {
  animate(
   verticalImage,
   {
    opacity: [0, 0.2, 0.8, 1],
    transform: ["translateX(-100px) ", "none"],
   },
   { duration: 0.5, delay: 0.2 }
  );
 });
};
const cardsCompany = () => {
 const cardsCompany = document.querySelectorAll(".cardProject");

 inView(cardsCompany, () => {
  animate(
   cardsCompany,
   {
    opacity: [0, 0.2, 0.8, 1],
    transform: ["translateY(100px) ", "none"],
   },
   { duration: 0.5, delay: 0.2 }
  );
 });
};
export default {
 companyCardAnimation,
 ImageAnimation,
 cardsCompany,
};
