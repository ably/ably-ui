import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayExactlyOnceDelivery = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_3563_10779"><path fill="#fff" d="M.667.423h48v48h-48z" /></clipPath></defs><g clipPath="url(#clip0_3563_10779)"><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M42.748 28.423c1.636-4.692 1.504-8.168 1.504-8.168V5.511a30.44 30.44 0 0 1-19.937-4.088A33.1 33.1 0 0 1 4.328 5.368l.065 16.206c.85 18.227 19.922 25.862 19.922 25.862a41.7 41.7 0 0 0 6.351-3.575" /><path fill="#FF5416" fillRule="evenodd" d="M31.897 37.84a7.187 7.187 0 1 1 14.373 0 7.187 7.187 0 0 1-14.373 0" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m36.165 37.485 2.31 2.264 3.591-3.726" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M23.1 34.423V16.151l-4.433 2.651v-4.791l4.434-2.588h4.566v23z" /></g></svg>;
const ForwardRef = forwardRef(IconDisplayExactlyOnceDelivery);
export default ForwardRef;