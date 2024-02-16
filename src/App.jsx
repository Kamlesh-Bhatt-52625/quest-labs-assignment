import Profile from "./components/Profile";

const App = () => {
  return (
    <div className='bg-[#7052ff] size-full'>
      <div className='flex items-center w-[59%] justify-between'>
        <div className='text-white font-bold text-xl mb-5 bg-[#7f64ff] rounded shadow-lg pt-1 pb-1 pr-2.5 pl-2.5 ml-[20px]'>
          &lt;
        </div>
        <p className='text-[25px] text-white font-semibold pt-5 pb-10'>
          Profile
        </p>
      </div>
      <div className='p-5 pb-0 pt-10'>
        <Profile />
      </div>
    </div>
  );
};

export default App;
