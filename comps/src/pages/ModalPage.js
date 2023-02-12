import Modal from '../components/Modal'
import { useState } from 'react'
import Button from '../components/Button'

export default function ModalPage(){
    const [ showModal, setShowModal ] = useState(false)

    const handleClick = (e) => {
        setShowModal(true)
    }

    const handleClose = (e) => {
        setShowModal(false)
    }

    const actionBar = <div><Button onClick={handleClose} primary>Accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mattis libero. Morbi orci ante, eleifend nec sem at, egestas facilisis leo. Nullam vestibulum odio et augue sodales, eu dignissim arcu ornare. Nulla ut consequat nisl. Vestibulum vulputate tincidunt eros, in pretium erat bibendum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum nisl eget elit dapibus sodales. In congue in magna quis dapibus. Cras ullamcorper laoreet fermentum. 
            </p>

        </div>
    )
}