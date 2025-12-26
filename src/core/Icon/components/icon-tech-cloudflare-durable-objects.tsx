import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechCloudflareDurableObjects = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_3578_76"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#2151CD" fillRule="evenodd" clipPath="url(#clip0_3578_76)" clipRule="evenodd"><path d="M29.396.945a.5.5 0 0 1 .7.097l17.281 22.86a1 1 0 0 1-.013 1.224L30.075 47.003a.5.5 0 0 1-.702.082l-2.746-2.17a.5.5 0 0 1-.082-.702l15.372-19.451a.5.5 0 0 0 .006-.612L26.507 3.756a.5.5 0 0 1 .097-.7z" /><path d="M20.396.945a.5.5 0 0 1 .7.097l17.515 23.17a.5.5 0 0 1-.007.61l-17.529 22.18a.5.5 0 0 1-.702.083l-2.746-2.17a.5.5 0 0 1-.082-.702l15.372-19.451a.5.5 0 0 0 .006-.612L17.507 3.756a.5.5 0 0 1 .097-.7z" /><path d="M15.082 5.829a.5.5 0 0 0-.798 0L.39 24.21a.5.5 0 0 0 .007.612l13.837 17.525a.5.5 0 0 0 .785 0l2.24-2.827a.5.5 0 0 0 0-.62L6.084 24.76a.5.5 0 0 1-.006-.611L17.276 9.337a.5.5 0 0 0 0-.603z" /></g></svg>;
const ForwardRef = forwardRef(IconTechCloudflareDurableObjects);
export default ForwardRef;