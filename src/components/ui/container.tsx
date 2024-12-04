import { cn } from "../../utils/constants";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1256px] px-5 sm:px-1", className)}>
      {children}
    </div>
  );
};
