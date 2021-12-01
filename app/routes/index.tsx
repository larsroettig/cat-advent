import * as React from 'react';
import type { MetaFunction, LoaderFunction } from 'remix';
import AdventsBox from '~/components/adventsBox';
import Particles from 'react-tsparticles';

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
    return [];
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
    return {
        title: 'Remix Starter Typescript and Tailwind',
        description: 'Welcome to remix!'
    };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
    const items = [];

    const currentDate = new Date();

    for (let i = 1; i <= 24; i++) {
        items.push(<AdventsBox key={i} day={i} date={currentDate} />);
    }

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: 'rgb(59 130 246 / 50%)' }}
        >
            <Particles id="tsparticles" url="snow.json" />
            <div className="absolute z-10 bottom-0 inset-0 m-auto">
                <div className="container m-auto">
                    <div className="title my-10 text-center text-white">
                        Advent Calendar 2021
                    </div>
                    <div className="grid gap-4 grid-cols-5">{items}</div>
                </div>
            </div>
        </div>
    );
}
