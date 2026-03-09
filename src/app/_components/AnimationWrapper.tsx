"use client";

/* since framer motion doesn't support server components,
    we need to create a client component wrapper for it
    This component accepts an "as" prop to specify which HTML
    element to render, and passes all other props to the motion component
 */

import { motion, HTMLMotionProps } from "framer-motion";

type AnimationWrapperProps = HTMLMotionProps<"div"> & {
  as?: keyof typeof motion;
  children?: React.ReactNode;
};

export default function AnimationWrapper({
  as = "div",
  children,
  ...props
}: AnimationWrapperProps) {
  const Component = motion[as] as any;

  return <Component {...props}>{children}</Component>;
}
