import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconProductAssetTracking = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="none" viewBox="0 0 128 128" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_3807_424" x1={64} x2={64} y1={26.421} y2={111.391} gradientUnits="userSpaceOnUse"><stop stopColor="#FF5416" /><stop offset={1} stopColor="#FF2739" /></linearGradient></defs><path fill="url(#paint0_linear_3807_424)" fillRule="evenodd" d="M72.208 116.222C85.188 101.747 109 72.533 109 53c0-24.853-20.147-45-45-45S19 28.147 19 53c0 19.533 23.811 48.747 36.792 63.222 4.435 4.945 11.98 4.945 16.416 0M64 71c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconProductAssetTracking);
export default ForwardRef;