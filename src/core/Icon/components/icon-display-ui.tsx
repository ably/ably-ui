import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayUi = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeWidth={1.5} d="M4 6.75h40A3.25 3.25 0 0 1 47.25 10v28A3.25 3.25 0 0 1 44 41.25H4A3.25 3.25 0 0 1 .75 38V10A3.25 3.25 0 0 1 4 6.75ZM.5 13.5h47" /><path fill="currentColor" d="M4.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.25 11.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path fill="#FF5416" fillRule="evenodd" d="M31.223 18.22c.69-.69 1.665-.97 2.78-.97h4c1.116 0 2.09.28 2.78.97.691.69.97 1.664.97 2.78v12c0 1.116-.279 2.09-.97 2.78-.69.69-1.664.97-2.78.97h-4c-1.115 0-2.09-.28-2.78-.97s-.97-1.664-.97-2.78V21c0-1.116.28-2.09.97-2.78" clipRule="evenodd" /><path stroke="currentColor" strokeDasharray="3 4" strokeLinecap="round" strokeWidth={1.5} d="M6 21q0-3 3-3h15q3 0 3 3v1q0 3-3 3H9q-3 0-3-3zM6 32q0-3 3-3h15q3 0 3 3v1q0 3-3 3H9q-3 0-3-3z" /></svg>;
const ForwardRef = forwardRef(IconDisplayUi);
export default ForwardRef;