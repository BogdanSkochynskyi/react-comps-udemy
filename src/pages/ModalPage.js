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

    return (
        <div>
            <Button primary onClick={handleClick}>Open modal</Button>
            {showModal && <Modal/>}
        </div>
    )
}

export default ModalPage;