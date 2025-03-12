import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Aziz",
    experience: "5 yillik tajriba",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://cdn-uz.kursiv.media/wp-content/uploads/2024/09/snimok-ekrana-2024-09-11-v-09.54.51.png",
  },

  {
    name: "Madina",
    experience: "5 yillik tajriba",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://storage.kun.uz/source/uploads/20180104/images/042018/14324.jpg",
  },

  {
    name: "Shahzodbek",
    experience: "5 yillik tajriba",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_Tk3biYlPOYB4RsOpYZPlMwCv_vcksmcIg&s",
  },

  {
    name: "Otabek",
    experience: "5 yillik tajriba",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media.istockphoto.com/id/183261063/photo/studio-portrait-of-handsome-man-in-late-20s-on-grey.jpg?s=612x612&w=0&k=20&c=SFg1j7OwuPL_WZ171sC9lWXbirzwefPYa9-aKjaGNOo=",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} style={{height: "200px"}} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
