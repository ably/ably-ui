import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplaySomethingElseMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={46} height={48} fill="none" viewBox="0 0 46 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeWidth={1.5} d="M21 2.155a4 4 0 0 1 4 0l15.919 9.19a4 4 0 0 1 2 3.464v18.382a4 4 0 0 1-2 3.464L25 45.845a4 4 0 0 1-4 0l-15.919-9.19a4 4 0 0 1-2-3.464V14.809a4 4 0 0 1 2-3.464z" /><path fill="currentColor" d="M24.063 29.21v-1.797c0-4.693 4.937-3.84 4.937-9.05C29 15.042 26.488 13 23.312 13c-1.703 0-3.493.67-5.312 1.493v2.62l5.14-1.858c2.193 0 3.55 1.31 3.55 3.2 0 3.686-4.995 3.077-4.735 8.866l.087 1.89zm.635 5.79v-3.352h-3.233V35z" /></svg>;
const ForwardRef = forwardRef(IconDisplaySomethingElseMono);
export default ForwardRef;