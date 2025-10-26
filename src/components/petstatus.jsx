export default function PetStatus({ happiness }) {
  let mood = "";
  let image = "";

  if (happiness < 3) {
    mood = "Sad";
    image = "/Adobe_Express_-_file_3.png";
  } else if (happiness < 6) {
    mood = "Okay";
    image = "/Adobe_Express_-_file_4.png";
  } else {
    mood = "Happy";
    image = "/Adobe_Express_-_file_1.png";
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={`Polar Bear is ${mood}`}
        className="w-[250px] h-auto mb-2 transition-transform duration-500 hover:scale-105"
      />
      <p className="text-2xl text-white drop-shadow-[2px_2px_0_black]">
        Mood: {mood}
      </p>
    </div>
  );
}
