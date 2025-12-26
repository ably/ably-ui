import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiCursor = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinejoin="round" strokeWidth={1.5} d="m3.135 2.056 18.315 6.96c.703.268.742 1.277.06 1.6l-7.14 3.387a.86.86 0 0 0-.442.503l-2.325 6.911a.833.833 0 0 1-1.562.071L2.076 3.223c-.305-.7.36-1.433 1.06-1.167Z" /></svg>;
const ForwardRef = forwardRef(IconGuiCursor);
export default ForwardRef;