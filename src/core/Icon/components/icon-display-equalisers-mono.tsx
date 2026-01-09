import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayEqualisersMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeLinecap="round" d="M1.334 16h6M12.667 16h18M24.667 6.667h6M24.667 25.334h6M1.334 6.667h18M1.334 25.334h18" /><rect width={5.333} height={8} x={19.334} y={2.667} stroke="currentColor" strokeLinecap="round" rx={1.333} /><rect width={5.333} height={8} x={19.334} y={21.334} stroke="currentColor" strokeLinecap="round" rx={1.333} /><rect width={5.333} height={8} x={7.333} y={12} stroke="currentColor" strokeLinecap="round" rx={1.333} /></svg>;
const ForwardRef = forwardRef(IconDisplayEqualisersMono);
export default ForwardRef;