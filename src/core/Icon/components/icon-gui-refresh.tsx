import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiRefresh = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs><g clipPath="url(#clip0)"><path fill="currentColor" fillRule="evenodd" d="M10.65.24a1 1 0 0 0-1.3 1.52l1.522 1.305C5.92 3.635 2 7.909 2 13c0 5.472 4.528 10 10 10s10-4.528 10-10a1 1 0 1 0-2 0c0 4.368-3.632 8-8 8s-8-3.632-8-8c0-4.038 3.105-7.448 7.025-7.94L9.293 6.794a1 1 0 1 0 1.414 1.414l3.5-3.5a1 1 0 0 0-.056-1.466z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconGuiRefresh);
export default ForwardRef;