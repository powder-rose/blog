import styled from 'styled-components'
import { OvalButton } from '../button/OvalButton.jsx'
import { useSelector } from 'react-redux'
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from '../../selectors'

const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText)
  const isOpen = useSelector(selectModalIsOpen)
  const onConfirm = useSelector(selectModalOnConfirm)
  const onCancel = useSelector(selectModalOnCancel)

  if (!isOpen) {
    return null
  }

  return (
    <div className={className}>
      <div className="overlay">
        <div className="box">
          <h3>{text}</h3>
          <div className="buttons">
            <OvalButton className="button" onClick={onConfirm} with="200">
              Да
            </OvalButton>
            <OvalButton className="button" onClick={onCancel} text="Отмена">
              Нет
            </OvalButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Modal = styled(ModalContainer)`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h3 {
    color: #fff;
    margin-bottom: 20px;
  }

  & .overlay {
    position: absolute;
    background-color: rgba(243, 228, 255, 0.51);
    width: 100%;
    height: 100%;
  }

  & .box {
    position: relative;
    top: 50%;
    transform: translate(0, -50px);
    text-align: center;
    width: 400px;
    margin: auto;
    background-color: rgb(48, 14, 79);
    padding: 2rem;
    border-radius: 15px;
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }

  & .button {
    margin: 15px;

    &:hover {
      background-color: rgb(215, 182, 250);
      color: #fff;
    }
  }
`
