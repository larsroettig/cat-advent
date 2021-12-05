import * as React from 'react';
import type { LinksFunction, MetaFunction } from 'remix';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'remix';
import styles from './tailwind.css';

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);
    return (
        <Document title="Error!">
            <Layout>
                <div>
                    <h1>There was an error</h1>
                    <p>{error.message}</p>
                    <hr />
                </div>
            </Layout>
        </Document>
    );
}

export const meta: MetaFunction = () => {
    const description = `Very nice cat advent calender`;
    return {
        description,
        keywords: 'Cat Advent 2021',
        'twitter:image': '/cat_social.jpg',
        'twitter:card': 'summary_large_image',
        'twitter:creator': '@LarsRoettig',
        'twitter:site': '@LarsRoettig',
        'twitter:title': 'Cat Advent 2021',
        'twitter:description': description
    };
};

function Document({
    children,
    title
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="remix-app">
            <div className="remix-app__main">
                <div className="remix-app__main-content">{children}</div>
            </div>
        </div>
    );
}
