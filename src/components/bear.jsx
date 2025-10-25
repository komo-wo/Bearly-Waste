import { useEffect } from "react";
import "./bear.css";

export default function Bear() {
  useEffect(() => {
    // === BEAR ANIMATION CODE ===
    const wrapper = document.querySelector(".wrapper");
    if (!wrapper) return;

    class WorldObject {
      constructor(props) {
        Object.assign(this, props);
        this.container.appendChild(this.el);
      }
      setStyles() {
        Object.assign(this.el.style, {
          position: "absolute",
          left: `${this.x}px`,
          top: `${this.y}px`,
        });
      }
    }

    class Bear extends WorldObject {
      constructor(props) {
        super({
          ...props,
          el: Object.assign(document.createElement("div"), {
            className: "bear object",
            innerHTML: `
              <div class="ears"><div class="inner-ears">
                <div class="ear round"></div><div class="ear round"></div>
              </div></div>
              <div class="face">
                <div class="inner-face">
                  <div class="eye"></div><div class="nose"></div><div class="eye"></div>
                </div>
              </div>
            `,
          }),
        });
        this.setStyles();
      }
    }

    new Bear({
      container: wrapper,
      x: 140,
      y: 200,
    });
  }, []);

  return <div className="wrapper" style={{ position: "relative", width: "200px", height: "200px" }} />;
}
