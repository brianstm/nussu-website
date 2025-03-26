"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define the three sections for the reveal
  const sections = [
    "National University of Singapore Students' Union (NUSSU) ",
    "is an autonomous institution that serves as the bridge ",
    "between the students and the University's senior management.",
  ];

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[120vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-screen items-center justify-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <div
          className={
            "flex max-w-3xl flex-col items-center justify-center p-5 md:p-8 lg:p-10"
          }
        >
          <p className="font-manrope text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            {sections.map((section, i) => {
              // Active range for this section
              const activeStart = i / 3;
              const activeEnd = activeStart + 0.3;

              // Inactive range (when next section becomes active)
              const inactiveStart = activeEnd;
              const inactiveEnd = i < 2 ? (i + 1) / 3 : 1;

              return (
                <HighlightSection
                  key={i}
                  progress={scrollYProgress}
                  activeRange={[activeStart, activeEnd]}
                  inactiveRange={[inactiveStart, inactiveEnd]}
                >
                  {section}
                </HighlightSection>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

interface HighlightSectionProps {
  children: ReactNode;
  progress: MotionValue<number>;
  activeRange: [number, number];
  inactiveRange: [number, number];
}

const HighlightSection: FC<HighlightSectionProps> = ({
  children,
  progress,
  activeRange,
  inactiveRange,
}) => {
  // Default color is gray
  const defaultColor = "#535353";
  const primaryColor = "hsl(var(--primary))";

  // Activation: gray to primary
  const activateColor = useTransform(progress, activeRange, [
    defaultColor,
    primaryColor,
  ]);

  // Deactivation: primary back to gray (when next section activates)
  const deactivateColor = useTransform(progress, inactiveRange, [
    primaryColor,
    defaultColor,
  ]);

  // Combine the two transformations
  const finalColor = useTransform(
    [activateColor, deactivateColor],
    ([activate, deactivate]) => {
      // Use the progress value to determine which color to display
      const progressValue = progress.get();

      if (progressValue >= activeRange[0] && progressValue <= activeRange[1]) {
        // In activation range - use activate color
        return activate;
      } else if (
        progressValue > activeRange[1] &&
        progressValue <= inactiveRange[1]
      ) {
        // In deactivation range - use deactivate color
        return deactivate;
      } else {
        // Outside both ranges - use default color
        return defaultColor;
      }
    }
  );

  return (
    <motion.span style={{ color: finalColor }} className="inline">
      {children}
    </motion.span>
  );
};
