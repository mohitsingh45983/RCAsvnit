import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mdb from 'mdb-ui-kit';

const Testimonials = () => {
  
  return (
    <>
      <div
        id="carouselExampleControls"
        class="container carousel slide text-center carousel-dark"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner shadow p-3 mb-5 bg-white rounded mt-4">
          <div class="carousel-item active">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="ProfilePhoto.png"
              alt="avatar"
              style={{width: '150px'}}
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">Name</h5>
                <p>Post</p>
                <p class="text-muted">
                  <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#f28121",fontSize: 20,}} className='pe-2' />
                  RCA provides you a platform for learning different domains like management, finance, teamwork with
                    technical skills like coding, web development, graphic designing.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="ProfilePhoto.png"
              alt="avatar"
              style={{width: '150px',borderRadius:'50%'}}
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">Name</h5>
                <p>Post</p>
                <p class="text-muted">
                  <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#f28121",fontSize: 20,}} className='pe-2' />
                  RCA SVNIT Surat is build with strong foundations and values enriching the culture and self development
                    of students from different backgrounds.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="ProfilePhoto.png"
              alt="avatar"
              style={{width: '150px'}}
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">Name</h5>
                <p>Post</p>
                <p class="text-muted">
                  <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#f28121",fontSize: 20,}} className='pe-2' />
                  We at Rajasthan Cultural Association belive in the spirit of brotherhood and living the rich
                    culture of Rajasthan away from home in our other home i.e SVNIT Surat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonials;
