import MainBanner from "@/components/banner/MainBanner";
import BlogSection from "@/components/blog/Index";
import NYKSection from "@/components/nykSection/Index";
import UpcomingEvent from "@/components/upcomingEvent/Index";
import Head from "next/head";

export default function Home() {
    return (
        <main>
            <Head>
                <title>Home - TVINM</title>
                <meta name="title" content="Thambatty Vivekanandar Illaignar Narpani Mandram"></meta>
                <meta name="description" content="Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports."></meta>
            </Head>
            <MainBanner />

            <UpcomingEvent />

            <NYKSection />

            <BlogSection />
        </main>
    );
}
