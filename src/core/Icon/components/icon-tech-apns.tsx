import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechApns = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><linearGradient id="paint0_linear_1031_2018" x1={24} x2={24} y1={0} y2={48} gradientUnits="userSpaceOnUse"><stop stopColor="#333132" /><stop offset={1} stopColor="#333132" /></linearGradient><linearGradient id="paint1_linear_1031_2018" x1={32} x2={32} y1={7} y2={25} gradientUnits="userSpaceOnUse"><stop stopColor="#9AFC7E" /><stop offset={1} stopColor="#36D02E" /></linearGradient><linearGradient id="paint2_linear_1031_2018" x1={23} x2={23} y1={16} y2={34} gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset={1} stopColor="#fff" /></linearGradient><linearGradient id="paint3_linear_1031_2018" x1={16} x2={16} y1={23} y2={41} gradientUnits="userSpaceOnUse"><stop stopColor="#3EF1FD" /><stop offset={1} stopColor="#1C5AE1" /></linearGradient><clipPath id="clip0_1031_2018"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2018)"><rect width={48} height={48} fill="url(#paint0_linear_1031_2018)" rx={10} /><rect width={18} height={18} x={23} y={7} fill="url(#paint1_linear_1031_2018)" rx={4} /><rect width={18} height={18} x={14} y={16} fill="url(#paint2_linear_1031_2018)" rx={4} /><rect width={18} height={18} x={7} y={23} fill="url(#paint3_linear_1031_2018)" rx={4} /><circle cx={24} cy={24} r={3} fill="#D72B2E" style={{
      mixBlendMode: "color"
    }} /><circle cx={24} cy={24} r={3} fill="#D72B2E" style={{
      mixBlendMode: "multiply"
    }} /><circle cx={31} cy={17} r={3} fill="#D72B2E" style={{
      mixBlendMode: "color"
    }} /><circle cx={31} cy={17} r={3} fill="#D72B2E" style={{
      mixBlendMode: "multiply"
    }} /><circle cx={40} cy={8} r={3} fill="#D72B2E" style={{
      mixBlendMode: "color"
    }} /><circle cx={40} cy={8} r={3} fill="#D72B2E" style={{
      mixBlendMode: "multiply"
    }} /></g></svg>;
const ForwardRef = forwardRef(IconTechApns);
export default ForwardRef;