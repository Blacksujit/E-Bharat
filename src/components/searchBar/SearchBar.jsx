import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
// import { Container } from "postcss";
// import * as tf from '@tensorflow/tfjs-speech-commands'; // Speech recognition library

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;

  // Search state
  const [search, setSearch] = useState("");

  // Voice recognition state
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Filter search data
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title && obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  useEffect(() => {
    // Check for browser compatibility and set recognition object
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
        console.log('Speech recognized:', transcript);
      };

      recognitionInstance.onerror = (error) => {
        console.error('Speech recognition error:', error);
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn('Speech recognition not supported in this browser.');
    }
  }, []);

  const handleTextInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleVoiceSearch = async () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        try {
          await recognition.start();
          setIsListening(true);
          console.log('Speech recognition started');
        } catch (error) {
          console.error('Error starting speech recognition:', error);
        }
      }
    } else {
      console.error('Speech recognition not initialized.');
    }
  };

  return (
    <div className="">
      {/* Search input */}
      <div className="input flex justify-center items-center">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={handleTextInputChange}
          className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-80 lg:w-80 md:w-80 outline-none text-black"
        />
        <button onClick={handleVoiceSearch} className="ml-2 flex items-center">
          <img 
            src="voice_assistant.png" 
            alt="voice-assistant image" 
            className="w-6 h-6 mr-2"
          />
          {isListening ? 'Stop Listening' : 'Listen'}
        </button>
      </div>

      {/* Search drop-down */}
      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-80 md:w-80 lg:w-80 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => (
                  <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => navigate(`/productinfo/${item.id}`)}>
                    <div className="flex items-center gap-2">
                      <img className="w-10" src={item.productImageUrl} alt="" />
                      {item.title}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center">
                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
