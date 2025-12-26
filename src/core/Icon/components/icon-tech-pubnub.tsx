import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechPubnub = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1908"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1908)"><path fill="#D02129" fillRule="evenodd" d="M0 9.009s7.125-.02 10.469 0a15.8 15.8 0 0 1 4.684.66c2.755.868 4.377 2.868 4.698 5.763.183 1.495.126 3.01-.168 4.488-.559 2.643-2.198 4.299-4.684 5.169a13.3 13.3 0 0 1-4.323.688c-1.262.015-2.525.01-3.788.005h-.001l-1.899-.005h-.447v13.215H0zM4.55 22.46q.078.001.129.009.04.005.077.006.727 0 1.455.004c1.26.005 2.522.01 3.783-.02a11 11 0 0 0 2.178-.281c1.484-.337 2.57-1.15 2.968-2.703a8.9 8.9 0 0 0 .141-3.852c-.277-1.524-1.147-2.549-2.649-2.908a14 14 0 0 0-2.75-.386c-1.164-.044-2.33-.035-3.496-.025q-.732.007-1.465.008c-.12 0-.247 0-.378.017zm39.234 16.534h4.204L48 9.034H44.01v26.128a.56.56 0 0 1-.216-.25Q37.185 22.11 30.595 9.3a.455.455 0 0 0-.475-.291h-6.203q-.082.001-.165.008-.081.009-.161.01v29.945h3.957V12.956a.55.55 0 0 1 .212.234l7.576 14.711q2.777 5.386 5.537 10.782a.494.494 0 0 0 .531.312z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechPubnub);
export default ForwardRef;