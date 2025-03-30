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
        <AccordionContent className="opacity-60">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui animi hic nesciunt nisi sunt quod tempora, optio ducimus quis est fugit, id suscipit maxime error itaque voluptatum, necessitatibus voluptatibus soluta.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="w-full">
        <AccordionTrigger>What we can do for you?</AccordionTrigger>
        <AccordionContent className="opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illo! Modi eaque repellendus ad suscipit accusamus tenetur perspiciatis odio voluptatem hic quia doloremque odit iusto vero, voluptas nostrum nemo ipsum?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="w-full">
        <AccordionTrigger>Can we help you?</AccordionTrigger>
        <AccordionContent className="opacity-60">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, nobis perferendis? Delectus quaerat eum maiores optio eos adipisci officiis! Laborum perspiciatis aliquam quae quod nihil iste itaque vel praesentium obcaecati.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
