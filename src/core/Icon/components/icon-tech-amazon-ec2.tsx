import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAmazonEc2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#D86613" d="M48 0H0v48h48z" /><path fill="#fff" d="M38.714 25.92h-3.2v-1.28h3.2V9.28h-15.36v3.2h-1.28v-3.2A1.28 1.28 0 0 1 23.354 8h15.36a1.28 1.28 0 0 1 1.28 1.28v15.36a1.28 1.28 0 0 1-1.28 1.28M24.634 40H9.274a1.28 1.28 0 0 1-1.28-1.28V23.36a1.28 1.28 0 0 1 1.28-1.28h3.2v1.28h-3.2v15.36h15.36v-3.2h1.28v3.2a1.28 1.28 0 0 1-1.28 1.28" /><path fill="#fff" d="M34.24 18.24v-1.28h-1.92a1.395 1.395 0 0 0-1.28-1.28v-1.92h-1.28v1.92h-1.92v-1.92h-1.28v1.92h-1.92v-1.92h-1.28v1.92h-1.92v-1.92h-1.28v1.92h-1.92v-1.92h-1.28v1.92a1.396 1.396 0 0 0-1.28 1.28h-1.92v1.28h1.92v1.92h-1.92v1.28h1.92v1.92h-1.92v1.28h1.92v1.92h-1.92v1.28h1.92v1.92h-1.92v1.28h1.92a1.396 1.396 0 0 0 1.28 1.28v1.92h1.28v-1.92h1.92v1.92h1.28v-1.92h1.92v1.92h1.28v-1.92h1.92v1.92h1.28v-1.92h1.92v1.92h1.28v-1.92a1.395 1.395 0 0 0 1.28-1.28h1.92v-1.28h-1.92v-1.92h1.92v-1.28h-1.92v-1.92h1.92v-1.28h-1.92v-1.92h1.92v-1.28h-1.92v-1.92zm-3.2 12.685a.115.115 0 0 1-.115.115h-13.85a.115.115 0 0 1-.115-.115v-13.85a.115.115 0 0 1 .115-.115h13.85a.115.115 0 0 1 .115.115z" /></svg>;
const ForwardRef = forwardRef(IconTechAmazonEc2);
export default ForwardRef;