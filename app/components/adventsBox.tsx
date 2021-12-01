/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import Modal from './dialog';

type AdventsBoxContent = {
    type?: string;
    url?: string;
};

const adventsBoxContent: { [key: string]: AdventsBoxContent } = {
    1: {
        type: 'image',
        url: '/cats/cat-323262.jpg'
    },
    2: {
        type: 'image',
        url: '/cats/cat-323262.jpg'
    }
};

function ModalContent(params: { content: AdventsBoxContent }) {
    const { content } = params;
    const { type, url } = content;

    if (type === 'image') {
        return <img src={url} />;
    }

    return null;
}

function AdventsBox(props: { day: number; date: Date }) {
    const { day, date } = props;
    const content = adventsBoxContent[day];
    console.log(content);
    const [showModal, setShowModal] = React.useState(false);

    const modalContent = showModal ? <ModalContent content={content} /> : null;

    const onClick = () => {
        setShowModal(true);
    };

    if (day > date.getDate()) {
        return (
            <div className="article">
                <div className="box-soon closedDoor">
                    <div className="text-center text-white text-9xl">{day}</div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Modal open={showModal} setOpen={setShowModal}>
                {modalContent}
            </Modal>
            <div className="article">
                <div className="box openDoor">
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
