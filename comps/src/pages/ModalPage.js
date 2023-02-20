import Modal from '../components/Modal'
import { useState, useReducer } from 'react'
import Button from '../components/Button'

export default function ModalPage(){

    const SET_SHOW_MODAL = 'set-show-modal'

    // Set up reducer with actions
    const reducer = (state, action) => {
        switch (action.type) {
            case SET_SHOW_MODAL:
                return {
                    ...state,
                    showModal: action.payload,
                }
            default: 
                return state
        }
 
        return state
    }

    const [state, dispatch] = useReducer(reducer, {
        showModal: false,
      });
      console.log(state);
    
    const handleClick = (e) => {
        dispatch({
            type: SET_SHOW_MODAL,
            payload: true
          });
    }

    const handleClose = (e) => {
        dispatch({
            type: SET_SHOW_MODAL,
            payload: false
          });    
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
            {state.showModal && modal}

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