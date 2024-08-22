import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Smartphone",
    title: "Smart Call Automation",
    description:
      "Automatically handle both inbound and outbound calls with AI-powered precision, ensuring every customer interaction is seamless and personalized.",
  },
  {
    icon: "UserCheck",
    title: "Multi-Agent Scalability",
    description:
      "Effortlessly manage multiple agents at once, each tailored to different numbers, allowing your business to scale without missing a beat.",
  },
  {
    icon: "Mic",
    title: "Real-Time Voice Intelligence",
    description:
      "Leverage advanced voice recognition to provide dynamic, context-aware responses, enhancing the quality and speed of customer interactions.",
  },
  {
    icon: "LayoutDashboard",
    title: "Intuitive Management Dashboard",
    description:
      "Control your entire call operation through a sleek, user-friendly dashboard that simplifies agent creation, management, and call monitoring.",
  },
  {
    icon: "UserCog",
    title: "Customizable Agent Profiles",
    description:
      "Create personalized agent profiles with unique configurations to ensure that every call aligns with your brand’s voice and customer needs.",
  },
  {
    icon: "Clock",
    title: "24/7 Availability",
    description:
      "Keep your business accessible around the clock with an AI assistant that’s always ready to engage with your customers, no matter the time.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Our AI Call Assistant revolutionizes communication by automating and personalizing call management with cutting-edge voice recognition. Effortlessly scale your operations with a sleek, user-friendly dashboard, and experience a solution that empowers your business to thrive.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
