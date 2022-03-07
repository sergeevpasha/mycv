import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
}

export default React.forwardRef(({ to, ...props }: LinkProps, ref: any) => {
    const router = useRouter();
    return (
        <Link href={to}>
            <a {...props} ref={ref} className={router.pathname === to ? 'active' : ''}>
                {props.children}
            </a>
        </Link>
    );
});
