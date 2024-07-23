import { styles } from "../../styles/styles"


const WhiteButton = ({children}) => {
    return (
        <div>
            <button style={styles.whiteButton}>{children}</button>
        </div>
    )
}

export default WhiteButton
