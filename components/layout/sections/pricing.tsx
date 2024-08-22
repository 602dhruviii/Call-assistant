import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Get started with the basics of our AI Call Assistant. Ideal for individuals or small teams who want to explore essential features.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Create up to 1 agent",
      "Basic AI call management",
      "Limited call handling features",
      "Community support",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 45,
    description:
      "Unlock advanced features with our Premium plan. Perfect for growing teams needing enhanced capabilities and priority support.",
    buttonText: "Get Started",
    benefitList: [
      "Create up to 4 agents",
      "Advanced AI call management",
      "Real-time availability checking",
      "Customizable agent profiles",
      "Priority support",
      "Access to multi-agent scalability",
      "Intuitive management dashboard",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description:
      "Our Enterprise plan offers the most comprehensive features for large organizations. Includes all Premium features plus additional customization and support.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited agents",
      "Full suite of AI call management features",
      "Intelligent booking system",
      "Integration with CRM systems",
      "Multi-language support",
      "Predictive dialing",
      "Advanced analytics and reporting",
      "Dedicated support and account management",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
