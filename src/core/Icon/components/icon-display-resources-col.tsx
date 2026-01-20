import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayResourcesCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" viewBox="0 0 40 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M17.5 24.667v-17.5c0-1.667 1.667-3.334 3.333-3.334h12.5c1.667 0 3.334 1.667 3.334 3.334v20c0 1.666-1.667 3.333-3.334 3.333h-10M25.75 24.75h6.833" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M5.834 24.667h15c1.291 0 2.333 1.291 2.333 2.583v7.333c0 1.292-1.042 2.584-2.334 2.584h-15c-1.291 0-2.5-1.209-2.5-2.5v-7.5c0-1.292 1.209-2.5 2.5-2.5Z" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M15.46 31.585a.785.785 0 0 0 0-1.337l-3.374-2.12c-.541-.34-1.252.04-1.252.668v4.241c0 .63.711 1.009 1.252.669z" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M25.75 22.25h6.833" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.25 22.167h2.5M5.834 21.333h5M16.25 18.833h2.5M8.334 18v3.333M16.25 15.5h2.5M16.25 12.167h2.5" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M13.334 12.167V13a5 5 0 0 1-10 0v-.833" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.25 8.833h2.5" /><path fill="#D9D9DA" fillRule="evenodd" d="m21.87 16.165 5.164-3.027-1.818-6.18a6.46 6.46 0 0 0-3.346 9.207" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M27.5 6.542q-.395 0-.777.046l1.689 5.742 4.6-2.697A6.45 6.45 0 0 0 27.5 6.542" clipRule="evenodd" /><path fill="#FF5416" fillRule="evenodd" d="m33.66 11.05-10.867 6.371a6.458 6.458 0 0 0 10.867-6.37" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M8.334 15.5a2.5 2.5 0 0 0 2.5-2.5V8.833c0-1.367-1.094-2.5-2.5-2.5a2.5 2.5 0 0 0-2.5 2.5V13a2.5 2.5 0 0 0 2.5 2.5Z" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.834 12.167H7.5M5.834 9.667H7.5" /></svg>;
const ForwardRef = forwardRef(IconDisplayResourcesCol);
export default ForwardRef;