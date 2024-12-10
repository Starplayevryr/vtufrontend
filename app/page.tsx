import React from "react";
import "./globals.css"; // Ensure the import path is correct

const Home = () => {
  return (
    <section className="relative">
      {/* Title Section - Positioned after the navbar */}
      <div className="relative z-10 mt-20 text-center mb-10">
        <h1 className="text-6xl font-bold text-white">GAT VTU Youth Fest 2025</h1>
        <p className="text-lg text-white mt-4">Celebrating 25 Years of Excellence</p>
      </div>

      {/* Flex container to align text and image */}
      <div className="flex items-center justify-center px-10 mt-10"> {/* Removed h-screen and added mt-10 */}
        {/* Text Box */}
        <div className="p-6 bg-opacity-80 rounded-lg shadow-lg"
  style={{
    width: "450px", // Adjusts width based on content size
    padding: "20px", // Adds padding inside the box
  }}
>
  <h2 className="text-4xl font-bold text-white custom-font">
    ᴡʜᴇʀᴇ ɪɴɴᴠᴏᴀᴛɪᴏɴ ᴍᴇᴇᴛꜱ ᴄᴇʟᴇʙʀᴀᴛɪᴏɴ
  </h2>
  
  {/* New text with smaller font */}
  <p className="text-lg text-white mt-4">
  𝙹𝚘𝚒𝚗 𝚞𝚜 𝚏𝚘𝚛 𝚅𝚃𝚄 𝚈𝚘𝚞𝚝𝚑 𝙵𝚎𝚜𝚝 𝟸0𝟸𝟻, 𝚊 𝚜𝚙𝚎𝚌𝚝𝚊𝚌𝚞𝚕𝚊𝚛 𝚜𝚑𝚘𝚠𝚌𝚊𝚜𝚎 𝚘𝚏 𝚌𝚞𝚕𝚝𝚞𝚛𝚎, 𝚌𝚛𝚎𝚊𝚝𝚒𝚟𝚒𝚝𝚢, 𝚊𝚗𝚍 𝚊𝚌𝚊𝚍𝚎𝚖𝚒𝚌 𝚋𝚛𝚒𝚕𝚕𝚒𝚊𝚗𝚌𝚎. 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 𝚊 𝚟𝚒𝚋𝚛𝚊𝚗𝚝 𝚊𝚝𝚖𝚘𝚜𝚙𝚑𝚎𝚛𝚎 𝚏𝚒𝚕𝚕𝚎𝚍 𝚠𝚒𝚝𝚑 𝚎𝚗𝚐𝚊𝚐𝚒𝚗𝚐 𝚊𝚌𝚝𝚒𝚟𝚒𝚝𝚒𝚎𝚜 𝚊𝚗𝚍 𝚒𝚗𝚜𝚙𝚒𝚛𝚒𝚗𝚐 𝚙𝚎𝚛𝚏𝚘𝚛𝚖𝚊𝚗𝚌𝚎𝚜.
  </p>
</div>

        {/* Image next to the text box */}
        <div className="flex justify-center items-center flex-1">
        <img
  src="/images/banner.jpg" // Replace with your image path
  alt="Global Academy Image"
  className="w-full h-auto"
  style={{
    maxWidth: "800px",
    height: "auto",
    border: "2px solid", // Border with 2px solid (you can change the color if needed)
    borderRadius: "15px" // Makes the corners rounded, adjust the value for more or less rounding
  }}
/>
        </div>
      </div>
    </section>
  );
};

export default Home;
