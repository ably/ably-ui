import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayUiMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeWidth={1.5} d="M4 6.75h40A3.25 3.25 0 0 1 47.25 10v28A3.25 3.25 0 0 1 44 41.25H4A3.25 3.25 0 0 1 .75 38V10A3.25 3.25 0 0 1 4 6.75ZM.5 13.5h47" /><path fill="currentColor" d="M4.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path stroke="currentColor" strokeDasharray="3 4" strokeLinecap="round" strokeWidth={1.5} d="M31.004 21q0-3 3-3h4q3 0 3 3v12q0 3-3 3h-4q-3 0-3-3zM6 21q0-3 3-3h15q3 0 3 3v1q0 3-3 3H9q-3 0-3-3zM6 32q0-3 3-3h15q3 0 3 3v1q0 3-3 3H9q-3 0-3-3z" /></svg>;
const ForwardRef = forwardRef(IconDisplayUiMono);
export default ForwardRef;