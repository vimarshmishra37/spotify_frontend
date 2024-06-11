'use client';
import React ,{useState} from 'react';
import home_Logo from '../assests/home.png';

const Home_Page = () => {
  return (
      
  <div className=' h-screen bg-black'>

  <div className=' flex h-5/6'>
    {/*body*/}
  
    {/*left body*/} <div className='h-full flex-none w-1/6 bg-black'>
     
  <div className='h-1/3 m-1 rounded-md bg-amber-200'> 
  
  <img src={home_Logo} alt='dfg' layout="responsive" />
  </div>{/*upper */}
  
  <div className='h-2/3 m-1 mb-0 rounded-md bg-yellow-700'>er</div>{/**lower */}
  
    </div> {/*left body*/}
   
     {/*right body */}<div className='relative flex-1 mt-1 rounded-md w-5/6 bg-white scroll-m-0 overflow-auto'>
  
    {/*header start */}<div className='sticky top-0 h-1/6  rounded-t-md bg-orange-600' >
  
  </div>{/*header end */}
  The Impact of Technology on Modern Education
  In the past few decades, the rapid advancement of technology has profoundly impacted various sectors, with education being one of the most significantly transformed. The integration of technology into educational practices has redefined the learning environment, teaching methodologies, and accessibility to educational resources. This essay explores the multifaceted impact of technology on modern education, highlighting its benefits, challenges, and future implications.
  
  Enhanced Access to Information
  One of the most notable impacts of technology on education is the unprecedented access to information. The internet has become a vast repository of knowledge, where students and educators can find information on virtually any topic. Online databases, digital libraries, and educational websites provide a wealth of resources that were previously unavailable or difficult to access. This democratization of information has leveled the playing field, enabling students from diverse backgrounds to access quality educational materials.
  
  For instance, platforms like Khan Academy, Coursera, and edX offer free or affordable courses from prestigious institutions, allowing learners worldwide to gain knowledge and skills in various subjects. These platforms have made it possible for students to learn at their own pace, revisit complex concepts, and access supplementary materials to enhance their understanding.
  
  Interactive and Engaging Learning
  Technology has also revolutionized the way education is delivered, making learning more interactive and engaging. Traditional lectures are increasingly being supplemented or replaced by multimedia presentations, interactive simulations, and gamified learning experiences. These technological tools cater to different learning styles, making education more inclusive and effective.
  
  Interactive whiteboards, educational apps, and virtual reality (VR) experiences have transformed the classroom environment. For example, VR can take students on virtual field trips to historical sites, deep-sea explorations, or even outer space, providing immersive learning experiences that were previously unimaginable. Such interactive tools not only enhance student engagement but also deepen their understanding of complex concepts by allowing them to visualize and interact with the subject matter.
  
  Personalized Learning
  Another significant impact of technology on education is the ability to personalize learning experiences. Adaptive learning technologies use algorithms and data analytics to tailor educational content to the individual needs and learning pace of each student. This personalization ensures that students receive the right level of challenge and support, maximizing their potential for success.
  
  For example, intelligent tutoring systems can provide immediate feedback and customized exercises based on a student’s performance. Learning management systems (LMS) like Moodle and Blackboard allow educators to track student progress, identify areas where they are struggling, and adjust instructional strategies accordingly. This data-driven approach to education helps create a more efficient and effective learning environment.
  
  Collaboration and Communication
  
      </div>{/*right body */}
  
  
  </div>
  <div className='h-1/6 bg-red-700 relative   '>
    {/*footer */}
  
  </div>
    </div>
  
  )
}

export default Home_Page;