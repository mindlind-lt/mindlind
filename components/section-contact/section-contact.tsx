import Image from "next/image";

import FAQAccordion from "@/components/faq-accordion/faq-accordion";
import ContactForm from "@/components/contact-form/contact-form";

import "./section-contact.css";

export default function SectionContact() {
    return (
      <div className="section-contact container mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-20">

          <div>
            <div className="font-mono text-3xl uppercase pb-15 flex justify-between items-center gap-15">
              <h2 className="">FAQ</h2>
              <div className="text-primary-500">[08]</div>
            </div>
            <FAQAccordion
              className="border-t border-black"
              items={[
                {
                  question: "What services do you offer?",
                  answer: "We offer web design, web development, brand strategy, and digital marketing services. Our team specializes in creating conversion-focused interfaces with clear hierarchy and measurable goals."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope. A typical website redesign takes 4-8 weeks, while full brand identity projects can take 6-12 weeks. We provide detailed timelines during the discovery phase."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We work on a project-basis with transparent pricing. After our initial discovery call, we provide a detailed scope and quote. We also offer ongoing retainers for long-term partnerships."
                },
                {
                  question: "Do you work with startups?",
                  answer: "Yes, we love working with startups! We have experience helping early-stage companies establish their brand presence and build scalable digital products that grow with their business."
                },
                {
                  question: "What technologies do you use?",
                  answer: "We primarily work with Next.js, React, and modern CSS frameworks. For CMS solutions, we use Contentful, Sanity, or custom solutions depending on your needs. We prioritize performance and accessibility."
                }
              ]}
            />
          </div>

          <div className="section-contact-form">
            <div className="flex items-end">
              <div className="flex-1 pb-2 self-stretch">
                <div className="font-mono text-6xl uppercase pb-4">Start a&nbsp;Project</div>
                <div className="text-lg">Tell to our manager about the goal. <br />We'll reply with scope and timeline.</div>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/contact.png"
                  width={240}
                  height={250}
                  alt=""
                />
              </div>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    );
}
