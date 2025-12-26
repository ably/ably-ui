import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechDiffusionData = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#00AEEF" d="M27.823 0h-7.636v24.89h7.636z" /><path fill="#00AEEF" d="m38.236 5.402-.81-.59-4.618 5.99.838.604c4.21 3.029 6.719 7.886 6.719 12.99 0 8.872-7.34 16.094-16.362 16.094S7.638 33.27 7.638 24.395c0-5.103 2.513-9.96 6.721-12.989l.838-.604-4.618-5.99-.812.59C3.653 9.846 0 16.947 0 24.395 0 37.412 10.766 48 24 48s24-10.59 24-23.604c.005-7.449-3.646-14.55-9.764-18.994" /></svg>;
const ForwardRef = forwardRef(IconTechDiffusionData);
export default ForwardRef;