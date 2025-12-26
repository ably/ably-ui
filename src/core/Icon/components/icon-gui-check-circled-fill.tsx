import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiCheckCircledFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12" clipRule="evenodd" /><path fill="var(--ui-icon-secondary-color)" fillRule="evenodd" d="m17.832 7.555-6.667 10-1.613.07-3.333-4.167 1.562-1.25 2.479 3.1 5.908-8.863z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconGuiCheckCircledFill);
export default ForwardRef;