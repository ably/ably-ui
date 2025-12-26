import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiMouse = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M12 .25A7.75 7.75 0 0 0 4.25 8v8a7.75 7.75 0 0 0 15.5 0V8A7.75 7.75 0 0 0 12 .25M5.75 8a6.25 6.25 0 1 1 12.5 0v8a6.25 6.25 0 1 1-12.5 0zM12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconGuiMouse);
export default ForwardRef;