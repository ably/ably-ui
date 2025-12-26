import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechTerraformOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" d="m22.562 11.808-6.542 3.784V8.02l6.541-3.792zM17.52 8.883v4.108l3.541-2.05v-4.11zM15.302 8.02v7.572L8.76 11.804V4.228zm-5.042 2.919 3.542 2.052V8.884L10.26 6.831zM15.302 16.424V24L8.76 20.212v-7.576zm-5.042 2.923 3.542 2.051v-4.11l-3.542-2.05zM8.042 3.788v7.576L1.5 7.576V0zM3 6.711l3.542 2.052v-4.11L3 2.601z" /></svg>;
const ForwardRef = forwardRef(IconTechTerraformOutline);
export default ForwardRef;