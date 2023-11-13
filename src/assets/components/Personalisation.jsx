import React, { useState } from "react";
import "../../index.css";
import originalImg from "../img/original.png";
import YellowImg from "../img/yellow.png";
import BlueImg from "../img/blue.png";
import GreenImg from "../img/green.png";
import Button from "./Button";

function Personalisation() {
  const [currentImage, setCurrentImage] = useState(originalImg);

  const handleButtonClick = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <>
      <div className="main">
        <div className="main__content">
          <div className="imgColor">
            <img src={currentImage} alt="original" />
          </div>
          <div className="description">
            <h1>Personalisation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestias sapiente doloribus iusto, fugit animi ea labore fuga
              sequi minus culpa veniam voluptas id consequuntur eveniet
              consequatur. Molestias, sint officiis. Est distinctio, quos et
              nesciunt repudiandae quia cupiditate cum deleniti odit, itaque
              dolorem modi cumque provident. Reiciendis rerum quasi totam
              provident expedita tempore aspernatur est adipisci voluptate
              possimus, illo mollitia. Impedit explicabo doloremque eligendi qui
              consectetur facere dicta quidem dolorum quia, sapiente deleniti
              magni quae quis dolor iste deserunt nihil temporibus architecto
              obcaecati autem modi recusandae veniam? Itaque, eaque mollitia?
              Sunt ipsam, voluptatem totam eligendi quis, a animi rerum ad, modi
              placeat asperiores amet facere nihil minus eos nam distinctio
              nobis iste veritatis! Ab impedit consectetur minus doloremque rem
              ipsa? Assumenda debitis tempora, quod odio dicta similique,
              aspernatur voluptate quis eaque non, repudiandae commodi corporis
              perferendis autem praesentium ab at sapiente doloremque laborum
              culpa sed qui. Sed delectus deserunt et.
            </p>
            <div className="buttons">
          <Button
            nameClass={"whiteButton"}
            image={originalImg}
            onClick={() => handleButtonClick(originalImg)}
          />
          <Button
            nameClass={"blueButton"}
            image={BlueImg}
            onClick={() => handleButtonClick(BlueImg)}
          />
          <Button
            nameClass={"yellowButton"}
            image={YellowImg}
            onClick={() => handleButtonClick(YellowImg)}
          />
          <Button
            nameClass={"greenButton"}
            image={GreenImg}
            onClick={() => handleButtonClick(GreenImg)}
          />
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Personalisation;
