"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "The AI Call Assistant has completely transformed how we handle customer interactions. Its seamless integration with our existing systems and customization options have made it an invaluable tool for our team. Highly recommend!",
    rating: 5.0,
  },
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Exceptional performance and reliability. The AI Call Assistant’s advanced features have greatly enhanced our security measures, providing us with unparalleled control and efficiency.",
    rating: 4.8,
  },
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "The AI Call Assistant is a game-changer for our tech stack. It’s intuitive, powerful, and has streamlined our communication processes significantly. The support and updates are top-notch.",
    rating: 4.9,
  },
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "With the AI Call Assistant, our data collection and analysis have reached new heights. The intelligent handling of calls and the integration with our analytics tools have been remarkable. It's a must-have for data-driven teams.",
    rating: 5.0,
  },
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "The AI Call Assistant’s intuitive dashboard and customizable features have been a game-changer for our project management. It’s streamlined our operations and improved overall productivity. Fantastic tool!",
    rating: 5.0,
  },
  {
    image: "https://github.com/AI Call Assistant.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "A powerful solution for managing our call operations with precision and ease. The AI Call Assistant has exceeded our expectations with its robust features and seamless integration.",
    rating: 4.9,
  },
];


export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
