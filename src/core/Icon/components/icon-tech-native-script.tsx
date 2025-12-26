import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechNativeScript = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#fff" d="M3.84 6.835h41.492v35.962H3.84z" /><path fill="#76ABEB" d="M44.485 3.516Q47.872 6.903 48 12v24q-.13 5.098-3.515 8.484-3.388 3.387-8.485 3.517H12q-5.097-.13-8.484-3.517T0 36.001V12q.129-5.099 3.516-8.485T12 0h24q5.098.129 8.485 3.516m-3.31 19.313q-1.132-1.125-1.178-2.825V12q-.036-1.7-1.167-2.83Q37.7 8.04 36 8.005h-3.996v19.993L15.997 8.004H12q-1.7.035-2.83 1.166Q8.04 10.3 8.004 12v8.004q-.046 1.699-1.178 2.825-1.13 1.125-2.83 1.171 1.7.048 2.83 1.172 1.132 1.125 1.178 2.825V36q.035 1.699 1.166 2.83 1.13 1.13 2.83 1.165h3.997V20.004l16.007 19.993H36q1.7-.036 2.83-1.166 1.131-1.132 1.167-2.83v-8.004q.046-1.7 1.177-2.825 1.13-1.125 2.83-1.172-1.7-.047-2.83-1.171" /></svg>;
const ForwardRef = forwardRef(IconTechNativeScript);
export default ForwardRef;