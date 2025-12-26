import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAssemblyai = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#213ED7" d="M21.19 3.49a7.28 7.28 0 0 0-6.786 4.649L.317 44.466h10.701l11.088-28.594h.005a1.89 1.89 0 0 1 3.51 0h1.477v-5.8h-2.743l2.553-6.582z" /><path fill="#566DE8" d="M14.405 8.14a7.28 7.28 0 0 1 6.42-4.64l-.003-.01h5.901a7.28 7.28 0 0 1 6.786 4.649l14.087 36.327H36.712L23.052 9.239a4.98 4.98 0 0 0-9.079.013z" /></svg>;
const ForwardRef = forwardRef(IconTechAssemblyai);
export default ForwardRef;