import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAzurefunctions = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_1934" x1={23.344} x2={23.344} y1={44.504} y2={1.931} gradientUnits="userSpaceOnUse"><stop stopColor="#FEA11B" /><stop offset={0.28} stopColor="#FEA51A" /><stop offset={0.55} stopColor="#FEB018" /><stop offset={0.8} stopColor="#FFC314" /><stop offset={1} stopColor="#FFD70F" /></linearGradient><clipPath id="clip0_1031_1934"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1934)"><path fill="#50E6FF" d="m46.133 21.333 1.6 1.6a1.63 1.63 0 0 1 0 2.134L36 36.8a.8.8 0 0 1-1.067 0l-1.6-1.6a.8.8 0 0 1 0-1.067zM14.667 34.933l-1.6 1.6a.8.8 0 0 1-1.067 0L.533 25.067a1.63 1.63 0 0 1 0-2.134l1.334-1.6 12.8 12.8c0 .267.266.534 0 .8" /><path fill="#1490DF" d="m12.8 11.467 1.6 1.6a.8.8 0 0 1 0 1.066L2.133 26.4l-1.6-1.6a1.63 1.63 0 0 1 0-2.133L12 11.2a.99.99 0 0 1 .8.267M47.467 24.8l-1.6 1.6-12.534-12.533a.8.8 0 0 1 0-1.067l1.6-1.6a.8.8 0 0 1 1.067 0l11.467 11.467a1.63 1.63 0 0 1 0 2.133" /><path fill="url(#paint0_linear_1031_1934)" d="M22.133 26.4h-9.6a.59.59 0 0 1-.533-.533V25.6L23.467 2.933c.266 0 .266-.266.533-.266h11.2a.586.586 0 0 1 .533.533v.267L22.4 21.333h13.067a.59.59 0 0 1 .533.534c0 .266 0 .266-.267.266L13.867 44.8c-.267 0-1.6 1.333-1.067-.533z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAzurefunctions);
export default ForwardRef;