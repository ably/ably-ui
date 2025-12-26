import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiFurtherReading = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1163_95"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs><g stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} clipPath="url(#clip0_1163_95)"><rect width={17} height={17} x={1.65} y={5.429} rx={2.353} /><path d="M5.45 5.243v-1.29c0-1.3 1.054-2.353 2.353-2.353h12.294c1.3 0 2.353 1.053 2.353 2.353v12.294c0 1.3-1.053 2.353-2.353 2.353h-1.29M6.656 9.934h7M6.656 13.934h7M6.656 17.934h4" /></g></svg>;
const ForwardRef = forwardRef(IconGuiFurtherReading);
export default ForwardRef;