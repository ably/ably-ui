import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayPlay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M38.17 24 10.5 6.706v34.588zm1.473.848a1 1 0 0 0 0-1.696L10.53 4.956A1 1 0 0 0 9 5.804v36.392a1 1 0 0 0 1.53.848z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayPlay);
export default ForwardRef;