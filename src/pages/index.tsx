import MainBanner from "@/components/banner/MainBanner";
import Button from "@/components/button/Button";
import Container from "@/components/ui/Container";
import { SparkleIcon } from "@/icons/Index";
import Image from "next/image";
import { NextIcon } from "../icons/Index";
import BlogCard from "@/components/blog/BlogCard";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Container className="bg-teal-600 pb-[100px]">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-7 text-2xl my-[30px] md:my-0">
            <div className="mb-2 text-yellow-500">
              <SparkleIcon />
            </div>
            <h1 className="underline text-yellow-500 mb-4 text-4xl">
              Upcoming event
            </h1>
            <p className="text-white text-[1.3rem] leading-7 mb-10">
              <span className="font-bold">Talent Chase 2</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolor adipisci
              itaque expedita dolorum quam pariatur quia odio earum ad sint
              quaerat libero dolores unde quasi fugit explicabo fuga quod, ullam
              officia voluptatibus eaque quae at nobis praesentium. Iure officia
              rerum eveniet ad est dignissimos dolores, provident vitae,
              assumenda, consectetur doloribus omnis expedita? Optio voluptatem
              aut aliquam odit ducimus necessitatibus aliquid architecto. Vitae
              ea quaerat ex earum porro eius sequi pariatur, est ullam odio,
              quisquam corporis autem amet architecto voluptatem id mollitia.
            </p>

            <h6 className="text-white px-4 py-1 border-b-4 w-fit mb-4">
              Event List
            </h6>
            <div className="flex flex-col md:flex-row md:items-center justify-start mb-[40px]">
              <div className="hidden md:block">
                <NextIcon />
              </div>

              <p className="mx-3 text-white">Drawing</p>
              <p className="mx-3 text-white">Dancing</p>
              <p className="mx-3 text-white">Speech</p>
              <p className="mx-3 text-white">Hand Writing</p>
            </div>

            <Button className="rounded-[10px] bg-yellow-500 text-black hover:bg-yellow-600 shadow-sm shadow-yellow-300">
              Register Now
            </Button>
          </div>
          <div className="col-span-12 md:col-span-5 justify-self-end">
            <div className="w-[100%] relative h-[100%]">
              <Image
                src={"/images/events.png"}
                alt="upcoming event"
                width={600}
                height={300}
                style={{ objectFit: "contain", position: "relative" }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Events */}

      <Container className="py-[60px]">
        <div className="flex flex-col w-full items-center justify-center mb-8">
          <h5 className="font-bold text-3xl mb-3 text-teal-700">EVENTS</h5>
          <p className="text-lg">Take A Look At Our Latest EVENTS</p>
        </div>

        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center">
            <p className="mb-3">Take A Look At Our EVENTS</p>
            <Button className="bg-white text-teal-600 hover:bg-white border border-teal-700 hover:text-teal-600">
              View All
            </Button>
          </div>
        </div>
      </Container>

      {/* Events */}
    </main>
  );
}
