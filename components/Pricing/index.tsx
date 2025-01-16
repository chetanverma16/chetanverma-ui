import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";

const childVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const pricingOneTimeBullets = [
    "MVP development in 3-4 weeks",
    "Modern, scalable tech stack",
    "Web/Mobile app",
    "Guaranteed timeline",
    "Landing Page",
    "Async + Slack support",
  ];

  const pricingSubscriptionBullets = [
    "Fully managed project",
    "Weekly Consulting Call",
    "Web/Mobile app",
    "Async + Slack support",
    "Flexible hours allocation",
    "Continuous maintenance",
  ];

  return (
    <section
      ref={ref}
      id="pricing"
      className="flex flex-col items-start gap-y-4 my-10"
    >
      <div className="flex flex-col items-start gap-y-2 text-left">
        <motion.h2
          variants={childVariants}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.5 }}
        >
          Need a custom digital solution?
        </motion.h2>
        <motion.p
          variants={childVariants}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          Custom solutions, transparent pricing. From single components to
          complete websites, we build exactly what you need.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 text-left">
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-y-2 bg-gray-100 border border-gray-200/50 p-2 rounded-xl shadow-lg"
        >
          <div className="p-4 bg-white rounded-xl border h-60 flex flex-col justify-between border-gray-200 shadow-lg">
            <div className="flex flex-col items-start text-left gap-y-2">
              <Badge variant="outline" className="w-fit">
                One time
              </Badge>
              <h3>Custom Digital Solutions.</h3>
              <p className="text-xs md:text-sm">
                Perfect for businesses with clear goals. We deliver tailored web
                apps, landing pages, or custom e-commerce platforms with
                precision and quality.
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <h4>Starting at $2500</h4>
              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/webmakers-studio/30min",
                    "_blank"
                  )
                }
                className="w-fit flex items-center gap-x-2"
              >
                Get Started <ArrowRight size={12} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 p-6 text-gray-500 text-xs gap-2">
            {pricingOneTimeBullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-x-2">
                <div className="bg-gray-400 h-[6px] w-[6px] rounded-full mt-1"></div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-y-2 bg-black border border-gray-200/50 p-2 rounded-xl shadow-lg"
        >
          <div className="p-4 bg-white rounded-xl border flex flex-col justify-between h-60 gap-y-2 border-gray-200 shadow-lg">
            <div className="flex flex-col gap-y-2">
              <Badge className="w-fit">Retainer</Badge>
              <h3>Zero to one & beyond.</h3>
              <p className="text-xs md:text-sm">
                Ideal for ongoing support or evolving projects. Get flexibility
                and a dedicated team to scale from concept to execution.
              </p>
            </div>
            <div className="flex items-center justify-between mt-8">
              <h4>$3000/Mo</h4>
              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/webmakers-studio/30min",
                    "_blank"
                  )
                }
                className="w-fit flex items-center gap-x-2"
              >
                Get Started <ArrowRight size={12} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 p-6 text-gray-200 text-xs gap-2">
            {pricingSubscriptionBullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-x-2">
                <div className="bg-gray-400 h-[6px] w-[6px] rounded-full mt-1"></div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
