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
    header: "Step 1: Gathering Chemical Data From People",
    content:
      "We don't need all the chemicals in the universe, only the best elected from each community: War, Sex, Cannabis, Medicinal Therapeutics, Vaccines, Narcotics, Food etc. ",
  },
  {
    header:
      "Step 2: Develop an Open Source Government",
    content:
      "We link communities together by sharing chemical data across companies, academica, industry, and the people. This establishes a foundation for a government where the data is governed by everyone",
  },
  {
    header:
      "Step 3: Establish A Standard Chemical Artificial Intelligence",
    content:
      "We create interfaces where machine learning models and the users can interact with, and contribute back, data. This establishes a practice for a standard artificial intelligence program to be governed by all",
  },
];

interface AccordionProps {}

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      defaultValue={[]}
      type="multiple"
      className={clsx("space-y-1 overflow-hidden")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className={clsx("rounded-lg")}
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "focus:outline-none",
                "flex w-full items-center justify-between bg-red-800 pl-3 py-2 text-left rounded-lg"
              )}
            >
              <div className="lg:text-lg font-medium text-red-100 p-1 flex w-full">
                <span className="w-11/12">{header}</span>
                <ChevronDownIcon
                  className={clsx(
                    "h-6 my-auto w-1/12",
                    "transform transition-transform",
                    "group-aria-expanded:rotate-180"
                  )}
                />
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={clsx("pt-1 bg-white py-3 rounded-lg")}
          >
            <div className="text-gray-700 py-2 px-4">{content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
