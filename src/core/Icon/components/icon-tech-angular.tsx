import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAngular = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#DD0031" d="M24.344 0 2 7.968l3.408 29.544L24.344 48 43.28 37.512l3.408-29.544z" /><path fill="#C3002F" d="M24.344 0v5.328-.024V48L43.28 37.512l3.408-29.544z" /><path fill="#fff" d="m24.344 5.304-13.968 31.32h5.208l2.808-7.008h11.856l2.808 7.008h5.208zm4.08 19.992h-8.16l4.08-9.816z" /></svg>;
const ForwardRef = forwardRef(IconTechAngular);
export default ForwardRef;