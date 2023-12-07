import HueObject from "../HueObject";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';


interface Props {
  hue: HueObject;
  toggleLike: (id?:number) => void
}

const Hue = (props: Props) => {

  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
      <div className="text-white text-2xl opacity-80 flex w-full justify-between items-center px-4 pt-2">
        <p className="">{props.hue.color}</p>
        <FontAwesomeIcon icon={props.hue.isLiked ? solidHeart : regularHeart} onClick={ ()=> props.toggleLike(props.hue.id)}/>

      </div>


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
