import Modal from 'react-modal';
import React from "react";
import styled from "styled-components";
import checkIcon from "../../assets/basic-tick.svg";

Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    align-items: center;
    background: none;
    position: fixed;
    z-index: 1200;
    text-align: center;
    color: #ffffff;
    font-weight: 400;    
`;

const Content = styled.div`
    .content {
      background-color: transparent;
      position: relative;
    }
    
`;

const HeaderImage = styled.div`
   height: 183px;
   backdrop-filter: blur(10px);
   background-image: linear-gradient(rgba(45, 45, 45, 0.67), rgba(45, 45, 45, 0.67));
   display: flex;
   align-items: center;
   justify-content: center;
   
   img {
        position: absolute;
        padding: 0;
        right: 16px;
        top: 16px;
      }  
`;

const MiddleImage = styled.div`
   height: 215px;
   background-color: rgb(26, 26, 26);
   box-shadow: 0 -7px 10px rgba(28, 28, 28, 0.33);
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Separator = styled.div`
    height: 9px;
    background: RGB(20, 20, 20);
    box-shadow: inset 1px 3px 0 rgb(0 0 0 / 50%);
`;

const FooterImage = styled.div`
   height: 316px;
   background-color: rgb(41, 41, 41);
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageUpdateModal = ({isOpen, closeModal}) => {

    return (
        <Modal
            closeTimeoutMS={200}
            isOpen={isOpen}
            onRequestClose={closeModal}
            className='sharing'
        >
            <ComponentContainer>

                <Content>
                    <div className='content'>
                        <HeaderImage>
                            Change Image
                            <img src={checkIcon} alt="check" onClick={() => {
                                closeModal();
                            }}/>
                        </HeaderImage>
                        <MiddleImage>
                            Upload Image
                        </MiddleImage>
                        <Separator> </Separator>
                        <FooterImage>
                            Upload Image
                        </FooterImage>
                    </div>
                </Content>
            </ComponentContainer>
        </Modal>
    )
}

export default ImageUpdateModal;