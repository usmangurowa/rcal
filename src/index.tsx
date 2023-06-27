import React from "react";

interface ClickAwayListenerProps extends React.HTMLAttributes<HTMLElement> {
  onClickAway?: () => void;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const ClickAwayListener = ({
  onClickAway,
  children,
  className,
  as,
  ...props
}: ClickAwayListenerProps) => {
  const ref = React.useRef<any>(null);
  const Element = as || "div";

  React.useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const { target } = event;
      const containerNode = ref.current;
      if (containerNode && !containerNode.contains(target)) {
        onClickAway && onClickAway();
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [onClickAway, ref]);

  return (
    <Element className={className} {...props} ref={ref}>
      {children}
    </Element>
  );
};

export default ClickAwayListener;
