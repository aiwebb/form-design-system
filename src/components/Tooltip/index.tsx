import React, { useRef } from 'react';
import FDS from 'dictionary/js/styleConstants';
import * as RadixTooltip from '@radix-ui/react-tooltip';

export interface TooltipProps {
  /** What we're showing tooltip on */
  trigger: JSX.Element | string;

  /** The actual content of the tooltip */
  message: string;

  /** Maximum width of tooltip */
  maxWidth?: number;

  /** Position preference of tooltip. */
  position?: 'top' | 'left' | 'right' | 'bottom';
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { trigger, message, position = 'bottom', maxWidth = 240 }: TooltipProps,
    forwardedRef
  ) => {
    const refContent = forwardedRef || useRef<HTMLDivElement>(null);

    return (
      <RadixTooltip.Provider>
        <RadixTooltip.Root delayDuration={350}>
          <RadixTooltip.Trigger asChild>
            <span ref={refContent}>{trigger}</span>
          </RadixTooltip.Trigger>
          <RadixTooltip.Content
            side={position}
            sideOffset={parseInt(FDS.SPACE_S, 10)}
            asChild
          >
            <div
              style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
              className="ease-in-out bgColor--charcoal inverted align--center padding--y--s padding--x elevation--2 rounded--all fontSize--s fontWeight--bold"
            >
              {message}
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  }
);

Tooltip.displayName = 'Tooltip';
export default Tooltip;
