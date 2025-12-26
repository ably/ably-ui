import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechVuejs = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#41B883" d="M29.542 3 24 12.6 18.457 3H0l24 41.57L48 3z" /><path fill="#34495E" d="M29.543 3 24 12.6 18.458 3H9.6L24 27.941 38.4 3z" /></svg>;
const ForwardRef = forwardRef(IconTechVuejs);
export default ForwardRef;