import { StarDoodle, UnderlineDoodle } from '../assets/Icons';
import { StaggeredText } from './Animations';

export default function KateMagic() {
  return (
    <div className="relative mb-5">
      <StaggeredText text={`24KateMagic`} className={`text-4xl mb-1`} />
      <div>
        <UnderlineDoodle />
      </div>
      <div className="absolute -top-1 -right-1 animate-bounce">
        <StarDoodle />
      </div>
    </div>
  );
}
