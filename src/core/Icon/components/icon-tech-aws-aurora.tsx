import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAwsAurora = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#3B48CC" d="M48 0H0v48h48z" /><path fill="#fff" d="M16.243 18.9c-4.96 0-10.24-1.505-10.24-4.289s5.267-4.288 10.24-4.288 10.24 1.504 10.24 4.288-5.286 4.288-10.24 4.288m0-7.297c-5.12 0-8.96 1.587-8.96 3.008s3.84 3.008 8.96 3.008 8.96-1.587 8.96-3.008c0-1.42-3.846-3.008-8.96-3.008" /><path fill="#fff" d="M26.502 14.803h-1.28v10.88h1.28zM16.237 39.68c-4.954 0-10.24-1.485-10.24-4.243V14.803h1.28V35.45c0 1.408 3.84 2.976 8.96 2.976s8.96-1.568 8.96-2.976v-2.087h1.28v2.087c.025 2.758-5.28 4.23-10.24 4.23" /><path fill="#fff" d="M16.243 26.131c-4.953 0-10.24-1.504-10.24-4.288h1.28c0 1.421 3.84 3.008 8.96 3.008s8.96-1.587 8.96-3.008h1.28c-.013 2.784-5.28 4.288-10.24 4.288M16.288 33.171c-4.954 0-10.24-1.504-10.24-4.288h1.28c0 1.421 3.84 3.008 8.96 3.008a20 20 0 0 0 6.182-.896l.41 1.21a21.2 21.2 0 0 1-6.592.966" /><path fill="#fff" d="M31.264 40.237a.64.64 0 0 1-.64-.64c0-4.397-5.024-9.434-9.44-9.434a.64.64 0 1 1 0-1.28c4.41 0 9.44-5.03 9.44-9.44a.64.64 0 0 1 1.28 0c0 4.41 5.024 9.44 9.44 9.44a.64.64 0 0 1 0 1.28c-4.416 0-9.44 5.024-9.44 9.434a.64.64 0 0 1-.64.64M24.32 29.523a13.13 13.13 0 0 1 6.944 6.957 13.1 13.1 0 0 1 6.963-6.957 13.12 13.12 0 0 1-6.963-6.963 13.15 13.15 0 0 1-6.944 6.963M35.462 14.163h-1.28v3.84h1.28z" /><path fill="#fff" d="M36.742 15.443h-3.84v1.28h3.84zM28.422 7.763h-1.28v3.84h1.28z" /><path fill="#fff" d="M29.702 9.043h-3.84v1.28h3.84z" /></svg>;
const ForwardRef = forwardRef(IconTechAwsAurora);
export default ForwardRef;