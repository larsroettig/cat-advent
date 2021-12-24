import * as React from 'react';

function AdventsBoxNext(props: { day: number }) {
    const { day } = props;
    return (
        <div className="article">
            <div className="box box-soon">
                <div className="text-center text-white text-9xl">{day}</div>
            </div>

        </div>
    );
}
export default AdventsBoxNext;
