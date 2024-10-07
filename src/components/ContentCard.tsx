"use client";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "@mux/videojs-kit/dist/index.css";

import { Chip } from "@nextui-org/react";
import { RiTv2Line } from "react-icons/ri";
import Video from "next-video";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import ReactPlayer from "react-player";

interface ContentCardProps {
  postId: string;
  title: string;
  videoURL: string;
  category: string;
  content: string;
  thumbnailURL: string;
}

export default function ContentCard({
  postId,
  title,
  videoURL,
  content,
  category,
  thumbnailURL,
}: ContentCardProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
      <div className="">
        <div className=" aspect-square ">
          <div>
            <ReactPlayer
              url={videoURL}
              className="react-player"
              width="100%"
              height="100%"
              controls={false}
              playing={false}
              loop={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
            {/* <Video src={videoURL} /> */}
          </div>
          <div className="p-6 ">
            <div className="mb-2 flex flex-row justify-between items-center gap-5">
              <Chip
                className="bg-bhgreen/15 p-2 mt-3 text-bhpink"
                size="sm"
                radius="sm"
                startContent={
                  <RiTv2Line className="text-2xl text-bhpink h-4 w-4 mr-2 pointer-events-none flex-shrink-0" />
                }
              >
                {category}
              </Chip>
              <div className="flex items-center flex-row gap-2">
                <Eye className="text-gray-400" />
                <p className="text-bhgreen text-sm">55</p>
              </div>
            </div>

            <h3 className=" p-2 font-bold text-bhgreen text-lg tracking-normal">
              {title}
            </h3>
            <p className="p-2 text-sm">{content}</p>

            <div className="flex flex-row items-center justify-between mt-4 ">
              <Button
                onClick={() => router.push(`/post-details/${postId}`)}
                variant="link"
              >
                Read More
              </Button>

              <div>
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="link">Add Comment</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle> Comment</DrawerTitle>
                    </DrawerHeader>
                    <ProfileForm className="px-4" />
                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Name</Label>
        <Input type="email" id="email" placeholder="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Comment</Label>
        <Textarea id="username" placeholder="Your Comment Here" />
      </div>
      <Button type="submit">Add Comment</Button>
    </form>
  );
}
