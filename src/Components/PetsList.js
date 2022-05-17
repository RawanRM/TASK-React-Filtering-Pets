//LIST OF PETS
import data from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from "react";

function PetsList() {
  //INSIDE HERE IS PART OF REACT ONLYYY ANYTHING OUTSIDE HERE IS NOT PART OF REACT.
  //THIS PART IS FOR JAVASCRIPT PART

  //CREATE QUERY!! used to save anything written in changes into query inside search bar
  //LINK 12-13-14 ARE ALL 'STATES'
  const [pets, setpets] = useState(data);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  console.log("type", type);
  //FILTER THRU MY DATA [PETS]
  const fliteredPets = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLocaleLowerCase()) &&
        pet.type.includes(type)
    )
    //I DONT GET WHATS GOING ON HERE. why "<PetItem key={pet.id} pet={pet} />"
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  //DONT NEED THIS ONE, updated ver is Filteredpets
  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    //THIS IS THE HTML PART
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              {/* SEARCH BAR */}
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => setQuery(event.target.value)}

                  //OnClick [EVENT THT DECLARES WHEN ANYTHING IS CLICKED]
                  //onChange[EVENT THT DECLARES WHEN INPUT IS CHANGED]
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        {/* WHY DID WE ADD {filteredPets} HERE??*/}
        <div className="row justify-content-center">{fliteredPets}</div>
      </div>
    </section>
  );
}

export default PetsList;
