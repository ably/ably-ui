import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDeltas = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M35.333 24.423h-5M31.333 24.423c-12.314 0-22.709-9.708-26-23" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M31.333 24.423c-13.003 0-24-1-30-8.168M31.333 24.423c-12.314 0-22.709 9.709-26 23" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M31.333 24.424c-13.003 0-24 1-30 8.167" /><rect width={8} height={8} x={38.333} y={20.423} fill="#FF5416" rx={4} /></svg>;
const ForwardRef = forwardRef(IconDisplayDeltas);
export default ForwardRef;