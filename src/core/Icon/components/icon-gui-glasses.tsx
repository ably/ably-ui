import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiGlasses = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M2.35 5.5a1.75 1.75 0 1 1 3.5 0V7a.75.75 0 1 0 1.5 0V5.5a3.25 3.25 0 0 0-6.5 0V18a.75.75 0 0 0 1.4.374V19A2.75 2.75 0 0 0 5 21.75h3A2.75 2.75 0 0 0 10.75 19v-.25h2.5V19A2.75 2.75 0 0 0 16 21.75h3A2.75 2.75 0 0 0 21.75 19v-.625a.75.75 0 0 0 1.4-.375V5.5a3.25 3.25 0 1 0-6.5 0V7a.75.75 0 0 0 1.5 0V5.5a1.75 1.75 0 1 1 3.5 0v10.762A2.75 2.75 0 0 0 19 14.25h-3A2.75 2.75 0 0 0 13.25 17v.25h-2.5V17A2.75 2.75 0 0 0 8 14.25H5a2.75 2.75 0 0 0-2.65 2.012zM3.75 17c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25zM16 15.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconGuiGlasses);
export default ForwardRef;