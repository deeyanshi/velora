
import { useEffect, useMemo, useRef, useState } from "react";

function getVisual(car, mode) {
  const visual = car?.configurator || {};

  const frames =
    mode === "interior"
      ? visual.interior || []
      : visual.exterior || [];

  const fallback =
    mode === "interior"
      ? visual.interiorImage || car?.image
      : visual.image || car?.image;

  return {
    frames: Array.isArray(frames) ? frames.filter(Boolean) : [],
    fallback,
  };
}

export default function CarConfigurator({
  car,
  selectedColor,
  selectedVariant,
  onColorChange,
  onVariantChange,
}) {
  const [mode, setMode] = useState("exterior");
  const [frame, setFrame] = useState(0);
  const [previewAngle, setPreviewAngle] = useState(0);

  const dragStart = useRef(null);
  const lastX = useRef(0);

  const { frames, fallback } = useMemo(
    () => getVisual(car, mode),
    [car, mode]
  );

  const has360 = frames.length > 1;
  const interactivePreview = Boolean(frames.length || fallback);

  useEffect(() => {
    setFrame(0);
    setPreviewAngle(0);
  }, [selectedColor?.name, mode, car?.id, selectedVariant]);

  const rotateBy = (steps) => {
    if (!frames.length) return;

    setFrame(
      (current) =>
        (current + steps + frames.length) % frames.length
    );
  };

  const onPointerDown = (event) => {
    if (!interactivePreview) return;

    dragStart.current = event.clientX;
    lastX.current = event.clientX;

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!interactivePreview || dragStart.current === null) return;

    const delta = event.clientX - lastX.current;

    if (Math.abs(delta) >= 8) {
      if (has360) {
        rotateBy(delta < 0 ? 1 : -1);
      } else {
        setPreviewAngle((angle) =>
          Math.max(
            -18,
            Math.min(18, angle + (delta < 0 ? 2 : -2))
          )
        );
      }

      lastX.current = event.clientX;
    }
  };

  const stopDrag = () => {
    dragStart.current = null;
  };

  const activeSrc = frames[frame] || fallback;

  const imageTransform = has360
    ? undefined
    : `perspective(1100px) rotateY(${previewAngle}deg)`;

  return (
    <section className="velora-configurator">
      <div className="configurator-heading">
        <div>
          <p className="kicker">VELORA CONFIGURATOR</p>
          <h2>See it. Spin it. Make it yours.</h2>
          <p>
            Explore the exterior or interior and rotate the vehicle.
            Original manufacturer images are preserved without
            artificial colour filters.
          </p>
        </div>

        <div className="configurator-mode">
          <button
            type="button"
            className={mode === "exterior" ? "active" : ""}
            onClick={() => setMode("exterior")}
          >
            Exterior
          </button>

          <button
            type="button"
            className={mode === "interior" ? "active" : ""}
            onClick={() => setMode("interior")}
          >
            Interior
          </button>
        </div>
      </div>

      <div className="configurator-grid">
        <div
          className={`configurator-stage ${
            interactivePreview ? "is-360" : ""
          } ${has360 ? "true-360" : "preview-360"}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onPointerLeave={stopDrag}
        >
          <div className="configurator-badge">
            {has360 ? "360° DRAG VIEW" : "ORIGINAL IMAGE"}
          </div>

          <img
            src={activeSrc}
            alt={`${car.brand} ${car.name} ${
              selectedVariant || ""
            } ${mode}`}
            draggable="false"
            style={{
              transform: imageTransform,
              filter: "none",
            }}
          />

          {interactivePreview && (
            <div className="drag-hint">
              ↔ Drag left / right to rotate
            </div>
          )}

          {interactivePreview && (
            <div className="rotation-controls">
              <button
                type="button"
                onClick={() => rotateBy(-1)}
                aria-label="Rotate left"
              >
                ‹
              </button>

              <span>
                {has360
                  ? `${frame + 1} / ${frames.length}`
                  : `${previewAngle > 0 ? "+" : ""}${previewAngle}°`}
              </span>

              <button
                type="button"
                onClick={() => rotateBy(1)}
                aria-label="Rotate right"
              >
                ›
              </button>
            </div>
          )}
        </div>

        <aside className="configurator-options">
          <div className="config-option-block">
            <div className="option-title">Choose your colour</div>

            <div className="config-colours">
              {(car.colors || []).map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`config-color ${
                    selectedColor?.name === color.name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => onColorChange(color)}
                  title={color.name}
                >
                  <span
                    className="config-color-dot"
                    style={{ background: color.hex }}
                  />

                  <span>{color.name}</span>
                </button>
              ))}
            </div>

            <div className="selected-colour-name">
              Selected: {selectedColor?.name || "Standard"}
            </div>

            <p className="configurator-note">
              The selected colour is saved with your configuration.
              The preview remains the original image because a
              verified image for every paint colour is not available.
            </p>
          </div>

          {car?.variants?.length > 0 && (
            <div className="config-option-block">
              <div className="option-title">Choose your variant</div>

              <div className="config-variants">
                {car.variants.map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    className={`config-variant ${
                      selectedVariant === variant.name
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      onVariantChange?.(variant.name)
                    }
                  >
                    <span>{variant.name}</span>
                    <small>
                      {variant.position || variant.transmission}
                    </small>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="config-option-block">
            <div className="option-title">Viewing controls</div>

            <button
              type="button"
              className="config-control"
              onClick={() => {
                setFrame(0);
                setPreviewAngle(0);
              }}
            >
              Reset view
            </button>

            <button
              type="button"
              className="config-control"
              onClick={() =>
                has360
                  ? rotateBy(-1)
                  : setPreviewAngle((angle) =>
                      Math.max(-18, angle - 2)
                    )
              }
            >
              Rotate left
            </button>

            <button
              type="button"
              className="config-control"
              onClick={() =>
                has360
                  ? rotateBy(1)
                  : setPreviewAngle((angle) =>
                      Math.min(18, angle + 2)
                    )
              }
            >
              Rotate right
            </button>
          </div>

          {!has360 && (
            <div className="configurator-note">
              <strong>360° asset not yet supplied</strong>
              <span>
                This car has no multi-angle image set available
                for a true 360° view. Rotation controls provide a
                limited preview rather than a genuine 360° rotation.
              </span>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
