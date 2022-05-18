import React, { useState } from "react";
//MY BUTTONS
//DO I NEED to keep track of my changing id's? => yes => why? bec I will have to change them depending on the pet being adopted
//No => bec I am just getting the id, then using it to delete the component.
//NOTE THIS PROP "{pet}" i am opening <PetItem key=/// pet=//> and UNBOXING "pet" which is for ONE Pet at a time.
function PetItem({ pet, handleAdopts }) {
  const [petState, pettingPet] = useState(pet.image);

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petState} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => pettingPet(pet.image2)}
          >
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => handleAdopts(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
