import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface HeroPillProps extends Omit<HTMLMotionProps<"div">, "children"> {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  /**
   * @default true
   */
  animate?: boolean;
}

export function HeroPill({
  icon,
  text,
  className,
  animate = true,
  ...props
}: HeroPillProps) {
  return (
    <motion.div
      className={cn("mb-2", className)}
      initial={animate ? { opacity: 0, y: 10 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      {...props}
    >
      <motion.p className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-full bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-3 py-1 text-sm font-medium transition-colors">
        {icon && (
          <motion.span
            className="mr-2 flex shrink-0 border-r border-white/50 pr-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        {text}
      </motion.p>
    </motion.div>
  );
}

export function StarIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ duration: 0.3 }}
    >
      <path
        className="fill-white"
        d="M6.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-1-3.33Z"
      />
    </motion.svg>
  );
}
