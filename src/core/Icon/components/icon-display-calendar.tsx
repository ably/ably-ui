import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayCalendar = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M16.75 4a.75.75 0 0 1 .75.75v1.5H31v-1.5a.75.75 0 0 1 1.5 0v1.5H40A4.75 4.75 0 0 1 44.75 11v26A4.75 4.75 0 0 1 40 41.75H8A4.75 4.75 0 0 1 3.25 37V11A4.75 4.75 0 0 1 8 6.25h8v-1.5a.75.75 0 0 1 .75-.75M31 7.75v1.5a.75.75 0 0 0 1.5 0v-1.5H40A3.25 3.25 0 0 1 43.25 11v6.25H4.75V11A3.25 3.25 0 0 1 8 7.75h8v1.5a.75.75 0 0 0 1.5 0v-1.5zm-26.25 11V37A3.25 3.25 0 0 0 8 40.25h32A3.25 3.25 0 0 0 43.25 37V18.75z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayCalendar);
export default ForwardRef;