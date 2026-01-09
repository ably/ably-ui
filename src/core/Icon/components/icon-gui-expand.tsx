import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiExpand = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M16.117 16.434a.801.801 0 1 0 1.191 1.072l4.474-4.971a.8.8 0 0 0 .01-1.088l-4.484-4.982a.801.801 0 1 0-1.19 1.072l3.282 3.648H6.246a.801.801 0 0 0 0 1.602H19.4z" clipRule="evenodd" /><path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M2 18.7V5.223" /></svg>;
const ForwardRef = forwardRef(IconGuiExpand);
export default ForwardRef;