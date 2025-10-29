import styled from 'styled-components'
import { Cores } from '../../styles'

export const GalleryItems = styled.ul`
  display: flex;
  gap: 32px;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97%;
  background-color: #ffffff48;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 40px;
    cursor: pointer;
  }
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const GalleryItem = styled.li`
  border-radius: 8px;
  position: relative;
  > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff7e;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    background-color: ${Cores.branco};
    padding: 15px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    max-width: 500px;
    width: auto;
    font-size: 18px;
    font-weight: bold;
    img {
      max-width: 20px;
      margin: 0px 10px;
      cursor: pointer;
    }
  }
  img,
  iframe {
    display: block;
    width: 100%;
    max-height: 500px;
    max-width: 500px;
    margin: auto;
    border-radius: 0 0 8px 8px;
  }

  iframe {
    height: 480px;
  }
`
