import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechJms = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2034"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2034)"><path fill="#03020D" fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" clipRule="evenodd" /><path fill="#000" d="M14.12 31.24c2.62 0 4.58-1.18 4.58-4.36V16.8h-2.58v9.38c0 1.94-.58 2.76-2.18 2.76l-1.66-.34v2.42c.48.1 1.08.22 1.84.22M24.283 31v-8.7l3.5 8.7h2.36l3.5-8.58V31h2.48V16.8h-2.88l-4.28 10.66-4.28-10.66h-2.88V31z" /></g></svg>;
const ForwardRef = forwardRef(IconTechJms);
export default ForwardRef;