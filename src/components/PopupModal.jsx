import React from "react";

const PopupModal = ({ open, onClose, imgUrl }) => {
  //   console.log(onClose);

  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors ${
          open
            ? "visible bg-black/30 shadow-[100px_100px_100px_0_rgba(0,0,0,0.7)_inset] backdrop-blur-sm"
            : "invisible"
        }
    `}>
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-white rounded-xl shadow p-6 translate-all ${
          open
            ? "scale-x-[.85] scale-y-[.85] opacity-100"
            : "scale-75 opacity-0"
        }
    `}>
        <button
          onClick={onClose}
          className='absolute top-3 right-5 p-1 rounded-lg bg-white text-gray-500 opacity-70 text-2xl hover:bg-gray-50 hover:text-gray-600'>
          x
        </button>
        <div className='items-center'>
          <div className='flex items-center justify-center'>
            {imgUrl ? (
              <img src={imgUrl} alt='' className='w-32 h-32' />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div className='mx-auto my-4 w-48 flex items-center justify-center'>
            <h3 className='text-gray-800 font-semibold text-xl'>
              Badge Unlocked!&#x1F31F;
            </h3>
          </div>
          <p className='-mt-4 text-sm text-gray-400'>
            &#127881;Level Up! Earned a shiny new badge!&#129351;&#10024;
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
