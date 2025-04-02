import Link from 'next/link'
// import styles from '../page.module.css'
// Save as page.jsx in app/about
export default function About() {
   return (
     
           <div className="Dashboard">
               <h1>Dashboard</h1>
               <p>This is the Dashboard page.
                  Nothing to see, go <Link href="/">home</Link>.</p>                
           </div>
       
   )
}