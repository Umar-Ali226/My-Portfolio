import Navbar from "@/src/component/Navbar"
import Link from "next/link"

export default function Contact () {
    return (
        <div>
            <Navbar />
        <div id="contact " className="contact-us">
            <div>
                <h2 className="heading">Get in touch with me!</h2>
            <p>If you wanna know more about my personal life and wants to follow. Here are my some social media accounts link...</p></div>
            </div>
        {/* <div className="linkDiv"> 
           <ul><Link href="https://www.facebook.com/profile.php?id=100060515936355" target="_blank"><li><u>FaceBook</u></li></Link>
            <Link href="https://github.com/Umar-Ali226" target="_blank"><li><u>GitHub</u></li></Link>
            <Link href="https://vercel.com/umar-alis-projects-c440ddd9" target="_blank"><li><u>Vercel</u></li></Link>
            </ul> 
            </div> */}
            <div className="link-div">
            <button><Link href={"https://www.linkedin.com/in/umar-ali-64b379307"} target="_blank">LinkedIn</Link></button>
            <button><Link href={"https://github.com/Umar-Ali226"} target="_blank"></Link>GitHub</button>
            <button><Link href={"https://vercel.com/umar-alis-projects-c440ddd9"} target="_blank">Vercel</Link></button>
        </div>
        </div>
        
        
    )
}