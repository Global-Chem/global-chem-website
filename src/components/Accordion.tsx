import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

interface AccordionItem {
  header: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    header: "Step 1: Gathering Data From a Diverse Range of Sources",
    content:
      "We aim to gather chemical information from a wide range of sources, including experts in fields such as cooking, cleaning products, makeup, vaccines, and more. By compiling this information, we can create a comprehensive database that helps us understand the chemicals we encounter in our daily lives and assess their safety for general use.",
  },
  {
    header:
      "Step 2: Developing a Governing AI System Based on Collective Knowledge and Expertise",
    content:
      "We aim to gather chemical information from a wide range of sources, including experts in fields such as cooking, cleaning products, makeup, vaccines, and more. By compiling this information, we can create a comprehensive database that helps us understand the chemicals we encounter in our daily lives and assess their safety for general use.",
  },
];

interface AccordionProps {}

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      defaultValue={[]}
      type="multiple"
      className={clsx("space-y-2 w-full")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className={clsx("w-full rounded-lg space-y-0.5")}
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between bg-red-800 px-4 py-2 text-left rounded-lg"
              )}
            >
              <span className="text-lg font-medium text-red-100">{header}</span>
              <ChevronDownIcon
                className={clsx(
                  "w-5 h-5",
                  "transform transition-transform",
                  "group-focus:rotate-180",
                  "group-active:rotate-180"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={clsx("pt-1 w-full bg-white px-5 py-3 rounded-lg")}
          >
            <div className="text-gray-700 py-2">{content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
