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

  const sections = children?.split("||").filter(Boolean) || [];

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[150vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-screen items-center justify-center bg-transparent px-[1rem] py-[5rem] font-medium">
        <div className="flex max-w-5xl flex-col items-center justify-center p-5 md:p-8 lg:p-10">
          <p className="font-manrope text-2xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.5] lg:leading-[1.5]">
            {sections.map((section, i) => {
              const activeStart = i / 4;
              const activeEnd = activeStart + 0.2;

              const inactiveStart = activeEnd;
              const inactiveEnd = i < 2 ? (i + 1) / 4 : 1;

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
  const defaultColor = "#535353";
  const primaryColor = "hsl(var(--primary))";

  const activateColor = useTransform(progress, activeRange, [
    defaultColor,
    primaryColor,
  ]);

  const deactivateColor = useTransform(progress, inactiveRange, [
    primaryColor,
    defaultColor,
  ]);

  const finalColor = useTransform(
    [activateColor, deactivateColor],
    ([activate, deactivate]) => {
      const progressValue = progress.get();

      if (progressValue >= activeRange[0] && progressValue <= activeRange[1]) {
        return activate;
      } else if (
        progressValue > activeRange[1] &&
        progressValue <= inactiveRange[1]
      ) {
        return deactivate;
      } else {
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
