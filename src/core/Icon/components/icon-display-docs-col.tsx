import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDocsCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" viewBox="0 0 40 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M21.359 3.625h-10.91c-.991 0-1.931.493-2.612 1.18-.68.687-1.17 1.636-1.17 2.635v25.703c0 1 .49 1.948 1.17 2.635s1.62 1.18 2.611 1.18h19.105c.99 0 1.93-.493 2.61-1.18.682-.687 1.17-1.636 1.17-2.635v-17.46" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m23.82 29.25 5.555-4.167-5.556-4.166M16.18 24.25l-5.555-4.167 5.556-4.166" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="m18.334 30.083 3.333-15.833" /><path fill="#FF5416" fillRule="evenodd" d="M33.532 10.529c.912.912.266 2.471-1.023 2.471h-4.62a3.93 3.93 0 0 1-3.93-3.93V4.45c0-1.29 1.56-1.935 2.471-1.023z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayDocsCol);
export default ForwardRef;