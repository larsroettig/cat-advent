import * as React from 'react';
import type { MetaFunction } from 'remix';
import AdventsBox from '~/components/adventsBox';
import Particles from 'react-tsparticles';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
    return {
        title: 'Cat Advent 2021',
        description: 'Very nice cat advent calender'
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
                        Cat Advent Calendar 2021
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}
