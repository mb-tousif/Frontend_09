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
      <h2 className="pt-10">Printing Service Ltd.</h2>
      <h4 className="p-2">
        Bringing Colors to Life, <br /> One Stroke at a Time!
      </h4>
      <p className="pb-10">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
