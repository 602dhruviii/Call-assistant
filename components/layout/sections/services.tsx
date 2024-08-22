import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Intelligent Booking System",
    description:
      "Soon, you’ll be able to integrate a smart booking system that allows your customers to schedule appointments directly through the AI assistant. This feature will intelligently manage your calendar and optimize scheduling based on your availability..",
    pro: 1,
  },
  {
    title: "Real-Time Availability Checking",
    description:
      "Our upcoming real-time availability checking feature will connect seamlessly with your database, providing immediate updates on your schedule and resources. This ensures that your customers always receive accurate information on availability.",
    pro: 1,
  },
  {
    title: "Advanced Analytics and Reporting",
    description: "Get deeper insights into your call performance with enhanced analytics and reporting tools. Track key metrics, identify trends, and make data-driven decisions to improve your communication strategies.",
    pro: 0,
  },
  {
    title: "Multi-Language Support",
    description: "Expand your reach with multi-language support, allowing the AI assistant to interact with customers in their preferred language. This feature will help you cater to a diverse clientele and enhance customer satisfaction globally.",
    pro: 1,
  },
  {
    title: "Customizable Call Flows",
    description: "Create and customize complex call flows tailored to different scenarios and customer needs. This flexibility ensures that every call is handled in the most effective way possible, reflecting your unique business requirements.",
    pro: 1,
  },
  {
    title: "Integration with CRM Systems",
    description: "Integrate seamlessly with your CRM system to synchronize customer interactions and data. This feature will provide a unified experience, allowing for more personalized and efficient customer service.",
    pro: 1,
  },
  {
    title: "Predictive Dialing",
    description: "Our predictive dialing feature will optimize your outbound calling efforts by automatically dialing numbers and connecting only with live contacts, increasing productivity and efficiency.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What's Next?
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      We're continually enhancing our AI Call Assistant to offer even more value and functionality. Here’s a sneak peek at some of the groundbreaking features we’re working on:
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden" style={{backgroundColor:"#FFD700",color:"black"}}
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
