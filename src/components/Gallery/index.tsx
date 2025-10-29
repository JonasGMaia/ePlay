import GeneralSection from '../GeneralSection'
import mapadnd1 from '../../assets/images/mapadnd1.jpg'
import mapadnd2 from '../../assets/images/mapadnd2.jpg'
import x from '../../assets/icons/x.svg'

import {
  GalleryItems,
  GalleryItem,
  Action,
  Modal,
  ModalContent
} from './styles'
import zoom from '../../assets/icons/zoom.svg'
import play from '../../assets/icons/play.svg'
import { useState } from 'react'
import { isVisible } from '@testing-library/user-event/dist/utils'
import { GalleryContent } from '../../pages/Home'

// interface GalleryContent {
//   type: 'image' | 'video'
//   url: string
// }

// const mock: GalleryContent[] = [
//   {
//     type: 'image',
//     url: mapadnd1
//   },
//   {
//     type: 'image',
//     url: mapadnd2
//   },
//   {
//     type: 'video',
//     url: 'https://www.youtube.com/embed/zOegHOwfO_E?si=nVXKFmqft2lSrpsJ'
//   }
// ]

type Props = {
  defaultCover: string
  name: string
  items: GalleryContent[]
}

interface ModalState extends GalleryContent {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  // const [modalAberto, setModalAberto] = useState(false)
  // const [modalUrl, setModalUrl] = useState('')
  const getMediaCover = (item: GalleryContent) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryContent) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <GeneralSection title="Galeria" background="black">
        <GalleryItems>
          {items.map((media) => (
            <GalleryItem
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
                // setModalAberto(true)
                // setModalUrl(media.url)
              }}
            >
              <img src={getMediaCover(media)} />
              <Action>
                <img src={getMediaIcon(media)} />
              </Action>
            </GalleryItem>
          ))}
        </GalleryItems>
      </GeneralSection>
      {/* <Modal className={modalAberto ? 'visivel' : ''}> */}
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            {/* <img onClick={() => setModalAberto(false)} src={x} alt="fechar" /> */}
            <img
              onClick={() => {
                closeModal()
              }}
              src={x}
              alt="fechar"
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
          {/* <img src={modalUrl} /> */}
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
