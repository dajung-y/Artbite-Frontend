// src/components/common/Loading.tsx 

import Lottie from 'react-lottie-player'
import SparkAnimation from '../../assets/resources/resource-spark.json';

export default function Loading() {
  return (
    <div className='flex flex-1 items-center justify-center bg-black/60'>
      <div>
        <Lottie
          loop
          play
          animationData={SparkAnimation}
          className='w-8 h-8' />
      </div>
    </div>
  )
}
