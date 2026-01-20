import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAmqp10 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#002B83" d="M2 17.583h15.583l12.834 12.834H2z" /><path fill="#CBCCCE" d="M34.083 2v32.083L46 46V2z" /><path fill="#000" d="M2 34.083h32.083L46 46H2z" /><path fill="#A2B0D7" d="M17.583 2v15.583l12.834 12.834V2z" /><path fill="#000" d="m2 2 11.917 11.917H2z" /><path fill="#CBCCCE" d="M13.917 13.917 2 2h11.917z" /></svg>;
const ForwardRef = forwardRef(IconTechAmqp10);
export default ForwardRef;