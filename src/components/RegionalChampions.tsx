import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { FaCoins } from "react-icons/fa6";

export default function RegionalChampions() {
  return (
    <Card className="w-full mb-6 shadow-sm border">
      <CardHeader className="flex flex-row h-16 justify-between gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
        <div className="flex flex-col bg-emerald-200/50 px-4 p-1 rounded-full">
          <p className="text-sm font-semibold text-indigo-600 ">
            Regional Champions
          </p>
        </div>
        <div className=" flex flex-row gap-3 items-center bg-emerald-200/50 px-4 p-1 rounded-full ">
          <FaCoins className="text-indigo-500" />
          <p className="text-sm text-indigo-500 font-bold">Points</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-row items-center justify-between mb-4">
          <User
            name="John Doe"
            description="Boda Rider"
            avatarProps={{
              src: "https://i.pravatar.cc/150?img=64",
            }}
          />
          <div className="flex flex-row gap-1 items-center">
            {/* <FaCoins className="text-emerald-700" /> */}
            <p className="font-bold text-emerald-600 px-3">244</p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <User
            name="Elly Doe"
            description="Mechanic"
            avatarProps={{
              src: "https://i.pravatar.cc/150?img=64",
            }}
          />
          <p className="font-bold text-emerald-600 px-3">220</p>
        </div>
      </CardBody>
    </Card>
  );
}
