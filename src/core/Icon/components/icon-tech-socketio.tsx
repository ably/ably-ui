import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechSocketio = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1953"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#010101" fillRule="evenodd" clipPath="url(#clip0_1031_1953)" clipRule="evenodd"><path d="M36.473 3.476C30.996.092 24.132-.837 17.922.758 8.56 3.086 1.135 11.575.184 21.198c-1.18 9.108 3.414 18.594 11.287 23.297 7.723 4.84 18.184 4.645 25.747-.448 6.795-4.416 11.023-12.468 10.771-20.59-.114-8.04-4.617-15.852-11.516-19.981m7.29 17.9C42.579 9.13 28.557.687 17.125 5.26 8.975 8.115 3.28 16.68 4.074 25.313c.301 10.661 10.572 19.661 21.2 18.602 11.176-.324 20.331-11.52 18.489-22.54" /><path d="M22.499 25.24c2.418 0 4.825 0 7.232.035C24.46 29.529 19.36 33.99 14 38.13c2.806-4.312 5.692-8.579 8.499-12.89M18.073 22.856C23.309 18.578 28.43 14.152 33.78 10c-2.807 4.312-5.693 8.567-8.499 12.879-2.407.011-4.814.011-7.21-.023" /></g></svg>;
const ForwardRef = forwardRef(IconTechSocketio);
export default ForwardRef;