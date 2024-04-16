
import Section from "./Section";
import { field } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const FieldCard = () => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10">
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {field.map((item) => {
          return (
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-lime-500"
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full h-[30rem]"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-lime-300">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default FieldCard;
