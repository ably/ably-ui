import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechDesignPatterns = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M41.785 12.577 25 2.887a2 2 0 0 0-2 0l-16.785 9.69a2 2 0 0 0-1 1.732V33.69a2 2 0 0 0 1 1.733L23 45.113a2 2 0 0 0 2 0l16.785-9.69a2 2 0 0 0 1-1.733V14.31a2 2 0 0 0-1-1.733M26 1.155a4 4 0 0 0-4 0l-16.785 9.69a4 4 0 0 0-2 3.464V33.69a4 4 0 0 0 2 3.465L22 46.845a4 4 0 0 0 4 0l16.785-9.69a4 4 0 0 0 2-3.465V14.31a4 4 0 0 0-2-3.465z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M36.589 15.577 25 8.887a2 2 0 0 0-2 0l-11.588 6.69a2 2 0 0 0-1 1.732V30.69a2 2 0 0 0 1 1.732L23 39.114a2 2 0 0 0 2 0l11.589-6.69a2 2 0 0 0 1-1.733V17.31a2 2 0 0 0-1-1.733M26 7.155a4 4 0 0 0-4 0l-11.588 6.69a4 4 0 0 0-2 3.464V30.69a4 4 0 0 0 2 3.464L22 40.846a4 4 0 0 0 4 0l11.589-6.69a4 4 0 0 0 2-3.465V17.31a4 4 0 0 0-2-3.465z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M31.392 18.577 25 14.887a2 2 0 0 0-2 0l-6.392 3.69a2 2 0 0 0-1 1.732v7.381a2 2 0 0 0 1 1.732L23 33.114a2 2 0 0 0 2 0l6.392-3.69a2 2 0 0 0 1-1.733v-7.38a2 2 0 0 0-1-1.733M26 13.155a4 4 0 0 0-4 0l-6.392 3.69a4 4 0 0 0-2 3.464v7.381a4 4 0 0 0 2 3.465L22 34.845a4 4 0 0 0 4 0l6.392-3.69a4 4 0 0 0 2-3.465v-7.38a4 4 0 0 0-2-3.465z" clipRule="evenodd" /><path fill="#03020D" d="M22 19.155a4 4 0 0 1 4 0l1.196.69a4 4 0 0 1 2 3.464v1.381a4 4 0 0 1-2 3.465l-1.196.69a4 4 0 0 1-4 0l-1.196-.69a4 4 0 0 1-2-3.465v-1.38a4 4 0 0 1 2-3.465z" /></svg>;
const ForwardRef = forwardRef(IconTechDesignPatterns);
export default ForwardRef;