import background1 from "./_assets/Mask_group4.png";
import background2 from "./_assets/Mask_group6.png";
import background3 from "./_assets/Mask_group7.png";
import background4 from "./_assets/Rectangle_346568744.png";
import background5 from "./_assets/Rectangle_3465687442.png";
import line from "./_assets/Rectangle_346568748.png";
import block1 from "./_assets/image_12974.png";
import block2 from "./_assets/image_12975.png";
import block3 from "./_assets/image_12976.png";
import block4 from "./_assets/image_12977.png";
import TitleWithCircle from "../../../../_components/TitleWithCircle";

const button_color = "#2D7597";
const background = "#F7F7F7";
const label = "#FD933F";

const FF = "PingFang SC, PingFang SC";

const title = "Services";
const small_title = "3.5rem";
const section = "2.625rem";
const paragraph = "1.125rem";
const button = "1rem";
const PAGE_PADDING = "px-4 sm:px-6 lg:px-8";
const PAGE_MAXW = "max-w-6xl";
const PAGE_SPACING_Y = "py-12 lg:py-16";

function ServicesOverview() {
  return (
    <div
      className="justify-center border-box justify-items-center py-3 bg-no-repeat"
      style={{
        backgroundImage: `url(${background1}), url(${background2}), url(${background3})`,
        backgroundPosition: "right top, right 85%, left 55%",
        backgroundSize: "28% auto, 12% auto, 15% auto",
        backgroundColor: background,
      }}
    >
      <div className={`mx-auto ${PAGE_MAXW} ${PAGE_PADDING} ${PAGE_SPACING_Y}`}>
        <div className="mb-20">
          <div className="mb-[88px]">
            <TitleWithCircle text={title} />
          </div>
          <div className="mb-[124px]">
            <h1
              className="font-bold max-w-4xl"
              style={{ fontSize: small_title, fontFamily: FF }}
            >
              Building with Precision,Delivering with lmpact.
            </h1>
            <h3
              className="mt-4 mb-5"
              style={{ fontSize: paragraph, fontFamily: FF }}
            >
              We provide end-to-end solutions to bring your digital ideas to
              life.
            </h3>
            <button
              className="flex items-center mt-8 space-x-3 py-2.5 px-4 rounded-full hover:bg-button_hover max-h-14"
              style={{ backgroundColor: button_color }}
            >
              <h5
                className="text-white"
                style={{ fontSize: button, fontFamily: FF }}
              >
                Connect with our experts
              </h5>
            </button>
          </div>
        </div>
        <section className="space-y-12">
          <div
            className="flex w-full py-2 bg-cover bg-no-repeat justify-between items-center"
            style={{
              backgroundImage: `url(${background4})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "left center",
            }}
          >
            <div className="grid gap-3 pl-[42px]">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${line})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "left 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Full-stack Consulting
              </h3>
              <h5
                className="w-4/5"
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                Expert guidance on architecture, tech stack, and bestpractices
                for building robust and scalable applications
              </h5>
              <div
                className="flex gap-3"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className=" bg-label bg-opacity-10 h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className=" bg-label bg-opacity-10 h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
            <img
              src={block1}
              alt="Full-stack Consulting"
              className="self-center w-64 h-64 transform -translate-x-15"
            ></img>
          </div>

          <div
            className="flex w-full py-3 bg-cover bg-no-repeat justify-between items-center"
            style={{
              backgroundImage: `url(${background5})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "right center",
            }}
          >
            <img
              src={block2}
              alt="Full-stack Consulting"
              className="self-center ml-20 translate-y-5"
              style={{ width: "11rem" }}
            ></img>
            <div className="grid text-right gap-3 pr-[42px] py-[42px]">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${line})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "right 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Product Incubation
              </h3>
              <h5
                className="w-4/5 ml-auto"
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                From idea to MVP, we partner with you to build, launch,and grow
                your next big thing.
              </h5>
              <div
                className="flex gap-3 ml-auto"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex w-full py-10 bg-cover bg-no-repeat justify-between items-center"
            style={{
              backgroundImage: `url(${background4})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "left center",
            }}
          >
            <div className="grid gap-3 pl-[42px]">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${line})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "left 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Technology Acceleration
              </h3>
              <h5
                className="w-4/5"
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                Accelerate your development cycles and enhance yourteam's
                capabilities with our hands-on expertise,
              </h5>
              <div
                className="flex gap-3"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
            <img
              src={block3}
              alt="Full-stack Consulting"
              className="self-center transform -translate-x-38 translate-y-5"
              style={{ width: "9rem" }}
            ></img>
          </div>

          <div
            className="flex w-full py-3 bg-cover bg-no-repeat justify-between items-center"
            style={{
              backgroundImage: `url(${background5})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "right center",
            }}
          >
            <img
              src={block4}
              alt="Full-stack Consulting"
              className="self-center ml-20"
              style={{ width: "11rem" }}
            ></img>
            <div className="grid text-right gap-3 pr-[42px] py-[42px]">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${line})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "right 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Dedicated Development
              </h3>
              <h5
                className="w-4/5 ml-auto"
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                From idea to MVP, we partner with you to build, launch,and grow
                your next big thing.
              </h5>
              <div
                className="flex gap-3 ml-auto"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesOverview;
