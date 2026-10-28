import React from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';


const WelcomeRemarks = () => {
    return (
        <section className="h-[20vh]">
            <h4 className="text-6xl text-(--text-colour)">Dear Hastings, Lets build something amazing together.</h4>
       




<ScrollVelocityContainer className='z-90 flex flex-col gap-4'>
              
    

      <ScrollVelocityRow baseVelocity={6} className='lg:p-0 mt-12 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[200px]' >
         <h4 className="text-7xl uppercase font-bold">Together we can.</h4>
        </div>
            
    </ScrollVelocityRow>
  
             
 </ScrollVelocityContainer> 

 </section>



        
    );
}

export default WelcomeRemarks