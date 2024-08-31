import React, { useState } from 'react';


//imported images
import Dexpress from '../Assets/D-Express.png'
import Item1 from '../Assets/item1.png'
import Item2 from '../Assets/item2.png'
import Item3 from '../Assets/item3.png'



//imported icons
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Homepage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        {/* navbar */}
        <div className="flex justify-between items-center w-full fixed top-0 z-50 bg-green-600 py-5 px-4 lg:px-8">
            <div>
                <img src={Dexpress} alt="Logo" className="w-[120px] lg:w-[150px]" />
            </div>

            {/* Menu button for mobile */}
            <div className="lg:hidden text-white" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </div>

            {/* Menu links */}
            <ul
                className={`fixed left-0 top-0 h-full w-[250px] bg-green-600 px-10 flex flex-col justify-start items-start lg:justify-center lg:items-center transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out lg:relative lg:flex-row lg:p-0 lg:h-auto lg:w-auto lg:translate-x-0 lg:flex lg:items-center`}
            >
                <li className="text-white list-none my-4 lg:mx-3 lg:my-0">
                    <img src={Dexpress} alt="Logo" className="w-[120px] lg:hidden" />
                </li>
                <li className="text-white list-none mt-10 my-4 lg:mx-3 lg:my-0">
                <a href="">Refill Prescription</a>
                </li>
                <li className="text-white list-none my-4 lg:mx-3 lg:my-0">
                <a href="">Refill Prescription</a>
                </li>
                <li className="text-white list-none my-4 lg:mx-3 lg:my-0">
                <a href="">Refill Prescription</a>
                </li>
                <li className="lg:hidden my-5 lg:my-0">
                <a href="" className="bg-white  py-3 px-8 text-green-500 rounded-full">
                    Contact
                </a>
                </li>
            </ul>

            {/* Contact button for larger screens */}
            <div className="hidden lg:block">
                <a href="" className="bg-white py-3 px-8 text-green-500 rounded-full">
                Contact
                </a>
            </div>
        </div>

        {/* Hero */}
        <div className="bg-[url('https://files.apotheekcoach.nl/cms-public-files/pharmacies/170164670623.jpg')] bg-cover bg-center h-[700px] w-full mt-10 p-10 md:p-28 flex flex-col items-start justify-center">
            <div className="w-full md:w-1/2">
                <h1 className="md:w-[350px] text-3xl md:text-4xl lg:text-4xl xl:text-6xl bg-green-600 text-white font-bold px-2 py-3 md:py-5 md:px-3 text-start shadow-md md:mt-28 lg:mt-0">
                We can get your Drug Prescriptions to You
                </h1>
                <p className="md:w-[450px] text-sm md:text-lg lg:text-lg bg-green-600 text-white text-wrap text-start py-2 md:py-3 mt-3 md:mt-5 px-2 md:px-4 shadow-md">
                We have all the drugs your doctor prescribed for your health and what’s more, we can get it to you.
                </p>
            </div>
  
            <div className="w-full md:w-full lg:w-1/2 flex flex-wrap justify-start items-center mt-5 md:mt-10">
                <a href="" className="py-2 md:py-3 px-5 md:px-10 bg-white text-green-500 rounded-full shadow-lg mr-2 md:mr-3 mt-2">Ikeja</a>
                <a href="" className="py-2 md:py-3 px-5 md:px-10 bg-white text-green-500 rounded-full shadow-lg mx-2 md:mx-3 mt-2">VI</a>
                <a href="" className="py-2 md:py-3 px-5 md:px-10 bg-white text-green-500 rounded-full shadow-lg mx-2 md:mx-3 mt-2">Lekki</a>
                <a href="" className="py-2 md:py-3 px-5 md:px-10 bg-white text-green-500 rounded-full shadow-lg mx-2 md:mx-3 mt-2">Ajah</a>
            </div>
  
            <div className="w-full md:w-1/2 mt-5 md:mt-10 flex justify-start items-center">
                <input type="text" placeholder="Search for drugs in our store" className="text-xs lg:text-md md:w-auto py-3 px-3 md:px-10 rounded-l-full"/>
                <button className="text-nowrap text-xs lg:text-md md:w-auto md:mt-0 px-3 py-3 lg:py-3 lg:px-8 bg-green-500 text-white rounded-r-full">Find Drug</button>
            </div>
        </div>


        {/* Our Affiliations */}
        <div className="text-center p-10 md:p-28 bg-blue-50">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl text-green-500 font-bold">Our Affiliations</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-8 md:mt-10">
                <img className="w-[150px] md:w-[200px] mx-4 md:mx-6 my-4" src="https://directory.africa-business.com/assets/uploadedimages/Juhel-Logo.png" alt="Juhel Logo" />
                <img className="w-[150px] md:w-[200px] mx-4 md:mx-6 my-4" src="https://th.bing.com/th/id/R.5fb12b9f8003369616320a2578e77ba4?rik=od6KgiLSSfx7TQ&riu=http%3a%2f%2fwww.lagoswomenrun.com%2fwp-content%2fuploads%2f2019%2f10%2fEmzor-logo.png&ehk=tg%2bJHLYThTYKRaEUqfxrksbMKX0clStWh7cLKnvvn0w%3d&risl=&pid=ImgRaw&r=0" alt="Emzor Logo" />
                <img className="w-[150px] md:w-[200px] mx-4 md:mx-6 my-4" src="https://th.bing.com/th/id/R.be9dc783b980a8e64fb5a57d9c574e06?rik=fHZQFBouEnOTlQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f01%2fGSK-Logo.png&ehk=N8mwpSCMvI68%2fz%2bU16AoShzCd5Lrwg8RgL46yohJ3i8%3d&risl=&pid=ImgRaw&r=0" alt="GSK Logo" />
            </div>
        </div>


        {/* Key Benefits */}
        <div className="p-10 md:p-28 bg-blue-50">
            <div>
                <h1 className="text-center text-3xl md:text-5xl text-green-500 font-bold">Key Benefits</h1>
            </div>
  
            <div className="flex flex-col md:flex-row justify-around items-center mt-8 md:mt-16">
                <div className="text-start md:w-1/2 md:pr-10">
                <h1 className="text-2xl md:text-2xl font-semibold text-green-500">All your Medicine needs in one place</h1>
                <ul className="mt-6 md:mt-10 mb-6 md:mb-10">
                    <li className="mt-3 text-lg md:text-md lg:text-lg">Search and find all kinds of drugs</li>
                    <li className="mt-3 text-lg md:text-md lg:text-lg">We have drugs for special case treatments</li>
                    <li className="mt-3 text-lg md:text-md lg:text-lg">Get notified when your drug is available</li>
                </ul>
                <a href="" className="text-nowrap py-3 px-8 md:px-10 rounded-full border border-green-500 text-lg md:text-md lg:text-lg text-green-500 hover:bg-green-500 hover:text-white duration-200 ease-in-out">Get prescription</a>
                </div>
                <div className="mt-8 md:mt-0">
                <img src={Item2} alt="" className="w-full md:w-[400px]" />
                </div>
            </div>
  
            <div className="flex flex-col md:flex-row justify-around items-center mt-8 md:mt-16">
                <div className="order-2 md:order-1 mt-8 md:mt-0 md:w-1/2 md:pr-10">
                <img src={Item1} alt="" className="w-full md:w-[400px]" />
                </div>
                <div className="order-1 md:order-2 text-start md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-semibold text-green-500">All your Medicine needs in one place</h1>
                <ul className="mt-6 md:mt-10 mb-6 md:mb-10">
                    <li className="mt-3 text-lg">Search and find all kinds of drugs</li>
                    <li className="mt-3 text-lg">We have drugs for special case treatments</li>
                    <li className="mt-3 text-lg">Get notified when your drug is available</li>
                </ul>
                <a href="" className="py-3 px-8 md:px-10 rounded-full border border-green-500 text-lg text-green-500 hover:bg-green-500 hover:text-white duration-200 ease-in-out">Get prescription</a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center mt-8 md:mt-16">
                <div className="text-start md:w-1/2 md:pr-10">
                <h1 className="text-2xl md:text-3xl font-semibold text-green-500">All your Medicine needs in one place</h1>
                <ul className="mt-6 md:mt-10 mb-6 md:mb-10">
                    <li className="mt-3 text-lg">Search and find all kinds of drugs</li>
                    <li className="mt-3 text-lg">We have drugs for special case treatments</li>
                    <li className="mt-3 text-lg">Get notified when your drug is available</li>
                </ul>
                <a href="" className="text-nowrap py-3 px-8 md:px-10 rounded-full border border-green-500 text-lg text-green-500 hover:bg-green-500 hover:text-white duration-200 ease-in-out">Get prescription</a>
                </div>
                <div className="mt-8 md:mt-0">
                <img src={Item3} alt="" className="w-full md:w-[400px]" />
                </div>
            </div>
        </div>


        {/* What Our Clients Say */}
        <div className='flex flex-col lg:flex-row justify-between items-center p-10 md:p-28 bg-blue-50'>
            <div className='w-full mb-10 md:mb-0'>
                <img src="https://th.bing.com/th/id/OIP.LWegZVB5xXKGPOV_O0GhCQAAAA?rs=1&pid=ImgDetMain" alt="" className='w-full md:w-[700px] lg:w-[1000px]' />
            </div>
            <div className='px-5 md:px-10'>
                <h1 className='text-3xl md:text-5xl font-bold text-green-500 text-center md:text-left mb-5 md:mb-10'>What Our Clients Say</h1>
                <p className='text-start text-base md:text-xl text-gray-700 mt-5 md:mt-20'>“The ease of delivery is one that I depended on when I was bedridden and couldn’t even walk. Their service is awesome.”</p>
                <p className='text-lg text-green-500 font-medium text-start mt-5 md:mt-10'>- Gerald Maldiliene</p>
            </div>
        </div>


        {/* footer */}
        <div className='bg-gray-900 px-5 py-12 md:px-28'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='text-start md:w-2/3'>
            <h1 className='text-2xl md:text-3xl text-white font-semibold'>Sign up for our Newsletter</h1>
            <p className='text-white mt-3 md:mt-5'>Get to know updates in the field of medicine and know how often our stores are stocked.</p>
        </div>
        <div className='text-start md:w-1/3'>
            <div>
                <p className='text-white font-semibold text-lg'>Your Email</p>
            </div>
            <div className='flex flex-col md:flex-row justify-start items-start md:items-center mt-3'>
                <input type="text" placeholder='example@email.com' className='py-3 px-5 md:px-3 rounded-t-3xl md:rounded-l-full text-gray-700 w-full md:w-auto'/>
                <button className='text-white bg-green-500 rounded-b-3xl md:rounded-r-full md:rounded-b-none py-3 px-5 md:px-10 mt-3 md:mt-0 w-full md:w-auto'>Subscribe</button>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-10 mt-10 md:mt-20 text-justify'>
        <div className='text-start w-full'>
            <h1 className='text-white font-semibold text-2xl md:text-2xl lg:text-3xl text-nowrap'>D-Express</h1>
            <p className='text-white text-lg md:text-md lg:text-lg mt-3 md:mt-5'>Your favourite online pharmacy store. We offer onsite delivery, and your health is our priority.</p>
        </div>
        <div className='flex flex-col items-start justify-center'>
            <h1 className='text-white md:text-lg lg:text-xl text-xl font-semibold mb-3 md:mb-5'>Quick Links</h1>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Contact us</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Contact us</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Contact us</a>
        </div>
        <div className='flex flex-col items-start justify-center'>
            <h1 className='text-white md:text-lg lg:text-xl text-xl font-semibold mb-3 md:mb-5'>Services</h1>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Delivery</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Purchase</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Consult Specialist</a>
        </div>
        <div className='flex flex-col items-start justify-center'>
            <h1 className='text-white md:text-lg lg:text-xl text-xl font-semibold mb-3 md:mb-5'>Social Media</h1>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Facebook</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>Twitter</a>
            <a href="" className='text-white mt-2 text-md md:text-sm lg:text-md'>LinkedIn</a>
        </div>
    </div>
    <div className='w-full text-white mt-10 text-center md:text-left'>
        <p>Designed by Mohamed Reddam. copyright©</p>
    </div>
</div>

    </div>
  )
}
