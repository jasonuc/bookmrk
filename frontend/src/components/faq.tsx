import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";


export default function FAQ() {
    return (
        <section className="w-full mt-10 flex flex-col items-center justify-center gap-y-4 max-md:p-10">
            <h3 className="font-bold w-full md:max-w-md text-muted-foreground">Frequently Asked Questions</h3>

            <Accordion type="single" collapsible className="w-full md:max-w-md">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Bookmrk?</AccordionTrigger>
                    <AccordionContent>
                        {"Bookmrk is a digital bookshelf that lets you share your thoughts on books with friends."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What part of Bookmrk is shareable?</AccordionTrigger>
                    <AccordionContent>
                        {"The books you add on Bookmrk can be shared with your friends. They can see your notes and customizations for each book."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is Bookmrk open-source?</AccordionTrigger>
                    <AccordionContent>
                        {"No, not at the moment. Bookmrk was created exclusively by Jason."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
