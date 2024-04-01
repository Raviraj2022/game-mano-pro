import Aos from "aos";
import React, { useEffect } from "react";

const Text = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="container p-5 mt-5 bg-secondary">
      <div className="d-flex justify-content-center" data-aos="fade-up">
        <h2>Product Lists</h2>
      </div>
      <div class="card" data-aos="fade-right">
        <div class="card-body">
          <h5 class="card-title">Phones</h5>
          <p class="card-text">
            Cellular telephones, or simply cell phones, are portable devices
            that may be used in motor vehicles or by pedestrians. Communicating
            by radio waves, they permit a significant degree of mobility within
            a defined serving region that may range in area from a few city
            blocks to hundreds of square kilometres. The first mobile and
            portable subscriber units for cellular systems were large and heavy.
            With significant advances in component technology, though, the
            weight and size of portable transceivers have been significantly
            reduced. In this section, the concept of cell phones and the
            development of cellular systems are discussed.
          </p>
        </div>
      </div>
      <div class="card mt-4" data-aos="fade-left">
        <div class="card-body">
          <h5 class="card-title">Laptop</h5>
          <p class="card-text">
            Laptops have many advantages over desktop computers. Laptops’
            portability and battery make productivity possible nearly anywhere,
            especially as almost all laptops possess Wi-Fi, Bluetooth, and the
            ability to connect to cellular networks. Laptops are also far more
            power efficient than desktop computers. However, laptops still
            cannot reach the performance levels of desktops, making the latter
            more desirable for resource-intensive activities—for example,
            playing the most advanced computer games. Additionally, desktop
            computers allow users to swap out the processor, RAM, and hard drive
            when they need replacing. The way that laptops are designed means
            that, unlike desktop computers, they are rarely upgradeable
          </p>
        </div>
      </div>
      <div class="card mt-4" data-aos="fade-right">
        <div class="card-body">
          <h5 class="card-title">fragrance</h5>
          <p class="card-text">
            A fragrance is defined as a combination of organic compounds that
            produces a distinct smell or odour. A perfume is a liquid mixture
            used to emit a pleasant odour. It is formed from fragrant essential
            oils derived from plants and spices or synthetic aromatic compounds.
            Cosmetic fragrances applied to a person’s body to emit a pleasant
            smell include perfume, cologne, and aftershave.
          </p>
        </div>
      </div>
      <div class="card mt-4" data-aos="fade-left">
        <div class="card-body">
          <h5 class="card-title">Skin Care Product</h5>
          <p class="card-text">
            The current generation of people is more conscious about their
            health, including having a regular skincare routine. A proper
            skincare routine will ensure that your face looks clear and fresh
            regardless of the pollutants and other damages that might come your
            way. It regularly removes the excess oil and dirt content present
            within your pores, prevents the occurrence of acne, reduces sunspots
            and makes your skin look bright and plump.
          </p>
        </div>
      </div>
      <div class="card mt-4" data-aos="fade-right">
        <div class="card-body">
          <h5 class="card-title">Groceries</h5>
          <p class="card-text">
            A grocery supermarket is a large retail store that sells food and
            other household products. The store is divided into different
            sections and aisles. The separate aisle helps in finding the right
            product easily by customers. Thus, it is important to deliver an
            excellent shopping experience to customer. Moreover, you can find
            fresh vegetables, dairy products, frozen foods, snacks, and other
            household items. In other words, supermarket is a one stop for
            buying all kinds of essential items for your home.
          </p>
        </div>
      </div>
      <div class="card mt-4" data-aos="fade-left">
        <div class="card-body">
          <h5 class="card-title">Home Decoration</h5>
          <p class="card-text">
            Home decor is clearing and creating living spaces that are visually
            appealing and more attractive to the human eye. Designing and
            decorating our homes is something we can easily envision. We all
            know what our ideal home looks like, and often it’s making this
            vision a reality that’s difficult to achieve. There are many
            pitfalls we can fall into when we’re on a mission to clear and
            create a beautiful living space that will suit our tastes. We’ve
            taken it upon ourselves to put some strategies together to help you
            through this process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
