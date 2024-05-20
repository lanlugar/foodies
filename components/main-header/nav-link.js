'use client';
import classes from './nav-link.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
    const pathName = usePathname();
    return (
        <Link
            href={href}
            className={pathName.startsWith(href) ? classes.active : ''}
        >
            {children}
        </Link>
    )
}