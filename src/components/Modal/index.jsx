import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

Modal.propTypes = {
  isOpen: PropTypes.bool,
  video: PropTypes.string,
  setOpenModal: PropTypes.func,
}

export default function Modal({isOpen, video, setOpenModal}) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto'; // Restaura o comportamento padrão ao desmontar o componente
    };
  }, [isOpen]);
  

  return (
    <>
    {
      isOpen && <div className='fixed top-0 z-50 bg-black/75 w-full h-screen flex items-center justify-center' onClick={setOpenModal}>
      
      <AiOutlineClose
        className='absolute top-10 right-10 cursor-pointer fill-slate-200 hover:shadow-2xl shadow-slate-50 duration-500 ease-in-out'
        size={30}
      />

      <div>
          {video && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay;
                clipboard-write; encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share"
                allowFullScreen
                className="rounded-3xl h-[30rem] w-[50rem]"
              >
                </iframe>
            )
        }
          </div>
      </div>
    }
    </>
  )
}