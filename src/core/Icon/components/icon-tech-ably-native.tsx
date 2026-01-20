import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAblyNative = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_1997" x1={12.515} x2={34.773} y1={40.866} y2={16.145} gradientUnits="userSpaceOnUse"><stop stopColor="#FF5416" /><stop offset={0.254} stopColor="#FF5115" /><stop offset={0.461} stopColor="#FF4712" /><stop offset={0.652} stopColor="#FF350E" /><stop offset={0.833} stopColor="#FF1E08" /><stop offset={1} stopColor="red" /></linearGradient><linearGradient id="paint1_linear_1031_1997" x1={16.832} x2={29.988} y1={42.464} y2={27.853} gradientUnits="userSpaceOnUse"><stop stopColor="#FF5416" /><stop offset={0.254} stopColor="#FF5115" /><stop offset={0.461} stopColor="#FF4712" /><stop offset={0.652} stopColor="#FF350E" /><stop offset={0.833} stopColor="#FF1E08" /><stop offset={1} stopColor="red" /></linearGradient><clipPath id="clip0_1031_1997"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1997)"><path fill="url(#paint0_linear_1031_1997)" d="m23.907 10-13.31 24.362L8 32.542 20.316 10zm.186 0 13.31 24.362L40 32.542 27.683 10h-3.591" /><path fill="url(#paint1_linear_1031_1997)" d="M37.218 34.505 24 24.154 10.782 34.505l2.697 1.889L24 28.158l10.521 8.236z" /><path fill="#03020D" fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechAblyNative);
export default ForwardRef;