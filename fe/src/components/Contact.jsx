// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Banner */}
//       <div className="bg-blue-600 text-white text-center py-12 rounded-lg mb-6">
//         <h2 className="text-3xl font-semibold">Contact Us</h2>
//       </div>

//       {/* Breadcrumbs */}
//       <nav className="text-gray-600 mb-6">
//         <ul className="flex space-x-2 text-sm">
//           <li><a href="#" className="hover:text-blue-600">Home</a></li>
//           <li>/</li>
//           <li className="text-gray-800 font-semibold">Contact Us</li>
//         </ul>
//       </nav>

//       {/* Contact Section */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Contact Info */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Contact <span className="underline">Information</span></h2>
//           <p className="text-gray-700 mb-4">Have questions or need assistance? We're here to help—reach out anytime!</p>
//           <hr className="mb-4" />
//           <h3 className="text-lg font-semibold mb-2">A2 Pyramid Edutech</h3>
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-center space-x-2"><FaMapMarkerAlt /> <span>Rukunpura, Tilak Nagar, Patna, India</span></li>
//             <li className="flex items-center space-x-2"><FaPhoneAlt /> <span>+91 9472994483 (24/7 Support Line)</span></li>
//             <li className="flex items-center space-x-2"><FaEnvelope /> <span>studypyramid@gmail.com</span></li>
//           </ul>
          
//           {/* Social Media */}
//           <h2 className="text-xl font-semibold mt-6">Follow Us</h2>
//           <div className="flex space-x-4 mt-3 text-blue-600 text-2xl">
//             <a href="#" className="hover:text-blue-800"><FaFacebook /></a>
//             <a href="#" className="hover:text-blue-800"><FaTwitter /></a>
//             <a href="#" className="hover:text-blue-800"><FaLinkedin /></a>
//             <a href="#" className="hover:text-blue-800"><FaInstagram /></a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Get In <span className="text-blue-600">Touch</span></h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block font-semibold">Your Name</label>
//               <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
//             </div>
//             <div>
//               <label className="block font-semibold">Your Email Address</label>
//               <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
//             </div>
//             <div>
//               <label className="block font-semibold">Subject</label>
//               <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
//             </div>
//             <div>
//               <label className="block font-semibold">Message</label>
//               <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
//           </form>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="mt-8">
//         <iframe
//           className="w-full h-64 rounded-lg shadow-md"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.781657220188!2d85.06637777539542!3d25.612170677446155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1730015108345!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Styled Components
const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  color: white;
  padding: 50px 5%;
`;

const Banner = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #6a0dad, #4b0082);
  text-align: center;
  padding: 60px 0;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(106, 13, 173, 0.5);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  background: #121212;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #333;
  box-shadow: 0px 0px 10px rgba(138, 43, 226, 0.3);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #9c27b0;
  margin-bottom: 15px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
  line-height: 2;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #bbb;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 2rem;
  margin-top: 20px;

  a {
    color: #9c27b0;
    transition: 0.3s;

    &:hover {
      color: #e91e63;
      transform: scale(1.1);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background: #222;
  color: white;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #9c27b0;
    box-shadow: 0px 0px 10px rgba(156, 39, 176, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background: #222;
  color: white;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #9c27b0;
    box-shadow: 0px 0px 10px rgba(156, 39, 176, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #9c27b0;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #e91e63;
    box-shadow: 0px 0px 15px rgba(233, 30, 99, 0.5);
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(138, 43, 226, 0.3);
  border: none;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      {/* Banner */}
      <Banner>Contact Us</Banner>

      {/* Contact Section */}
      <GridContainer>
        {/* Contact Info */}
        <InfoBox>
          <Title>Contact Information</Title>
          <p>Have questions? Need assistance? We’re here to help—reach out anytime!</p>
          <hr />
          <h3>A2 Pyramid Edutech</h3>
          <ContactList>
            <li><FaMapMarkerAlt /> Rukunpura, Tilak Nagar, Patna, India</li>
            <li><FaPhoneAlt /> +91 9472994483 (24/7 Support)</li>
            <li><FaEnvelope /> studypyramid@gmail.com</li>
          </ContactList>

          {/* Social Media */}
          <Title>Follow Us</Title>
          <SocialLinks>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </SocialLinks>
        </InfoBox>

        {/* Contact Form */}
        <InfoBox>
          <Title>Get In Touch</Title>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email Address" required />
            <Input type="text" placeholder="Subject" required />
            <TextArea rows="5" placeholder="Message" required />
            <SubmitButton>Send Message</SubmitButton>
          </Form>
        </InfoBox>
      </GridContainer>

      {/* Map Section */}
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.781657220188!2d85.06637777539542!3d25.612170677446155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1730015108345!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></MapFrame>
    </ContactContainer>
  );
};

export default ContactPage;
