import React from "react";
import AboutImg from "../assets/images/about.png";
const About = () => {
  return (
    <div className="container">
      <div className="row col-12 bg-info p-3 rounded">
        <h3>About us</h3>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          sint quibusdam itaque non facere et, perspiciatis earum vel impedit
          fugit! Voluptates, vel dolor culpa ea reiciendis et! Omnis placeat
          commodi id blanditiis praesentium reiciendis maxime aliquid veniam
          quas quidem suscipit itaque quasi debitis, recusandae vel iure eum non
          cum expedita quo maiores, modi quos esse. Facere eveniet qui cumque.
          Distinctio voluptatem laborum sit fugiat cupiditate expedita vero sed
          explicabo ad. Eaque, consectetur ut impedit cumque perferendis
          dolorem. Ipsa impedit exercitationem ducimus similique reprehenderit
          iusto repellendus nostrum, earum numquam totam, debitis aspernatur vel
          itaque sint et delectus ab sed quasi asperiores?
        </div>
        <div className="col-md-5 rounded text-center">
          <img src={AboutImg} alt="AboutImg" className="img-fluid AboutImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
