import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayMessage = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M5 7.25A4.75 4.75 0 0 0 .25 12v24A4.75 4.75 0 0 0 5 40.75h38A4.75 4.75 0 0 0 47.75 36V12A4.75 4.75 0 0 0 43 7.25zM3.366 9.19c.48-.28 1.038-.44 1.634-.44h38c.602 0 1.165.164 1.649.449L24.653 24.075zM2.262 10.25A3.24 3.24 0 0 0 1.75 12v24A3.25 3.25 0 0 0 5 39.25h38A3.25 3.25 0 0 0 46.25 36V12c0-.642-.186-1.241-.508-1.745L25.114 25.602a.75.75 0 0 1-.877.013z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayMessage);
export default ForwardRef;