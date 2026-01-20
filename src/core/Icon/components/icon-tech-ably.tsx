import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAbly = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_1947" x1={6.772} x2={40.16} y1={50.299} y2={13.217} gradientUnits="userSpaceOnUse"><stop stopColor="#FF5416" /><stop offset={0.254} stopColor="#FF5115" /><stop offset={0.461} stopColor="#FF4712" /><stop offset={0.652} stopColor="#FF350E" /><stop offset={0.833} stopColor="#FF1E08" /><stop offset={1} stopColor="red" /></linearGradient><linearGradient id="paint1_linear_1031_1947" x1={13.248} x2={32.982} y1={52.695} y2={30.779} gradientUnits="userSpaceOnUse"><stop stopColor="#FF5416" /><stop offset={0.254} stopColor="#FF5115" /><stop offset={0.461} stopColor="#FF4712" /><stop offset={0.652} stopColor="#FF350E" /><stop offset={0.833} stopColor="#FF1E08" /><stop offset={1} stopColor="red" /></linearGradient></defs><path fill="url(#paint0_linear_1031_1947)" d="M23.86 4 3.896 40.543 0 37.812 18.474 4zm.28 0 19.965 36.543L48 37.812 29.525 4h-5.387z" /><path fill="url(#paint1_linear_1031_1947)" d="M43.827 40.757 24 25.231 4.172 40.757l4.046 2.834 15.78-12.354L39.78 43.591l4.046-2.834z" /></svg>;
const ForwardRef = forwardRef(IconTechAbly);
export default ForwardRef;