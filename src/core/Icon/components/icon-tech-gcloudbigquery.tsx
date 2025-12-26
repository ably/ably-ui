import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechGcloudbigquery = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#AECBFA" fillRule="evenodd" d="M11.351 21.191v6.312a11.8 11.8 0 0 0 4.104 4.176V21.19z" clipRule="evenodd" /><path fill="#669DF6" fillRule="evenodd" d="M18.935 15.383v18.071c.883.113 1.774.161 2.664.144q1.2.075 2.4 0V15.383z" clipRule="evenodd" /><path fill="#AECBFA" fillRule="evenodd" d="M27.935 23.663v7.896a12 12 0 0 0 4.08-4.368v-3.528z" clipRule="evenodd" /><path fill="#4285F4" fillRule="evenodd" d="m37.774 34.366-3.408 3.408a1.01 1.01 0 0 0 0 1.44l8.496 8.495a1.01 1.01 0 0 0 1.416 0l3.432-3.431a1.01 1.01 0 0 0 0-1.416l-8.496-8.496a1.01 1.01 0 0 0-1.44 0" clipRule="evenodd" /><path fill="#669DF6" fillRule="evenodd" d="M21.599 0a21.599 21.599 0 1 0 0 43.198 21.599 21.599 0 0 0 0-43.198m0 37.654a16.031 16.031 0 1 1 .048-32.062 16.031 16.031 0 0 1-.048 32.062" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconTechGcloudbigquery);
export default ForwardRef;