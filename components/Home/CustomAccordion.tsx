'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Sample JSON Data
const accordionData = [
  {
    id: "item-1",
    title: "Is VLSI a good career?",
    content: "This is the content for accordion item 1.",
  },
  {
    id: "item-2",
    title: "What is the purpose of RISC-V?",
    content: "This is the content for accordion item 2.",
  },
  {
    id: "item-3",
    title: "What is the purpose of RISC-V?",
    content: "This is the content for accordion item 3.",
  },
  {
    id: "item-4",
    title: "Are there any prerequisites for the VLSI Course?",
    content: "This is the content for accordion item 3.",
  },
  {
    id: "item-5",
    title: "How to get started learning RISC-V?",
    content: "Maven silicon offers the RISC-V RV321 ISA & RTL course. You can refer to RISC-V international YouTube videos to learn about the RISC-V ecosystem and future and for regular updates.",
  },
];

export default function CustomAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item) => (
        <AccordionItem className="rounded-2xl px-5 mb-5 custom_border_all" key={item.id} value={item.id} style={{ background: 'linear-gradient(186.47deg, rgba(255, 253, 253, 0.4) -20.85%, rgba(255, 253, 253, 0.2) -20.83%, rgba(255, 255, 255, 0) 116.4%)' }}>
          <AccordionTrigger
            onClick={() => handleToggle(item.id)}
            className="flex justify-between items-center text-xl font-normal"
            aria-expanded={openItem === item.id ? "true" : "false"}
            aria-controls={item.id}
          >
            <span>{item.title}</span>
            {/* Dynamic Icon (using Lucid React Chevron) */}
            <span className="text-xl bg-pri-custom-gradient p-1.5 rounded-full">
              {openItem === item.id ? <Minus /> : <Plus />}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className="overflow-hidden transition-all duration-300 text-base"
            id={item.id}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
