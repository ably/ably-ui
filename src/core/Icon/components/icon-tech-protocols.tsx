import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechProtocols = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1928"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#03020D" clipPath="url(#clip0_1031_1928)"><circle cx={14.5} cy={29.5} r={2.5} /><circle cx={14.5} cy={20.5} r={2.5} /><path d="M27 12h3l-7 24h-3zM33 12h3l-7 24h-3z" /><path fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechProtocols);
export default ForwardRef;