import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAwslambda = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2012"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2012)"><path fill="#D86613" d="M48 0H0v48h48z" /><path fill="#fff" d="M38.72 40h-7.885a.64.64 0 0 1-.576-.365L19.11 16.32h-4.716a.64.64 0 0 1-.64-.64V8.64a.64.64 0 0 1 .64-.64h9.856a.64.64 0 0 1 .576.365L35.923 31.68h2.797a.64.64 0 0 1 .64.64v7.04a.64.64 0 0 1-.64.64m-7.482-1.28h6.842v-5.76h-2.56a.64.64 0 0 1-.576-.365L23.846 9.28H15.04v5.76h4.48a.64.64 0 0 1 .576.365z" /><path fill="#fff" d="M17.587 40h-8.32a.64.64 0 0 1-.544-.3.64.64 0 0 1-.032-.64l8.704-18.183a.64.64 0 0 1 1.152-.007l4.167 8.57a.64.64 0 0 1 0 .557l-4.544 9.6a.64.64 0 0 1-.583.403m-7.296-1.28h6.893l4.243-8.96-3.45-7.136z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAwslambda);
export default ForwardRef;