import React, { useState } from "react";
import "../../index.css";
import ogImg from "../img/original.png";
import YellowImg from "../img/yellow.png";
import BlueImg from "../img/blue.png";
import BlueButon from "./button/Blue";
import YellowButon from "./button/Yellow";

function Personalisation() {
  const [currentImage, setCurrentImage] = useState(ogImg);


  const handleBlueButtonClick = () => {
    setCurrentImage(BlueImg);
  };


  const handleYellowButtonClick = () => {
    setCurrentImage(currentImage);

  };

  return (
    <>
      <div className="main">
        <div className="main__content">
          <div className="imgColor">
            <img src={YellowImg} alt="original" />
          </div>
          <div className="description">
            <h1>Personalisation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis animi veritatis, molestiae odio deleniti? Itaque nam voluptate inventore, recusandae fugiat dolores? Doloremque asperiores eaque ducimus neque voluptatem, eum labore.
              Suscipit rerum eos, laborum quos aliquam, maxime dolor similique facilis ut nisi sit quam ipsa odio doloremque enim necessitatibus a veniam. Ad quisquam tenetur exercitationem ipsa aspernatur eum adipisci molestiae.
              Beatae veritatis laudantium, dolore eius aut dolorem incidunt! Dolor voluptatibus quo maxime natus dolorem magni ea necessitatibus at iure explicabo veniam facilis laborum suscipit, labore expedita sint perspiciatis modi ipsum?
              Velit animi veritatis ipsum tenetur obcaecati officiis reiciendis tempora odio asperiores hic incidunt vero laborum aliquid sit molestiae ex eaque repellat voluptas exercitationem quam aut sint, consectetur cupiditate! Expedita, asperiores.
              At eum culpa distinctio. Maiores nulla omnis nihil distinctio ratione reprehenderit eaque, laboriosam at ut facilis doloribus quos neque rem. Nemo, aliquam error non excepturi recusandae amet repudiandae. Molestias, odio.
            </p>
          </div>
        </div>
        {/* Utilisez des fonctions fléchées pour passer les paramètres corrects */}
        <BlueButon onClick={handleBlueButtonClick} />
        <YellowButon onClick={handleYellowButtonClick} />
      </div>
    </>
  );
}

export default Personalisation;
