import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayFanOut = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<rect width={8} height={8} x={20.002} y={20.422} fill="#FF5416" rx={4} /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M40.84 24.424h-8.42M15.5 24.424H7.158M24.005 41.267v-8.421M24 16.002V7.581M15.583 39.012l4.21-7.293M28.21 17.13l4.212-7.294M9.417 32.847l7.293-4.21M31.294 20.211l7.293-4.21M32.426 38.852l-4.21-7.293M19.79 16.975l-4.211-7.293M38.59 32.686l-7.293-4.21M16.708 20.058l-7.293-4.21" /><rect width={5.053} height={5.053} x={21.473} y={0.423} fill="#FF5416" rx={2.526} /><rect width={5.053} height={5.053} x={21.473} y={43.37} fill="#FF5416" rx={2.526} /><rect width={5.053} height={5.053} x={48} y={21.897} fill="#FF5416" rx={2.526} transform="rotate(90 48 21.897)" /><rect width={5.053} height={5.053} x={5.053} y={21.897} fill="#FF5416" rx={2.526} transform="rotate(90 5.053 21.897)" /><rect width={5.053} height={5.053} x={33.816} y={2.375} fill="#FF5416" rx={2.526} transform="rotate(30 33.816 2.375)" /><rect width={5.053} height={5.053} x={12.342} y={39.569} fill="#FF5416" rx={2.526} transform="rotate(30 12.342 39.569)" /><rect width={5.053} height={5.053} x={46.045} y={34.236} fill="#FF5416" rx={2.526} transform="rotate(120 46.045 34.236)" /><rect width={5.053} height={5.053} x={8.85} y={12.761} fill="#FF5416" rx={2.526} transform="rotate(120 8.85 12.761)" /><rect width={5.053} height={5.053} x={43.523} y={10.238} fill="#FF5416" rx={2.526} transform="rotate(60 43.523 10.238)" /><rect width={5.053} height={5.053} x={6.332} y={31.711} fill="#FF5416" rx={2.526} transform="rotate(60 6.332 31.711)" /><rect width={5.053} height={5.053} x={38.184} y={43.945} fill="#FF5416" rx={2.526} transform="rotate(150 38.184 43.945)" /><rect width={5.053} height={5.053} x={16.711} y={6.75} fill="#FF5416" rx={2.526} transform="rotate(150 16.71 6.75)" /></svg>;
const ForwardRef = forwardRef(IconDisplayFanOut);
export default ForwardRef;