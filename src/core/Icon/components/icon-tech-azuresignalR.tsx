import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAzuresignalR = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2000"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2000)"><path fill="#59B4D9" d="m19.315 35.143 2.693-6.55h5.89c2.16 0 4.066-1.541 4.387-3.678a4.352 4.352 0 0 0-4.29-5.001H8.466l10.85-10.849v4.245h8.647c5.165 0 10.14 4.16 10.882 9.272A10.85 10.85 0 0 1 28.558 35.07l8.879 8.88a24 24 0 1 0-13.682 4.293c2.55.003 5.082-.415 7.496-1.237z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAzuresignalR);
export default ForwardRef;