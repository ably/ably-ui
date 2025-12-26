import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplaySendReceivedMessages = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#C6CED9" d="m11.984 18.148-.532-.528a.75.75 0 0 1 .532-.222zm22.203-3.09V4.513h1.5v10.545zm0-10.545c0-.531-.27-1.123-.74-1.597-.469-.473-1.052-.743-1.57-.743v-1.5c1.011 0 1.958.503 2.636 1.188s1.174 1.638 1.174 2.652zm-2.31-2.34H7.392v-1.5h24.483zm-24.483 0c-.519 0-1.102.27-1.571.743-.47.474-.74 1.066-.74 1.597h-1.5c0-1.014.495-1.967 1.174-2.652S6.382.673 7.394.673zm4.59 15.975v-.75h19.893v1.5H11.984zm19.892-.75c.519 0 1.102-.27 1.572-.743.468-.474.739-1.066.739-1.597h1.5c0 1.014-.495 1.967-1.174 2.652s-1.625 1.188-2.637 1.188zM5.083 4.513v17.761h-1.5V4.513zm6.901 13.635.533.528-.003.003-.007.008-.03.03-.117.118-.426.43-1.385 1.4a442 442 0 0 0-2.975 3.036l-1.08-1.041c.678-.705 1.92-1.966 2.987-3.048l1.813-1.833.117-.118.03-.03.008-.008.002-.002v-.001zm-4.41 5.553c-.824.854-1.828 1.146-2.709.743-.826-.378-1.282-1.26-1.282-2.17h1.5c0 .45.22.72.406.806.132.06.478.126 1.005-.42z" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M10.148 8.049h18.956M10.245 11.911h12.137" /><path fill="#FF5416" fillRule="evenodd" d="m35.649 40.698.37.373 1.384 1.401a444 444 0 0 1 2.975 3.035c.82.852 1.815 1.137 2.683.74.818-.374 1.272-1.25 1.272-2.159v-17.76c0-1.012-.493-1.962-1.17-2.644-.675-.683-1.617-1.182-2.62-1.182H16.06c-1.004 0-1.945.499-2.621 1.182-.677.682-1.17 1.632-1.17 2.643v10.546c0 1.011.493 1.961 1.17 2.644.676.682 1.617 1.181 2.62 1.181z" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M31.052 29.869H18.915M37.87 33.725H18.914" /></svg>;
const ForwardRef = forwardRef(IconDisplaySendReceivedMessages);
export default ForwardRef;