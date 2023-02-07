import Random from './random'
import FixText from './fixText';



function Header() {
  return (
    <div className='h-screen overflow-hidden relative flex flex-col justify-center w-full pb-10'>
      <Random leng={21} />
      <div className='flex w-full py-1 justify-center'>
        <Random leng={9} />
        <FixText text="IMAGINE" n={1} />
        <Random leng={5} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={7} />
        <FixText text="A" n={1} />
        <Random leng={1} />
        <FixText text="TEAM" n={1} />
        <Random leng={8} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={9} />
        <FixText text="THAT" n={1} />
        <Random leng={8} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={9} />
        <FixText text="PRESENTS" n={1} />
        <Random leng={4} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={7} />
        <FixText text="IDEAS" n={3} />
        <Random leng={9} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={9} />
        <FixText text="BY" n={1} />
        <Random leng={10} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={7} />
        <FixText text="CREATIVE" n={3} />
        <Random leng={6} />
      </div>
      <div className='flex w-full py-1 justify-center'>
        <Random leng={6} />
        <FixText text="CODING" n={4} />
        <Random leng={9} />
      </div>
      <Random leng={21} />
    </div>
  )
}

export default Header;
