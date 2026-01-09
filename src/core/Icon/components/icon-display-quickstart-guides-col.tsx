import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayQuickstartGuidesCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" viewBox="0 0 40 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M9.166 10.5h-.833c-1.25 0-2.5 1.25-2.5 2.5v21.667c0 1.25 1.25 2.5 2.5 2.5H25c1.25 0 2.5-1.25 2.5-2.5v-.834" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M12.5 7.167h-.834c-1.25 0-2.5 1.25-2.5 2.5v21.666c0 1.25 1.25 2.5 2.5 2.5h16.667c1.25 0 2.5-1.25 2.5-2.5V30.5" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M24.802 3.833h-9.385c-1.667 0-2.917 1.38-2.917 2.917v20.833c0 1.667 1.25 2.917 2.917 2.917H31.25c1.667 0 2.917-1.25 2.917-2.917V13.146" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M26.34 14.667a5.833 5.833 0 1 1-6.013 0M23.333 19.667v-7.084" /><path fill="#FF5416" fillRule="evenodd" d="M33.828 9.377c.722.722.21 1.956-.81 1.956H29.36a3.11 3.11 0 0 1-3.11-3.11V4.565c0-1.021 1.234-1.532 1.956-.81z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayQuickstartGuidesCol);
export default ForwardRef;