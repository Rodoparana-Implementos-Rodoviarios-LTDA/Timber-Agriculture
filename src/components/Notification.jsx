import { droneLogo } from "../assets";
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={droneLogo}
        width={92}
        height={78}
        alt="imagem"
        className="bg-white rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-lg">{title}</h6>

        <div className="flex items-center justify-between">
          <div className="text-xs text-n-1">1 min atrás</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

