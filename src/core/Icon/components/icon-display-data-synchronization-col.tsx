import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDataSynchronizationCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeMiterlimit={10} strokeWidth={1.5} d="M39 10c0-3.866-7.611-7-17-7S5 6.134 5 10M39 18c0 3.866-7.611 7-17 7S5 21.866 5 18" /><path stroke="#03020D" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5 26c0 3.625 6.692 6.607 15.267 6.964" /><path stroke="#03020D" strokeMiterlimit={10} strokeWidth={1.5} d="M39 10c0 3.866-7.611 7-17 7S5 13.866 5 10" /><path stroke="#03020D" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5 34c0 3.695 6.954 6.722 15.767 6.982" /><path stroke="#03020D" strokeMiterlimit={10} strokeWidth={1.5} d="M5 10v24" /><path stroke="#03020D" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M39 10v15" /><circle cx={33.5} cy={37} r={10.5} fill="#FF5416" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m36.653 39.03 2.118-.53.529 2.118" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M38.77 38.5a5.965 5.965 0 0 1-5.294 3.97 5.29 5.29 0 0 1-4.976-3.485M30.147 35.794l-2.118.53-.529-2.118" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M28.382 35.97C29.123 33.942 31.4 32 33.676 32a5.29 5.29 0 0 1 4.977 3.53" /></svg>;
const ForwardRef = forwardRef(IconDisplayDataSynchronizationCol);
export default ForwardRef;