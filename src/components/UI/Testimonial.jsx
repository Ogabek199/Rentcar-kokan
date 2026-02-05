import Slider from "react-slick";
import "../../styles/testimonial.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Xizmat juda a’lo darajada! Avtomobillar toza va qulay, bron qilish esa juda oson. Tavsiya qilaman!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://cdn.uza.uz/2025/01/27/18/24/2FhbrttwJ2720WmOhr9IUTdizlX3LL9L_front.PNG" alt="Sardor" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sardor</h6>
            <p className="section__description">Mijoz</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Uzoq safar uchun mashina oldim va juda mamnun bo‘ldim. Yoqilg‘i tejamkor, haydash esa juda yoqimli edi!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://cdn.uza.uz/2024/11/26/18/14/huEQojrUvNuqipRKZxbaacI7k3KbpnbH_front.PNG" alt="Abdulaziz" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Abdulaziz</h6>
            <p className="section__description">Mijoz</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Mijozlarga xizmat ko‘rsatish juda samimiy va tezkor. Hech qanday muammo bo‘lmadi, albatta yana foydalanaman!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://pngimg.com/uploads/man/man_PNG6533.png" alt="Jasur" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jasur</h6>
            <p className="section__description">Mijoz</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Xizmat juda a’lo darajada! Avtomobillar toza va qulay, bron qilish esa juda oson. Tavsiya qilaman!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://cdn.uza.uz/2024/11/26/18/14/huEQojrUvNuqipRKZxbaacI7k3KbpnbH_front.PNG" alt="Abduqodir" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Abduqodir</h6>
            <p className="section__description">Mijoz</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
