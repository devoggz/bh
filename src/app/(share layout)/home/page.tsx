import Leaderboard from "@/components/Leaderboard";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getUserPosts } from "../../../../actions/getUserPosts";
import ContentCard from "@/components/ContentCard";
import Hero from "@/components/Hero";

export default async function Home() {
  const userposts = await getUserPosts();

  const list = [
    {
      title: "Story Za Pesa",
      img: "/images/bike.jpg",
      price: "$5.50",
    },
    {
      title: "Bike yangu ",
      img: "/images/mama.webp",
      price: "$3.00",
    },
    {
      title: "Story Za Pesa",
      img: "/images/bike.jpg",
      price: "$5.50",
    },
    {
      title: "Bike yangu ",
      img: "/images/mama.webp",
      price: "$3.00",
    },
  ];
  return (
    <div className="lg:container-fluid p-4 mb-12 sm:p-8 lg:mt-16 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <Hero />
      <div className="flex flex-col p-6 items-center justify-center mt-2  mb-2"></div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <div className="flex w-max space-x-4 p-4">
          {list.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[120px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <p className="text-sm font-semibold">{item.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar className="mt-4" orientation="horizontal" />
      </ScrollArea>
      ;
      <div className="grid grid-cols-1  mt-3 ">
        <div className=" ">
          <div className="grid grid-cols-1 gap-4 ">
            {userposts.map((userPost, index) => (
              <ContentCard
                key={index}
                postId={userPost.id}
                videoURL={userPost.videoURL}
                content={userPost.content}
                title={userPost.title}
                category={userPost.category}
                thumbnailURL={userPost.thumbnailURL}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-4">
            <div className="mb-">
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
