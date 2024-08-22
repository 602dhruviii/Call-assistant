import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the AI Call Assistant suitable for small businesses?",
    answer: "Absolutely! Our AI Call Assistant is designed to scale with your business, whether you're a small startup or a large enterprise. It offers flexible features that cater to various business needs.",
    value: "item-1",
  },
  {
    question: "How does the AI Call Assistant handle multiple languages?",
    answer: "Our AI Call Assistant supports multiple languages, allowing it to interact with customers in their preferred language. This feature ensures a more personalized and accessible experience for a diverse clientele.",
    value: "item-2",
  },
  {
    question: "Can I integrate the AI Call Assistant with my existing CRM system?",
    answer: "Yes, the AI Call Assistant can be seamlessly integrated with your CRM system. This integration allows for synchronized customer interactions and data, enhancing your overall customer service.",
    value: "item-3",
  },
  {
    question: "What security measures are in place to protect my data?",
    answer: "We prioritize your data security. The AI Call Assistant employs advanced encryption and secure protocols to ensure that your data is protected at all times. Our system complies with industry-standard security practices.",
    value: "item-4",
  },
  {
    question: "How can I customize the AI Call Assistant for my specific needs?",
    answer: "Customization is a key feature of our AI Call Assistant. You can tailor the call flows, agent profiles, and other settings to align with your business requirements and brand identity.",
    value: "item-5",
  },
  {
    question: "What kind of support do you offer for the AI Call Assistant?",
    answer: "We offer comprehensive support including documentation, tutorials, and a dedicated support team to assist you with any issues or questions. Our goal is to ensure that you have a smooth and successful experience with our product.",
    value: "item-6",
  },
  {
    question: "When will the new features be available?",
    answer: "We are continuously working on enhancing our AI Call Assistant. Features like intelligent booking systems and real-time availability checking are in development and will be rolled out in the near future. Stay tuned for updates!",
    value: "item-7",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
