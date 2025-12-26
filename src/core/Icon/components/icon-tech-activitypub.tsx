import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechActivitypub = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1887_138" x1={358.423} x2={363.994} y1={-166.639} y2={-166.639} gradientUnits="userSpaceOnUse"><stop stopColor="#F1007E" /></linearGradient><linearGradient id="paint1_linear_1887_138" x1={358.425} x2={363.997} y1={-166.639} y2={-166.639} gradientUnits="userSpaceOnUse"><stop stopColor="#F1007E" /></linearGradient><linearGradient id="paint2_linear_1887_138" x1={0} x2={21.818} y1={24.116} y2={24.116} gradientUnits="userSpaceOnUse"><stop stopColor="#6D6D6D" /></linearGradient><clipPath id="clip0_1887_138"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fillRule="evenodd" clipPath="url(#clip0_1887_138)" clipRule="evenodd"><path fill="url(#paint0_linear_1887_138)" d="M26.182 9 48 21.597v5.038L26.182 39.232v-5.038l17.454-10.078L26.182 14.04z" /><path fill="url(#paint1_linear_1887_138)" d="m26.182 19.078 8.727 5.038-8.727 5.039z" /><path fill="url(#paint2_linear_1887_138)" d="M21.818 9 0 21.597v5.038l17.454-10.077v20.155l4.364 2.52zm-8.727 15.116-8.728 5.039 8.728 5.038z" /></g></svg>;
const ForwardRef = forwardRef(IconTechActivitypub);
export default ForwardRef;