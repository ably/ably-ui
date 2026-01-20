import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAwssqs = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_3698_16311" x1={-11.622} x2={59.623} y1={56.572} y2={-7.577} gradientUnits="userSpaceOnUse"><stop stopColor="#B0084D" /><stop offset={1} stopColor="#FF4F8B" /></linearGradient><clipPath id="clip0_3698_16311"><path fill="#fff" d="M0 .5h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_3698_16311)"><path fill="url(#paint0_linear_3698_16311)" d="M48 .5H0v48h48z" /><path fill="#fff" d="M13.881 14.58a14.196 14.196 0 0 1 23.424 5.35l1.21-.422a15.475 15.475 0 0 0-29.216 0l1.21.423a14 14 0 0 1 3.372-5.35M33.92 34.42a14.2 14.2 0 0 1-20.07 0 14.1 14.1 0 0 1-3.373-5.389l-1.21.423a15.475 15.475 0 0 0 25.556 5.868 15.3 15.3 0 0 0 3.699-5.92l-1.21-.41a14.1 14.1 0 0 1-3.392 5.428M12.896 24.475a3.738 3.738 0 1 0-1.094 2.636 3.7 3.7 0 0 0 1.094-2.636m-2.016 1.734a2.515 2.515 0 0 1-3.462 0 2.451 2.451 0 0 1 1.728-4.18 2.47 2.47 0 0 1 1.734.718 2.45 2.45 0 0 1 0 3.462M41.472 21.883a3.725 3.725 0 1 0-5.268 5.267 3.725 3.725 0 0 0 5.268-5.267m-.909 4.358a2.445 2.445 0 0 1-3.456-3.456 2.445 2.445 0 1 1 3.456 3.456" /><path fill="#fff" d="M18.675 30.696c2.624-2.625 7.968-2.625 10.592 0a.64.64 0 0 0 .901-.002.64.64 0 0 0 .14-.699.6.6 0 0 0-.138-.208 7.46 7.46 0 0 1-1.92-5.293 7.47 7.47 0 0 1 1.92-5.293.64.64 0 0 0 0-.902.64.64 0 0 0-.903 0c-2.624 2.617-7.968 2.617-10.592 0a.64.64 0 0 0-.902 0 .64.64 0 0 0 0 .902 7.47 7.47 0 0 1 1.952 5.293 7.46 7.46 0 0 1-1.952 5.293.64.64 0 0 0-.138.7.64.64 0 0 0 1.04.209m1.658-9.83a9.98 9.98 0 0 0 7.277 0 10.15 10.15 0 0 0 0 7.263 9.98 9.98 0 0 0-7.277 0 10.15 10.15 0 0 0 0-7.264" /><path fill="#fff" d="m31.763 27.118 2.157-2.183a.64.64 0 0 0 0-.902l-2.17-2.17-.909.903 1.095 1.088h-2.893v1.28h2.893l-1.082 1.081zM16.295 27.13l2.182-2.182a.64.64 0 0 0 0-.902l-2.182-2.183-.903.903 1.088 1.088h-2.796v1.28h2.796l-1.088 1.094z" /></g></svg>;
const ForwardRef = forwardRef(IconTechAwssqs);
export default ForwardRef;