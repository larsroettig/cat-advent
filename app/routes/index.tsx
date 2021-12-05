import * as React from 'react';
import type { MetaFunction } from 'remix';
import AdventsBox from '~/components/adventsBox';
import Particles from 'react-tsparticles';
import Countdown from 'react-countdown';

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
    const showCalender =
        currentDate.getMonth() === 11 && currentDate.getDate() <= 24;

    const nextChristmas = new Date(currentDate.getFullYear(), 11, 24, 0, 0, 0);

    if (showCalender) {
        for (let i = 1; i <= 24; i++) {
            items.push(<AdventsBox key={i} day={i} date={currentDate} />);
        }
    }

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: 'rgb(59 130 246 / 50%)' }}
        >
            <Particles id="tsparticles" url="snow.json" />
            <div className="absolute z-10 bottom-0 inset-0 m-auto">
                <div className="container m-auto">
                    <div className="title my-10 text-center text-white text-9xl">
                        Cat Advent Calendar 2021
                    </div>
                    <div className="title my-10 text-center text-white text-5xl">
                        Days until christmas
                        <span role="img" aria-label="Santa Claus">
                            🎅
                        </span>
                        <Countdown date={nextChristmas} />
                    </div>

                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}
