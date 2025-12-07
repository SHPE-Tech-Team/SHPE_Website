import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      
      <div className="flex">
        <img className="w-3xs" src="shpe.png"/>
        
        <div className="flex justify-between">
          <Link href='/get-involved'>Get Involved</Link>
          <Link href='/events'>Events</Link>
          <Link href='/sponsors'>Sponsors</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
        
      </div>

      Infinite Scrolling for Sponsors
    </div>
  );
}
