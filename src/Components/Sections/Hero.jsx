import React from 'react';
import heroImage from "../../assets/images/HeroRecept.png";
import CustomButton from '../UI/CustomButton';
import ApplyToken from '../Forms/ApplyToken';

const Hero = () => {
  return (
    <div className="bg-[transparent] w-full min-h-[calc(100vh_-_72px)]  max-h-[1000px] mx-auto flex gap-[20px] flex-col-reverse md:flex-row items-center justify-end md:justify-between">
   
      <div className=" mx-[20px] md:w-1/2 flex justify-center">
      
      <ApplyToken/>
      </div>


      <div className="w-full  h-full flex justify-end items-center md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-[350px] md:w-[400px] h-auto object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
