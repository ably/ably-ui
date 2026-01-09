import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiHistory = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a1 1 0 1 1 2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0a1 1 0 1 1 0 2m0 2a1 1 0 0 1 1 1v6.08a1 1 0 0 0 .35.76l2.8 2.4a1 1 0 0 1-1.3 1.52l-2.802-2.402A3 3 0 0 1 11 11.08V5a1 1 0 0 1 1-1m7.75 1.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M22 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconGuiHistory);
export default ForwardRef;