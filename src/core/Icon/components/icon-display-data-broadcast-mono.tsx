import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDataBroadcastMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={31} height={24} fill="none" viewBox="0 0 31 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeLinecap="round" d="M24.955.648a14.64 14.64 0 0 1 5.378 11.351c0 4.576-2.095 8.663-5.379 11.353M6.377.649A14.64 14.64 0 0 0 1 12c0 4.577 2.096 8.663 5.38 11.353" /><path stroke="currentColor" strokeLinecap="round" d="M20.82 4.216A9.32 9.32 0 0 1 25 12a9.32 9.32 0 0 1-4.18 7.783M10.513 4.217A9.32 9.32 0 0 0 6.333 12c0 3.249 1.661 6.11 4.18 7.782" /><circle cx={15.667} cy={12} r={3.333} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconDisplayDataBroadcastMono);
export default ForwardRef;