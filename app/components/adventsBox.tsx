/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import Modal from './dialog';
import YouTube from 'react-youtube';

type AdventsBoxContent = {
    type?: string;
    url?: string;
    videoId?: string;
};

const adventsBoxContent: {
    [key: string]: AdventsBoxContent;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./adventBox.json');

function ModalContent(params: { content: AdventsBoxContent }) {
    const { content } = params;
    const { type, url, videoId } = content;

    if (type === 'image') {
        return <img src={url} />;
    }

    if (type === 'video') {
        const opts = {
            width: '1200',
            height: '630'
        };
        return (
            <div>
                <YouTube videoId={videoId} opts={opts} className="m-auto" />
            </div>
        );
    }

    return null;
}

function AdventsBox(props: { day: number }) {
    const { day } = props;
    const key = `day${day}`;
    const content = adventsBoxContent[key];
    const [showModal, setShowModal] = React.useState(false);

    const modalContent = showModal ? <ModalContent content={content} /> : null;

    const onClick = () => {
        setShowModal(true);
    };

    return (
        <React.Fragment>
            <Modal open={showModal} setOpen={setShowModal}>
                {modalContent}
            </Modal>
            <div className="article">
                <div className="box">
                    <div className="text-center text-white text-9xl">{day}</div>
                </div>
                <div className="present" onClick={onClick}>
                    <div className="bauble" onClick={onClick}>
                        ?
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdventsBox;
