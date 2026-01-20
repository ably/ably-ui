import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconSocialGlassdoor = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#0BAA41" d="M17.122 20.573H3.5A3.414 3.414 0 0 0 6.906 24h10.216c1.88 0 3.403-1.536 3.403-3.427V6.495c0-.068-.054-.129-.122-.129h-3.16a.124.124 0 0 0-.121.125v14.082m0-20.573c1.88 0 3.403 1.536 3.403 3.43H6.906v14.079a.127.127 0 0 1-.125.125H3.625a.127.127 0 0 1-.125-.125V3.43C3.5 1.536 5.022 0 6.906 0z" /></svg>;
const ForwardRef = forwardRef(IconSocialGlassdoor);
export default ForwardRef;