import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechGcloudpubsub = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_1898" x1={0.037} x2={0.037} y1={3} y2={45.658} gradientUnits="userSpaceOnUse"><stop stopColor="#4387FD" /><stop offset={1} stopColor="#4683EA" /></linearGradient></defs><path fill="url(#paint0_linear_1031_1898)" d="M10.422 43.568.578 26.518a4.31 4.31 0 0 1 0-4.312l9.844-17.05A4.31 4.31 0 0 1 14.156 3h19.688c1.54 0 2.964.822 3.734 2.156l9.844 17.05a4.31 4.31 0 0 1 0 4.312l-9.844 17.05a4.31 4.31 0 0 1-3.734 2.157H14.156a4.31 4.31 0 0 1-3.734-2.157" /><path fill="#000" d="M45.395 30.205 33.457 18.267l-2.197.456-5.476-5.476-1.752 3.277-.95 3.79 1.608 1.61-3.09.63-4.236-4.236-2.876 2.765 5.297 5.296-5.614 4.463 15.072 15.072 7.343-.071z" opacity={0.07} /><circle cx={24} cy={33.68} r={1.997} fill="#fff" /><path fill="#fff" d="m24.46 23.564 8.07 4.659-.922 1.596-8.07-4.66z" /><circle cx={32.07} cy={29.021} r={2.534} fill="#fff" /><path fill="#fff" d="m24.461 25.161-8.07 4.66-.92-1.597 8.069-4.659z" /><circle cx={15.93} cy={29.021} r={2.534} fill="#fff" /><circle cx={32.07} cy={19.703} r={1.996} fill="#fff" /><circle cx={15.93} cy={19.703} r={1.996} fill="#fff" /><path fill="#fff" d="M23.078 15.044h1.843v9.318h-1.843z" /><circle cx={24} cy={24.362} r={3.226} fill="#fff" /><circle cx={24} cy={15.044} r={2.535} fill="#fff" /></svg>;
const ForwardRef = forwardRef(IconTechGcloudpubsub);
export default ForwardRef;