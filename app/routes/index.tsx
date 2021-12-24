import * as React from 'react';
import type { MetaFunction } from 'remix';
import AdventsBox from '~/components/adventsBox';
import AdventsBoxNext from '~/components/adventsBoxNext';
import Particles from 'react-tsparticles';
import Countdown from 'react-countdown';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
    return {
        title: 'Cat Advent 2021',
        description: 'Very nice cat advent calender'
    };
};

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
    let days = [...Array(24).keys()];
    days = days.sort(() => Math.random() - 0.5)

    const currentDate = new Date();
    const nextChristmas = new Date(currentDate.getFullYear(), 11, 24, 0, 0, 0);

    const items = days.map((day) => {
        const currentDay = day + 1;
            return <AdventsBox key={`AdventsBox${day}`} day={currentDay} />;
    });

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: 'rgb(59 130 246 / 50%)' }}
        >
            <Particles id="tsparticles" url="snow.json" />
            <div className="absolute z-10 bottom-0 inset-0 m-auto">
                <div className="container m-auto">
                    <div className="title my-10 text-center text-white text-4xl sm:text-6xl lg:text-9xl">
                        Cat Advent Calendar 2021
                    </div>
                    <div className="title my-10 text-center text-white text-2xl sm:text-4xl lg:text-6xl">
                     Christmas
                        <span role="img" aria-label="Santa Claus">
                            🎅 🎅 🎅 🎅
                        </span>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}
