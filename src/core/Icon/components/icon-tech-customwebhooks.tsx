import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechCustomwebhooks = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2010"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#03020D" fillRule="evenodd" clipPath="url(#clip0_1031_2010)" clipRule="evenodd"><path d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" /><path d="M35.933 26 29 20.8l1.2-1.6 8 6a1 1 0 0 1 0 1.6l-8 6-1.2-1.6zM11.667 22l6.933-5.2-1.2-1.6-8 6a1 1 0 0 0 0 1.6l8 6 1.2-1.6zM27.96 12.28l-7 24-1.92-.56 7-24z" /></g></svg>;
const ForwardRef = forwardRef(IconTechCustomwebhooks);
export default ForwardRef;