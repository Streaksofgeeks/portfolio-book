import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover";
import coverImg from "../assets/cover.png"
import FirstPage from "./pages/Hero/FirstPage";
import SecondPage from "./pages/Hero/SecondPage";
import Services from "./pages/Services";
import BackCover from "./pages/BackCover";

import fruits from "../assets/projects/fruits-basket.png"
import nike from "../assets/projects/nike.jpg"
import headphone from "../assets/projects/headphone-market.png"
import porsche from "../assets/projects/porsche.jpg"
import Project from "./pages/Project";
import Internships from "./pages/Internships";



const ProjectData = [
  {
    name: "Fruits Basket",
    description: "Fruit Store based on react framer motion and tailwind css completely responsive",
    image: fruits,
    previewLink: "https://fruits-baskets.netlify.app/",
    border: "border-slate-300"
  },
  {
    name: "Porsche Landing Page",
    description: "Porsche Landing Page based on react framer motion and tailwind css completely responsive",
    image: porsche,
    previewLink: "https://porschepage.netlify.app/",
  },

]
const ProjectData1 = [
  {
    name: "Nike-Landing Page",
    description: "Nike Landing Page based on react framer motion and tailwind css completely responsive",
    image: nike,
    previewLink: "https://nikee-landingpage.netlify.app/",
  },
  {
    name: "HeadPhone Market",
    description: "Headphone Store based on react framer motion and tailwind css completely responsive",
    image: headphone,
    previewLink: "https://headphone-market.netlify.app/",
  },

]

function MyBook(props) {
  return (

    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page >
      <Page number={2}>
        <FirstPage />
      </Page >
      <Page number={3}>
        <SecondPage />
      </Page >
      <Page number={4}>
        <Services />
      </Page >
      <Page number={5}>
        <Internships />
      </Page >
      <Page number={6}>
        <Project ProjectData={ProjectData} />
      </Page >
      <Page number={7}>
        <Project ProjectData={ProjectData1} />
      </Page >


      <Page number={8}>
        <BackCover />
      </Page >





    </HTMLFlipBook >
  );
}



export default MyBook