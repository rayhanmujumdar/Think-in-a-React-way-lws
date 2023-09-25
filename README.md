# ****Stylesheets Inline Style & CSS Modules****

**8 Ways to Style React Components:**

1. Inline CSS
2. Normal CSS
3. CSS in JS
4. Styled Components
5. CSS module
    
    ```jsx
    // css module
    import styled from "../assets/css/Logo.module.css"
    // css file name add must be {example - logo.module.css}
    import { useState } from "react";
    import styled from "../assets/css/Logo.module.css"
    export default function Logo() {
      const [colorize,setColorize] = useState('black')
      const chooseColorizeRandom = () => {
        const colors = ['red','green','yellow','blue']
        const color = colors[Math.floor(Math.random() * colors.length)]
        return color
      }
    return(
    	<div className={styled.glasses}>...</div> 
    )
    }
    ```
    
6. Sass & SCSS
7. Less
8. Stylable