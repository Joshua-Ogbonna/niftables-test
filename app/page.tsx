import CreonPass from "@/components/HomeComponents/CreonPass/CreonPass";
import Hero from "@/components/HomeComponents/Hero/Hero";
import Pads from "@/components/HomeComponents/Pads/Pads";
import Profile from "@/components/HomeComponents/Profit/Profile";
import Prospects from "@/components/HomeComponents/Prospects/Prospects";
import Vision from "@/components/Shared/Vision/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <CreonPass />
      <Profile />
      <Vision />
      <Pads />
      <Prospects />
    </>
  );
}
