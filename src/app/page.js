import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import { redirect } from 'next/navigation'

export default function Home() {
	redirect('/menu')
}
