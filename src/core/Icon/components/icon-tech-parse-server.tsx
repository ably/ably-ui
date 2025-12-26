import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechParseServer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#169CEE" d="M28 29.84H16.2c-1.72 0-2.72 1.06-2.72 2.58 0 1.36.92 2.32 2.24 2.32 1.54 0 2.42-1.06 2.5-2.58h3.42c-.18 3.72-2.5 5.7-5.96 5.7-3.24 0-5.66-2.2-5.66-5.48 0-3.42 2.54-5.8 6.36-5.8h11.68c3.94 0 6.94-2.9 6.94-6.8 0-3.94-2.68-6.72-6.5-6.72-3.78 0-6.84 2.76-6.84 7.86v3.34H18.2v-3.34c0-6.76 4.34-11.14 10.36-11.14 5.74 0 9.92 4.12 9.92 9.96.04 5.84-4.44 10.1-10.48 10.1M24 48c13.42 0 24-10.62 24-24S37.42 0 24 0 0 10.66 0 24c0 13.38 10.58 24 24 24" /></svg>;
const ForwardRef = forwardRef(IconTechParseServer);
export default ForwardRef;