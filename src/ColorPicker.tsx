import { useState } from "react";
import styles from "./ColorPicker.module.css"

type ColorPickerProps = {
    colorPalette: string[];
}

const blackColor = '#000000';

const ColorPicker: React.FC<ColorPickerProps> = ({ colorPalette }) => {
    const [pickedColor, setPickedColor] = useState<string>(blackColor);

    const handleClick = (color: string) => setPickedColor(color);

    return (
        <div className={styles.wrapper}>
            <div
                data-testid="colorpicker-currentColor"
                className={styles.selectedColor}
                style={{background: pickedColor}}
            >
            </div>
            <div className={styles.picker}>
                {colorPalette.map((color) => (
                    <div
                        data-testid="colorpicker-colorSelector"
                        key={color}
                        style={{background: color}}
                        className={styles.color}
                        onClick={() => handleClick(color)}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ColorPicker }
