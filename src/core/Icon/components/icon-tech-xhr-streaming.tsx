import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechXhrStreaming = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2008"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2008)"><path fill="#03020D" fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" clipRule="evenodd" /><path fill="#000" d="m13.02 31 3.5-5.54L20.04 31h3.08l-4.86-7.36 4.48-6.84H19.7l-3.18 5.04-3.18-5.04H10.3l4.48 6.84L9.94 31zM27.227 31v-5.96h7.2V31h2.58V16.8h-2.58v5.9h-7.2v-5.9h-2.58V31z" /></g></svg>;
const ForwardRef = forwardRef(IconTechXhrStreaming);
export default ForwardRef;