import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAerospike = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2042"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2042)"><path fill="#B0252A" d="M0 0h48v48H0z" /><path fill="#fff" d="m29.305 17.926-13.72 6.111 13.72 6.152zm-17.256 7.496-3.197-1.369 3.197-1.478 27.099-12.258v3.263l-7.113 3.155v14.647l7.113 3.187v3.114z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAerospike);
export default ForwardRef;