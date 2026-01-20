import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechScaledrone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_1994" x1={36.045} x2={12.607} y1={44.823} y2={4.306} gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity={0} /><stop offset={0.475} stopColor="#6466BB" /><stop offset={1} stopColor="#fff" stopOpacity={0} /></linearGradient><clipPath id="clip0_1031_1994"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1994)"><path fill="url(#paint0_linear_1031_1994)" d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24" opacity={0.5} /><path fill="#6466BB" d="m38.55 15.6 6.244-3.6C39.169 2.25 26.68-1.106 16.93 4.538 7.181 10.163 3.825 22.65 9.47 32.4L3.206 36c5.625 9.75 18.113 13.106 27.863 7.463C40.838 37.838 44.175 25.35 38.55 15.6" /></g></svg>;
const ForwardRef = forwardRef(IconTechScaledrone);
export default ForwardRef;