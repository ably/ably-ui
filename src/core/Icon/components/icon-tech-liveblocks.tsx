import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechLiveblocks = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M32.105 11.306H1.248l9.143 9.143v12.57zM16.106 36.448h30.856l-9.142-9.143v-12.57z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconTechLiveblocks);
export default ForwardRef;