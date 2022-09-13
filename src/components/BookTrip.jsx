import Input from "./Input";
import Button from "./Button";

const BookTrip = () => (
  <div className="w-96 mt-16 ml-12">
    <div className="flex flex-row mb-3">
      <Input
        className="basis-1/2 mr-3" 
        title="Start from"
        placeholder="mm-dd-yyyy"
      />
      <Input
        className="basis-1/2" 
        title="End on"
        placeholder="mm-dd-yyyy"
      />
    </div>
    <div>
      <Input 
      className="mb-4"
      title="Travelers"
      placeholder="2 Adults, 2 Rooms"
      />
    </div>
    <Button 
      text="Book a Trip"
    />
  </div>
);

export default BookTrip;