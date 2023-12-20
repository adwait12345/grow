import Image from "next/image";
import image from '../images/timeline.png'


export default function Timeline() {
  return (
   <Image src={image} alt="" width={80} height={80} style={{width:"25px", height:"65px", objectFit:"cover"}} />
  );
}
