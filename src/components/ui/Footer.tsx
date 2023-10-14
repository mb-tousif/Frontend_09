import React from 'react'

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <div style={footerStyle} className="bg-[#074c7d] h-[100px]">
      <p className="mt-4">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
