import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
}

export default React.forwardRef(function NavLink({ to, ...props }: LinkProps, ref: any) {
    const router = useRouter();
    return (
        <Link {...props} href={to} ref={ref} className={router.pathname === to ? 'active' : ''}>
            {props.children}
        </Link>
    );
});
