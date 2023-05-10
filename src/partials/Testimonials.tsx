import * as React from "react";

// import TestimonialImage01 from '../images/testimonial-01.jpg';
// import TestimonialImage02 from '../images/testimonial-02.jpg';
// import TestimonialImage03 from '../images/testimonial-03.jpg';


type TestimonialsProps = {
  color: any;
};

const Testimonials = ({ color } : TestimonialsProps) => {    

  const getColorClasses = () => {
    let classes = 'text-base ';
    switch (color) {
      case 'red':
        classes += 'text-red-600';
        break;
      case 'blue':
        classes += 'text-blue-600';
        // classes += 'hover:bg-blue-700';
        break;
      case 'green':
        classes += 'text-green-600';
        break;
      // Add more cases for other colors if needed
      default:
        break;
    }
    return classes;
  };


  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto  text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't Take Our Word for It</h2>
            <p className="text-xl text-gray-400">Find real stories from real customers who have had positive experiences with our products and services. From glowing reviews to helpful feedback, these testimonials give you an inside look at what it's like to do business with us.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded-lg" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={"https://docs.fohss.lk/storage/0dbd61057a19f1d42453a7ecc60d299c/0dbd61057a19f1d42453a7ecc60d299c/ecec72d7461f236d3b4226576e72047f.png"} width="48" height="48" alt="Testimonial 01" />
                    <svg className={`absolute top-0 right-0 -mr-3 w-6 h-5 fill-current ${getColorClasses()}`} viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                        </div>
                </div>
                <blockquote className="text-lg text-gray-200 grow">— I was blown away by the level of care and attention to detail that went into my experience. The product was exceptional and the staff were incredibly knowledgeable.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Christian</cite> - <a className={`${getColorClasses()} hover:text-gray-200 transition duration-150 ease-in-out"`} href="#0">Our Community</a>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-800 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={"https://docs.fohss.lk/storage/0dbd61057a19f1d42453a7ecc60d299c/0dbd61057a19f1d42453a7ecc60d299c/ecec72d7461f236d3b4226576e72047f.png"} width="48" height="48" alt="Testimonial 02" />
                      <svg className={`absolute top-0 right-0 -mr-3 w-6 h-5 fill-current ${getColorClasses()}`} viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                        </div>
                  </div>
                  <blockquote className="text-lg text-gray-200 grow">— I cannot recommend this business enough. Their customer service is unmatched, and their product is simply amazing. I'm so glad I found them!</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Greg</cite> - <a className={`${getColorClasses()} hover:text-gray-200 transition duration-150 ease-in-out`} href="#0">Our Community</a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-800 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={"https://docs.fohss.lk/storage/0dbd61057a19f1d42453a7ecc60d299c/0dbd61057a19f1d42453a7ecc60d299c/ecec72d7461f236d3b4226576e72047f.png"} width="48" height="48" alt="Testimonial 03" />
                        <svg className={`absolute top-0 right-0 -mr-3 w-6 h-5 fill-current ${getColorClasses()}`} viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                        </svg>
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-200 grow">— From start to finish, my experience with this business was fantastic. The team was friendly and helpful, and the product was everything I was hoping for and more.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Lexi</cite> - <a className={`${getColorClasses()} hover:text-gray-200 transition duration-150 ease-in-out`} href="#0">Our Community</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
