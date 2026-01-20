import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechZeromq = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1935"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="red" clipPath="url(#clip0_1031_1935)"><path fillRule="evenodd" d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24m0-9c8.284 0 15-6.716 15-15S32.284 9 24 9 9 15.716 9 24s6.716 15 15 15" clipRule="evenodd" /><path d="M1 41 40.598 1.402l6.364 6.364L7.364 47.364z" /></g></svg>;
const ForwardRef = forwardRef(IconTechZeromq);
export default ForwardRef;