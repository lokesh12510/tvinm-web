import MainBanner from "@/components/banner/MainBanner";
import BlogSection from "@/components/blog/Index";
import NYKSection from "@/components/nykSection/Index";
import UpcomingEvent from "@/components/upcomingEvent/Index";

export default function Home() {
  return (
    <main>
      <MainBanner />  
      
      <UpcomingEvent/>

      <NYKSection/>

      <BlogSection/>
    </main>
  );
}
