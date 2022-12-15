import { memo, useState } from 'react';

import './styles.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { deleteFood } from '../../../utils/uploadFood.utils';
import { BsTrash } from 'react-icons/bs';

function FoodItem({food,type,quantity}) {
    const [show, setShow] = useState({
        show: false,
        food: null,
    });

    const handleClose = () => setShow(false);
    const handleShow = (food) => setShow(
        {
            show: true,
            food: food,
        }
    );
    const handleDelete = async (foodId) => {
        const res = await deleteFood(foodId);
        if (res) {
            alert('Delete success');
            window.location.reload();
        }
        else {
            alert('Delete failed');
        }
    }
    return (
        <>
            <div className= "foodItem_box">
                <img src={food.imageUrl} alt=""></img>
                <div className = "content">
                    <h3>{food.title}</h3>
                    <span>{food.price} VND</span>
                </div>
                {/* <FontAwesomeIcon className= "icon icon_trash ms-3" onClick={() => handleShow(food)} icon={BsTrash} /> */}
                {
                    type === "transaction" ? 
                    <div className="d-flex">Quantity : {quantity}</div>
                     : <BsTrash className= "icon icon_trash ms-3" onClick={() => handleShow(food)} />
                }
            </div>
            <Modal show={show.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {show?.food?.title} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(show?.food?.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(FoodItem)