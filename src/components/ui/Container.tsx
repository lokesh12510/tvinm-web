import React from "react";

interface ContainerProps {
  maxWidth?: string;
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "xl",
  className,
}) => {
  return (
    <section
      className={`mx-auto max-w-screen-${maxWidth} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
