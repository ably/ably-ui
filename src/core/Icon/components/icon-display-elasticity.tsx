import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayElasticity = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M46.499 8.923v32M42.499 12.923v24M38.499 15.923v18M34.499 19.923v10" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M30.499 21.923v6M26.499 22.923v4" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.499 40.923v-32M6.499 36.923v-24M10.499 33.923v-18M14.499 29.923v-10" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.499 27.923v-6M22.499 26.923v-4" /><path fill="#FF5416" fillRule="evenodd" d="M23.752 4.387a.75.75 0 0 1 1.05 0l3.222 3.16a.75.75 0 0 1-.525 1.285h-1.321v5.35h1.321a.75.75 0 0 1 .51 1.299l-3.221 2.991a.75.75 0 0 1-1.021 0l-3.222-2.991a.75.75 0 0 1 .51-1.3h1.321v-5.35h-1.32a.75.75 0 0 1-.526-1.285z" clipRule="evenodd" /><path fill="#FF5416" d="M23.752 31.387a.75.75 0 0 1 1.05 0l3.222 3.16a.75.75 0 0 1-.525 1.285h-1.321v5.35h1.321a.75.75 0 0 1 .51 1.299l-3.221 2.991a.75.75 0 0 1-1.021 0l-3.222-2.991a.75.75 0 0 1 .51-1.3h1.321v-5.35h-1.32a.75.75 0 0 1-.526-1.285z" /></svg>;
const ForwardRef = forwardRef(IconDisplayElasticity);
export default ForwardRef;