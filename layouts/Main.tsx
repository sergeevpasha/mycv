import type { ReactElement } from 'react';
import Head from 'next/head';

function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">{children}</main>
        </>
    );
}

export default Layout;
