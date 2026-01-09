import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayAboutAblyCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" viewBox="0 0 40 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<circle cx={20} cy={20.5} r={16.667} fill="#fff" stroke="#03020D" strokeWidth={1.5} /><path fill="#FF5416" fillRule="evenodd" d="m11.027 27.07 8.826-16.153h-2.381L9.306 25.862zm17.774 0-8.825-16.153h2.38l4.084 7.473 4.082 7.472zM19.914 20.3l8.764 6.864-1.788 1.252-6.976-5.461-6.975 5.46-1.789-1.251z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayAboutAblyCol);
export default ForwardRef;