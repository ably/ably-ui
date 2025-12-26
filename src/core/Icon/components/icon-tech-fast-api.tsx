import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechFastApi = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2005"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2005)"><path fill="#05988A" d="M24 0C10.75 0 0 10.75 0 24s10.75 24 24 24 24-10.75 24-24S37.25 0 24 0m-1.25 43.239V28.184h-8.37L26.406 4.762v15.054h8.056z" /><path fill="#fff" d="M22.75 43.239V28.185h-8.37L26.406 4.762v15.054h8.056z" /></g></svg>;
const ForwardRef = forwardRef(IconTechFastApi);
export default ForwardRef;