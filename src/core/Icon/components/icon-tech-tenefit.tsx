import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechTenefit = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1891"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1891)"><rect width={48} height={48} fill="#3367C6" rx={4} /><path fill="#FEFEFE" d="M29.562 7H18.438l-9 6.538L6 24.118l3.439 10.58 8.999 6.539h11.124l9-6.538L42 24.119l-3.439-10.58z" /><path fill="#91C9FD" d="M26.458 16.554h-4.916l-3.977 2.89-1.52 4.675 1.52 4.676 3.977 2.89h4.916l3.978-2.89 1.518-4.676-1.518-4.676zM31.539 28.86l1.298-4.213 7.345.248-2.537 8.23z" /><path fill="#196FC5" d="m27.463 32.265 3.56-2.6 5.739 4.59-6.955 5.08z" /><path fill="#56ACFC" d="M21.708 32.666h4.41l1.926 7.092h-8.612z" /><path fill="#91C9FD" d="m16.438 28.86-1.298-4.213-7.346.248 2.538 8.23z" /><path fill="#196FC5" d="m20.502 32.24-3.578-2.576-5.708 4.631 6.99 5.032z" /><path fill="#91C9FD" d="M26.03 15.57h-4.41L19.693 8.48h8.614z" /><path fill="#196FC5" d="m30.662 18.45-3.513-2.662 2.747-6.816 6.864 5.201z" /><path fill="#56ACFC" d="m32.953 23.372-1.254-4.227 6.252-3.864 2.448 8.257z" /><path fill="#196FC5" d="m17.314 18.45 3.513-2.662-2.745-6.816-6.866 5.201z" /><path fill="#56ACFC" d="m15.024 23.372 1.253-4.227-6.25-3.864-2.45 8.257z" /></g></svg>;
const ForwardRef = forwardRef(IconTechTenefit);
export default ForwardRef;