import { Outlet } from "react-router-dom";
import "../styles/menu.css";
const Menu = () => {
  return (
    <>
      <div>
        <div className="menu--heading--container">
          <h2 className="menu--heading">MENU</h2>
          <p className="menu--description">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
        <div className="menu--tabs--container">
          <div className="menu-tab">FOOD</div>
          <div className="menu-tab active-tab">DRINKS</div>
          <div className="menu-tab">BRUNCH</div>
        </div>
        <div className="tabs--content--container">
          <div className="left--side--illustration" />
          <div className="tabs--content">
            <Outlet />
            <div className="order--online-wrap">
              <button className="order--online--btn">ORDER ONLINE</button>
              <div className="order-policies">
                <div className="policy">
                  <p>
                    Food may not be refunded. If your food was made incorrectly
                    we will remake it for you.
                  </p>
                </div>
                <div className="policy">
                  <p>
                    Food may not be refunded. If your food was made incorrectly
                    we will remake it for y ou.
                  </p>
                </div>
                <div className="policy">
                  <p>
                    Food may not be refunded. If your food was made incorrectly
                    we will remake it for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right--side--illustration" />
        </div>
      </div>
    </>
  );
};

export default Menu;
