import Header from "~/components/Header/Header";
import type { Route } from "./+types/home";
import Hero from "~/components/hero/Hero";
import PreviewAbout from "~/components/previewAbout/previewAbout";
import Advantages from "~/components/advantages/Advantages";
import NewsLetter from "~/components/newsletter/NewsLetter";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "ProFatto" },
  { name: "description", content: "Landing page description" },
 ];
}

export default function Home() {
 return (
  <section>
   <Header />
   <Hero />
   <PreviewAbout />
   <Advantages />
   <NewsLetter />
  </section>
 );
}
