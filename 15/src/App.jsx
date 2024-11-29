import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";

import { fetchUserPlaces, updatedUserPlaces } from "./http.js";
import ErrorPage from "./components/Error.jsx";


function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdating, setErrorUpdating] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=>{
    async function fetchPlaces(){
     setIsLoading(true);
      try {
         
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setError({message:error.message || 'Failed to fetch user places'})
      }
     setIsLoading(false);
    }

  fetchPlaces()
  },[])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await updatedUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdating({ message: error.message || "Failed to update" });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );
      try {
        await updatedUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
         setUserPlaces(userPlaces);
         setErrorUpdating({ message: error.message || "Failed to delete" });
      }
      
      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError(){
    setErrorUpdating(null)
  }

  return (
    <>
      <Modal open={errorUpdating} onClose={handleError}>
       {errorUpdating && <ErrorPage
          message={errorUpdating.message}
          title="An error occurred!"
          onConfirm={handleError}
        />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorPage title="An error occurred!" message={error.message}/>}
        {!error && (<Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          loadingText="Fetching your places ..."
          isLoading={isLoading}
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />)}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
