import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayMapPin = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M10.75 18.08c0-7.346 5.984-13.33 13.33-13.33 7.384 0 13.33 5.983 13.33 13.33 0 2.447-.83 5.254-2.127 8.13-1.293 2.864-3.023 5.74-4.764 8.31a93 93 0 0 1-6.363 8.303l-.037.042-.039-.045a93.682 93.682 0 0 1-6.4-8.317c-1.751-2.572-3.491-5.45-4.79-8.312-1.306-2.874-2.14-5.675-2.14-8.111m12.814 26.424L24.12 44l.556.503a.75.75 0 0 1-1.112 0m0 0L24.12 44c.556.503.557.502.557.502l.002-.002.009-.01.031-.035.054-.06.066-.075q.16-.178.452-.517a94.59 94.59 0 0 0 6.47-8.442c1.769-2.611 3.549-5.565 4.889-8.535 1.335-2.96 2.26-5.993 2.26-8.746 0-8.173-6.614-14.83-14.83-14.83-8.174 0-14.83 6.656-14.83 14.83 0 2.745.93 5.773 2.273 8.73 1.348 2.969 3.138 5.924 4.917 8.537a95 95 0 0 0 6.96 8.974l.121.135.032.035zM16.79 17.24a7.29 7.29 0 1 1 14.58 0 7.29 7.29 0 0 1-14.58 0m7.29-8.79a8.79 8.79 0 1 0 0 17.58 8.79 8.79 0 0 0 0-17.58" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayMapPin);
export default ForwardRef;