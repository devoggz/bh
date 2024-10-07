"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React, { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { registerSchema } from "@/schemas";
import { register } from "../../../actions/register";
import { wards } from "../../../public/data/busiaWards";
import { Checkbox } from "@/components/ui/checkbox";
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
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Divide } from "lucide-react";
import { FaMotorcycle } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import TermsConditions from "@/app/(share layout)/terms/page";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";
import { ReloadIcon } from "@radix-ui/react-icons";

const RegisterForm = () => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      username: "",
      idNumber: "",
      bikeNumber: "",
      riderType: "",
      terms: false,
      ward: "",
      stage: "",
    },
  });
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setError(""), setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="@johndoe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="07000123456"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="12345678"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bikeNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bike Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="KMWT1234"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="riderType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rider/Owner/Mechanic</FormLabel>
                <FormControl>
                  <Select
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Are you a rider?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <Separator className="mt-2 mb-2" />
                        <SelectItem value="RIDER">Rider</SelectItem>
                        <SelectItem value="ONLINE_RIDER">
                          Online Rider
                        </SelectItem>
                        <SelectItem value="OWNER">Owner</SelectItem>
                        <SelectItem value="MECHANIC">Mechanic</SelectItem>
                        <Separator className="mt-2 mb-2" />
                        <SelectLabel>Are you a chairman?</SelectLabel>
                        <Separator className="mt-2 mb-2" />
                        <SelectItem value="COUNTY_CHAIRMAN">
                          County Chairman
                        </SelectItem>
                        <SelectItem value="SUB_COUNTY_CHAIRMAN">
                          Sub County Chairman
                        </SelectItem>
                        <SelectItem value="WARD_CHAIRMAN">
                          Ward Chairman
                        </SelectItem>
                        <SelectItem value="STAGE_CHAIRMAN">
                          Stage Chairman
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Ward</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                      {...field}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Ward" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectGroup>
                        <SelectContent>
                          <SelectLabel>BUSIA WARDS</SelectLabel>

                          <SelectItem value="MALABA_NORTH">
                            MALABA NORTH
                          </SelectItem>
                          <SelectItem value="MALABA_CENTRAL">
                            MALABA CENTRAL
                          </SelectItem>
                          <SelectItem value="ANGURAI_SOUTH">
                            ANGURAI SOUTH
                          </SelectItem>
                          <SelectItem value="MALABA_SOUTH">
                            MALABA SOUTH
                          </SelectItem>
                          <SelectItem value="ANGURAI_NORTH">
                            ANGURAI NORTH
                          </SelectItem>
                          <SelectItem value="ANGOROM">ANGOROM</SelectItem>
                          <SelectItem value="CHAKOI_SOUTH">
                            CHAKOI SOUTH
                          </SelectItem>
                          <SelectItem value="AMUKURA_CENTRAL">
                            AMUKURA CENTRAL
                          </SelectItem>
                          <SelectItem value="CHAKOI_NORTH">
                            CHAKOI NORTH
                          </SelectItem>
                          <SelectItem value="AMUKURA_EAST">
                            AMUKURA EAST
                          </SelectItem>
                          <SelectItem value="AMUKURA_WEST">
                            AMUKURA WEST
                          </SelectItem>
                          <SelectItem value="NAMBALE_TOWNSHIP">
                            NAMBALE TOWNSHIP
                          </SelectItem>
                          <SelectItem value="BUKHAYO_NORTH/WALTSI">
                            BUKHAYO NORTH/WALTSI
                          </SelectItem>
                          <SelectItem value="BUKHAYO_EAST">
                            BUKHAYO EAST
                          </SelectItem>
                          <SelectItem value="BUKHAYO_CENTRAL">
                            BUKHAYO CENTRAL
                          </SelectItem>
                          <SelectItem value="BUKHAYO_WEST">
                            BUKHAYO WEST
                          </SelectItem>
                          <SelectItem value="MAYENJE">MAYENJE</SelectItem>
                          <SelectItem value="MATAYOS_SOUTHBUSIBWABO">
                            MATAYOS SOUTHBUSIBWABO
                          </SelectItem>
                          <SelectItem value="BURUMBA">BURUMBA</SelectItem>
                          <SelectItem value="MARACHI_WESTKINGANDOLE">
                            MARACHI WESTKINGANDOLE
                          </SelectItem>
                          <SelectItem value="MARACHI_CENTRAL">
                            MARACHI CENTRAL
                          </SelectItem>
                          <SelectItem value="MARACHI_EAST">
                            MARACHI EAST
                          </SelectItem>
                          <SelectItem value="MARACHI_NORTH">
                            MARACHI NORTH
                          </SelectItem>
                          <SelectItem value="ELUGULU">ELUGULU</SelectItem>
                          <SelectItem value="NAMBOBOTO_NAMBUKU">
                            NAMBOBOTO NAMBUKU
                          </SelectItem>
                          <SelectItem value="NANGINA">NANGINA</SelectItem>
                          <SelectItem value="AGENGA_NANGUBA">
                            AGENGA NANGUBA
                          </SelectItem>
                          <SelectItem value="BWIRI">BWIRI</SelectItem>
                        </SelectContent>
                      </SelectGroup>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="stage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stage</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Add Stage Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-1 space-y-0 rounded-md border p-2 shadow">
                <FormControl>
                  <Checkbox
                    disabled={isDisabled}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>
                    <Drawer>
                      <DrawerTrigger>
                        <p className="text-sm">
                          Click to Read and accept our{" "}
                          <span className="text-sm font-bold">
                            Terms and Conditions
                          </span>
                        </p>
                      </DrawerTrigger>
                      <DrawerContent>
                        <ScrollArea className="h-[600px]  rounded-md border p-4">
                          <TermsConditions />
                        </ScrollArea>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button
                              onClick={() => setIsDisabled(false)}
                              variant="outline"
                              className="w-full"
                            >
                              Complete and Accept
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormSuccess message={success} />

          <FormError message={error} />

          <div className="mt-12">
            <Button
              disabled={isPending}
              className="w-full bg-bhgreen  mt-2 mb-2 text-white h-12 font-medium rounded-lg  
            "
            >
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
