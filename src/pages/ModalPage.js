import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button success onClick={handleClose}>Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Bla bla bla</p>
        </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>Open modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;