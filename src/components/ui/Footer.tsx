import React from 'react'

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <div style={footerStyle} className="bg-[#474E68]">
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="pt-10"
      >
        Printing Service Ltd.
      </h2>
      <h4
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="p-2"
      >
        Bringing Colors to Life, <br /> One Stroke at a Time!
      </h4>
      <p
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="pb-10"
      >
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
