import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconSocialYoutube = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#ED1D24" d="M23.499 6.131a3.01 3.01 0 0 0-2.122-2.128C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.503A3.01 3.01 0 0 0 .502 6.131C0 8.01 0 11.925 0 11.925s0 3.917.502 5.795a3.01 3.01 0 0 0 2.121 2.128c1.872.503 9.377.503 9.377.503s7.505 0 9.377-.503a3.01 3.01 0 0 0 2.122-2.128C24 15.842 24 11.926 24 11.926s0-3.917-.502-5.795" /><path fill="#fff" d="m9.545 15.482 6.273-3.556-6.273-3.557z" /></svg>;
const ForwardRef = forwardRef(IconSocialYoutube);
export default ForwardRef;