import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="w-full glassmorphism p-4 max-w-2xl">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger>Is it accessible for children or adult, and what should we do?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="w-full">
        <AccordionTrigger>What we can do for you?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="w-full">
        <AccordionTrigger>Can we help you?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
