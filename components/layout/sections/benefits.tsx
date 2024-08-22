import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Calendar",
    title: "Automated Appointment Scheduling",
    description:
      "Streamline your booking process by allowing customers to schedule appointments directly through the AI. This feature automates calendar management, reducing no-shows and optimizing your schedule.",
  },
  {
    icon: "MessageCircle",
    title: "Enhanced Customer Engagement",
    description:
      "Engage with your customers on a deeper level using AI-driven interactions. Provide timely and personalized responses to inquiries, improving overall customer satisfaction and retention.",
  },
  {
    icon: "Database",
    title: "Efficient Resource Management",
    description:
      "Monitor and manage your availability in real-time. The AI Call Assistant checks availability against your database, ensuring customers receive accurate and up-to-date information.",
  },
  {
    icon: "Layers",
    title: "Scalable Communication Solutions",
    description:
      "Expand your business's communication capabilities effortlessly. Handle multiple calls simultaneously, manage diverse agent profiles, and integrate with CRM systems for a unified customer experience.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Potential Use Cases
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          Transform your business operations with our AI Call Assistant, designed to excel as a virtual salesperson, receptionist, customer service representative, appointment scheduler, support agent, and more. Its versatile functionality adapts to numerous roles, streamlining interactions and boosting efficiency across your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
