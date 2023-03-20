import back from '../assets/back.svg';


const Navigation = () => (
  <div className="bg-brand-primary h-20 pl-3 pb-3 flex flex-row">
    <img className="mr-3.5 w-8 self-end" src={back} />
    <div className="w-9/12 text-white text-2xl self-end font-bold">Cappadoccia</div>
    <div className="flex flex-row">
      <div className="text-white px-1.5 self-end">Messages</div>
      <div className="text-white px-1.5 self-end">Profile</div>
    </div>
  </div>
)

export default Navigation