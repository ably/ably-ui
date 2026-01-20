import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayFirehose = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M39 21.923h8M39 24.923h8" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M1 24.923h16M1 16.923h1.64a10 10 0 0 1 4.471 1.056l3.778 1.888a10 10 0 0 0 4.472 1.056H17M1 4.923h.254A7 7 0 0 1 7.078 8.04l3.844 5.766a7 7 0 0 0 5.824 3.117H17M1 32.923h1.64a10 10 0 0 0 4.471-1.056l3.778-1.888a10 10 0 0 1 4.472-1.056H17M1 44.923h.254a7 7 0 0 0 5.824-3.117l3.844-5.766a7 7 0 0 1 5.824-3.117H17" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M39 27.923h8" /><rect width={6} height={24} x={20} y={12.923} stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} rx={2} /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m26 15.923 8.575 2.572A2 2 0 0 1 36 20.411v9.024a2 2 0 0 1-1.425 1.915L26 33.923" /></svg>;
const ForwardRef = forwardRef(IconDisplayFirehose);
export default ForwardRef;