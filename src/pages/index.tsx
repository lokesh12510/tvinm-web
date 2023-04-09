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
            </Head>
            <MainBanner />

            <UpcomingEvent />

            <NYKSection />

            <BlogSection />
        </main>
    );
}
