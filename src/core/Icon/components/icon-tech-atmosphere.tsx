import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAtmosphere = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1958"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1958)"><path fill="#03020D" fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" clipRule="evenodd" /><path fill="#000" d="m14.86 31 1.06-2.74h6L23 31h2.84l-5.6-14.2H17.6L12 31zm4.06-10.9 2.12 5.78h-4.26zM31.26 31V19.14h3.86V16.8h-10.3v2.34h3.86V31z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAtmosphere);
export default ForwardRef;