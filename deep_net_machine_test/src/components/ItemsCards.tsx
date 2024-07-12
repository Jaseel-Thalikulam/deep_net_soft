import { Drink } from "../page/Drinks";
import drink from "/drink-final.png";
import drink2 from "/drink-new.png";
import cocktail from "/cocktail.png";
import cocktail2 from "/cocktail2.png";
import hookah from "/hookah.png";

const imageMap: { [key: string]: string } = {
  "cocktail-one": cocktail,
  "cocktail-two": cocktail2,
  "drink-one": drink,
  "drink-two": drink2,
};

const ItemsCards = ({
  title,
  data,
  img,
}: {
  title: string;
  data: Drink[];
  img?: string[];
}) => {
  return (
    <div className="drinks--container ">
      {img?.includes("drink-one") && (
        <img
          src={imageMap["drink-one"]}
          className="left--top--drink--img--one"
        />
      )}
      {img?.includes("drink-two") && (
        <img
          src={imageMap["drink-two"]}
          className="left--top--drink--img--two"
        />
      )}
      {img?.includes("cocktail-one") && (
        <img src={imageMap["cocktail-one"]} className="right--top--img" />
      )}
      {img?.includes("cocktail-two") && (
        <img src={imageMap["cocktail-two"]} className="right--bottom--img" />
      )}
      {title === "HOOKAH FLAVORS" ? <img className="hookah-img" src={hookah} /> : null}
      <h1>{title}</h1>
      <div className="drinks--inner--container">
        {title === "HOOKAH FLAVORS" ? (
          <>
            <div className="titles--wrap">
              {data.map((item, index) => (
                <>
                  <h5 className="hookah-title">{item?.name}</h5>
                </>
              ))}
            </div>
          </>
        ) : (
            data.map((item, index) => (
              <>
              

                <div key={index} className="item--wrap">
              <div className="drinks--menu--items">
                <h6 className="item--title">{item?.name}</h6>
                <span className="dotted-line"></span>
                <h6 className="item--title">{item?.price}</h6>
              </div>
              <p className="item-description">{item?.description}</p>
             </div>
          
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsCards;
