"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import callgif from "../../icons/call.gif";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

const formSchema = z.object({
  userName: z.string().min(2).max(255),
  phoneNumber: z.string(),
});

export const HeroSection = () => {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loader state
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("https://ai-caller-dashboard.vercel.app");
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); // Show loader
    try {
      setError(null);
      setSuccessMessage(null);

      const response = await fetch("https://ai-call-assistant.fly.dev/api/trial-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: values.userName,
          phoneNumber: values.phoneNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to initiate trial call");
      }

      const result = await response.json();
      setSuccessMessage("Call placed successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false); // Hide loader
    }
  }

  return (
    <section className="container w-full">
      <div className="flex flex-wrap lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="flex-1 min-w-[300px] space-y-8">
          <div className="max-w-screen-md text-4xl md:text-6xl font-bold">
            <h1>
              Experience
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                AI Conversation Architect
              </span>
            </h1>
          </div>

          <p
            className="max-w-screen-sm text-xl text-muted-foreground"
            style={{ width: "70%" }}
          >
            Let Intelligent Automation Handle Every Call, So You Can Focus on
            What Truly Matters.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-8">
            <Button className="w-full md:w-1/2 lg:w-1/4 font-bold group/arrow"  onClick={handleSignInClick}>
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <Card
          className="bg-muted/60 dark:bg-card flex-1 min-w-[300px]"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <CardHeader className="text-2xl">
          <div className="max-w-screen-md text-center flex flex-wrap flex-row justify-center gap-6">
              <section className="call-buton">
                <a className="cc-calto-action-ripple" href="tel:9999999">
                  <i className="fa fa-phone"></i>
                </a>
              </section>
              <h6>Recieve a phone call from our agent</h6>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dhruvi Trivedi" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Your Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+918700659586" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="btn" type="submit" disabled={loading} style={{backgroundColor:"#4426D9"}}>
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    <>
                      <Image
                        src={callgif}
                        alt="Call Gif"
                        width={50}
                        height={10}
                        style={{ position: "relative", bottom: "9%" }}
                      />
                      <span
                        style={{
                          textAlign: "center",
                          fontSize: "large",
                          color: "white",
                        }}
                      >
                        Talk to Agent
                      </span>
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          {successMessage && (
            <Alert
              color="success"
              dismissible
              onClose={() => setSuccessMessage(null)}
            >
              {successMessage}
            </Alert>
          )}

          {error && (
            <Alert
              color="danger"
              dismissible
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}

          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};
