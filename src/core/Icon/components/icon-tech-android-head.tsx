import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAndroidHead = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#3DDC84" d="M35.046 30.206a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-22.092 0a1.999 1.999 0 1 1 0-3.998 1.999 1.999 0 0 1 0 3.998m22.81-12.04 3.994-6.918a.83.83 0 1 0-1.44-.832l-4.044 7.005C31.18 16.01 27.706 15.224 24 15.224c-3.707 0-7.18.787-10.273 2.197l-4.045-7.005a.832.832 0 0 0-1.44.83l3.995 6.92C5.377 21.896.687 28.841 0 37.046h48c-.687-8.205-5.378-15.15-12.237-18.88" /></svg>;
const ForwardRef = forwardRef(IconTechAndroidHead);
export default ForwardRef;