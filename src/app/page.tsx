import Image from "next/image";
import profile from "../../public/image/myprofile.png"
import Header from "../component/Header";
import Navbar from "../component/Navbar";


export default function Home() {
  return (
   <body>
    <Navbar />
      <div  className="container">
        <div className="left-sec">
          <div className="image-con">
            <Image src={profile} height={330} width={330} alt="Profile-Picture"></Image>        
              </div>
        </div>
        <div className="right-sec">
        <div className="my-name-1">
          It's me
        </div>
        <div className="my-name-2">
          Umar Ali
        </div>
        </div>
      </div>
    
    </body>
  );
} 



