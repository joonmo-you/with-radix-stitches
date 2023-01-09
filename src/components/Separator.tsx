import * as React from "react";

const NAME = "Separator";
const DEFAULT_ORIENTATION = "horizontal";
const ORIENTATIONS = ["horizontal", "vertical"] as const;

type Orientation = typeof ORIENTATIONS[number];

interface SeparatorProps extends React.ComponentProps<"div"> {
  orientation?: Orientation;
  decorative?: boolean;
}

function isValidOrientation(orientation: any): orientation is Orientation {
  return ORIENTATIONS.includes(orientation);
}

const Separator = React.forwardRef<React.ElementRef<"div">, SeparatorProps>((props, forwardedRef) => {
  const { decorative, orientation: orientationProps = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProps) ? orientationProps : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : undefined;
  const semanticProps = decorative ? { role: "none" } : { role: "separator", "aria-orientation": ariaOrientation };
  return <div ref={forwardedRef} data-orientation={orientation} {...semanticProps} {...domProps} />;
});

Separator.displayName = NAME;

export { Separator };
